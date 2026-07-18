"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2 } from "lucide-react";
import { site } from "@/content/site";
import { contactSchema, type ContactInput } from "@/lib/contactSchema";

type Status = "idle" | "success" | "error";

const fieldClass =
  "w-full border border-white/15 bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder:text-white/50 outline-none transition-colors focus:border-accent-bright";
const labelClass =
  "mb-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-white/70";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { enquiryType: site.contact.enquiryTypes[0] },
  });

  async function onSubmit(values: ContactInput) {
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setServerError(json.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      reset();
      setStatus("success");
    } catch {
      setServerError("Network error. Please try again later.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex h-full flex-col items-start justify-center border border-accent/30 bg-accent/10 p-8">
        <CheckCircle2 className="h-8 w-8 text-accent-bright" strokeWidth={1.5} />
        <p className="mt-4 font-display text-xl font-extrabold uppercase tracking-tight text-white">
          Enquiry received.
        </p>
        <p className="mt-3 text-sm text-white/70">
          Your enquiry has been received, in strict confidence. A member of the team
          will respond within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-xs font-semibold uppercase tracking-[0.15em] text-accent-label hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5" noValidate>
      {/* Honeypot */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label>
          Website
          <input type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
        </label>
      </div>

      <div className="grid gap-3.5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name *
          </label>
          <input id="name" type="text" autoComplete="name" className={fieldClass} {...register("name")} />
          {errors.name ? <p className="mt-1 text-xs text-red-400">{errors.name.message}</p> : null}
        </div>
        <div>
          <label htmlFor="organisation" className={labelClass}>
            Organisation
          </label>
          <input id="organisation" type="text" autoComplete="organization" className={fieldClass} {...register("organisation")} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email *
        </label>
        <input id="email" type="email" autoComplete="email" className={fieldClass} {...register("email")} />
        {errors.email ? <p className="mt-1 text-xs text-red-400">{errors.email.message}</p> : null}
      </div>

      <div>
        <label htmlFor="enquiryType" className={labelClass}>
          Nature of Enquiry
        </label>
        <select id="enquiryType" className={fieldClass} {...register("enquiryType")}>
          {site.contact.enquiryTypes.map((t) => (
            <option key={t} value={t} className="bg-ink text-white">
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message *
        </label>
        <textarea id="message" rows={5} className={`${fieldClass} resize-y`} {...register("message")} />
        {errors.message ? <p className="mt-1 text-xs text-red-400">{errors.message.message}</p> : null}
      </div>

      {status === "error" ? (
        <p role="alert" className="text-sm text-red-400">
          {serverError}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-accent-bright disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Send className="h-4 w-4" strokeWidth={1.75} />
        {isSubmitting ? "Sending…" : "Submit Enquiry"}
      </button>

      <p className="text-[11px] italic text-white/55">
        {site.company.legalName} · Registered in {site.company.registeredIn} · Co. No.{" "}
        {site.company.registrationNumber}
      </p>
    </form>
  );
}
