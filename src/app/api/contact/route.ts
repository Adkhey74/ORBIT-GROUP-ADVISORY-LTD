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

/** Table row for the email body — mirrors the site's label/value pattern (uppercase, tracked, violet label). */
function emailRow(label: string, value: string): string {
  return `
              <tr>
                <td style="padding:14px 0;border-bottom:1px solid #eeeef1;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="width:130px;vertical-align:top;color:#8b5cf6;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;font-family:Arial,Helvetica,sans-serif;">${label}</td>
                      <td style="color:#050505;font-size:14px;line-height:1.5;font-family:Arial,Helvetica,sans-serif;">${value}</td>
                    </tr>
                  </table>
                </td>
              </tr>`;
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
    const first = parsed.error.issues[0]?.message ?? "Please check the form and try again.";
    return NextResponse.json({ error: first }, { status: 422 });
  }

  const { fullName, email, company, country, service, message } = parsed.data;

  const apiKey = process.env.BREVO_API_KEY;
  const sender = process.env.BREVO_SENDER_EMAIL;
  const to = process.env.CONTACT_TO ?? site.company.email;

  // Dev fallback: no key configured → log and succeed so the UI can be tested.
  if (!apiKey || !sender) {
    console.info("[contact] Brevo not configured — submission received:", {
      fullName,
      email,
      company,
      country,
      service,
      message,
    });
    return NextResponse.json({ ok: true, delivered: false });
  }

  const rows = [
    emailRow("Full name", escapeHtml(fullName)),
    emailRow(
      "Email",
      `<a href="mailto:${escapeHtml(email)}" style="color:#5b21e6;text-decoration:none;">${escapeHtml(email)}</a>`,
    ),
    company ? emailRow("Company", escapeHtml(company)) : "",
    country ? emailRow("Country", escapeHtml(country)) : "",
    service ? emailRow("Service", escapeHtml(service)) : "",
  ].join("");

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>New enquiry — Orbit Group</title>
      </head>
      <body style="margin:0;padding:0;background-color:#f4f4f6;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f6;padding:32px 16px;">
          <tr>
            <td align="center">
              <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;">
                <tr>
                  <td style="background-color:#050505;padding:32px 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="font-family:Arial,Helvetica,sans-serif;font-size:20px;font-weight:900;letter-spacing:3px;">
                          <span style="color:#ffffff;">ORBIT</span><span style="color:#8b5cf6;"> GROUP</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top:10px;">
                          <table role="presentation" cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="width:20px;height:2px;background-color:#7c3aed;font-size:0;line-height:0;">&nbsp;</td>
                              <td style="padding-left:8px;color:#9a9aa4;font-size:11px;letter-spacing:2px;text-transform:uppercase;font-family:Arial,Helvetica,sans-serif;">New website enquiry</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:36px 40px 8px 40px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      ${rows}
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 40px 36px 40px;">
                    <div style="color:#8b5cf6;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;font-family:Arial,Helvetica,sans-serif;margin-bottom:10px;">Message</div>
                    <div style="background-color:#f4f4f6;border-radius:12px;padding:18px 20px;color:#050505;font-size:14px;line-height:1.6;font-family:Arial,Helvetica,sans-serif;">${escapeHtml(message).replace(/\n/g, "<br/>")}</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px 40px;border-top:1px solid #eeeef1;">
                    <p style="margin:0;color:#9a9aa4;font-size:12px;font-family:Arial,Helvetica,sans-serif;">Reply directly to this email to respond to ${escapeHtml(fullName)}.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
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
        replyTo: { email, name: fullName },
        subject: service
          ? `New enquiry — ${service} — ${fullName}`
          : `New enquiry from ${fullName}`,
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

    const { messageId } = await res.json().catch(() => ({ messageId: undefined }));
    console.info("[contact] delivered via Brevo:", { messageId, to });

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[contact] Network error:", err);
    return NextResponse.json(
      { error: "We could not send your message. Please try again later." },
      { status: 502 },
    );
  }
}
