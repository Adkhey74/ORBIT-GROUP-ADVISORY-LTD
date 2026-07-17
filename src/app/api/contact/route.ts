import { NextResponse } from "next/server";
import { site } from "@/content/site";
import { contactSchema } from "@/lib/contactSchema";

export const runtime = "nodejs";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    // Honeypot failure (website filled) → accept silently to not tip off bots.
    const honeypotHit = parsed.error.issues.some((i) => i.path[0] === "website");
    if (honeypotHit) return NextResponse.json({ ok: true });

    const first = parsed.error.issues[0]?.message ?? "Please check the form and try again.";
    return NextResponse.json({ error: first }, { status: 422 });
  }

  const { name, email, organisation, enquiryType, message } = parsed.data;

  const apiKey = process.env.BREVO_API_KEY;
  const sender = process.env.BREVO_SENDER_EMAIL;
  const to = process.env.CONTACT_TO ?? site.company.email;

  // Dev fallback: no key configured → log and succeed so the UI can be tested.
  if (!apiKey || !sender) {
    console.info("[contact] Brevo not configured — submission received:", {
      name,
      email,
      organisation,
      enquiryType,
      message,
    });
    return NextResponse.json({ ok: true, delivered: false });
  }

  const htmlContent = `
    <h2>New enquiry — Orbit Group website</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${organisation ? `<p><strong>Organisation:</strong> ${escapeHtml(organisation)}</p>` : ""}
    ${enquiryType ? `<p><strong>Nature of enquiry:</strong> ${escapeHtml(enquiryType)}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
  `;

  try {
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        sender: { name: "Orbit Group Website", email: sender },
        to: [{ email: to }],
        replyTo: { email, name },
        subject: enquiryType
          ? `New enquiry — ${enquiryType} — ${name}`
          : `New enquiry from ${name}`,
        htmlContent,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[contact] Brevo error:", res.status, detail);
      return NextResponse.json(
        { error: "We could not send your message. Please try again or email us directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] Network error:", err);
    return NextResponse.json(
      { error: "We could not send your message. Please try again later." },
      { status: 502 },
    );
  }
}
