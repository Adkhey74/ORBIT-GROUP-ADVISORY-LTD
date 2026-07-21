import { Phone, Mail, Globe, MapPin, FileDown, ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { Section } from "./ui/Section";
import { Label } from "./ui/Label";
import { Heading } from "./ui/Heading";
import { Reveal } from "./ui/Reveal";
import { ContactForm } from "./ContactForm";

export function Contact() {
  const { contact, company } = site;
  const telHref = `tel:${company.phone.replace(/\s+/g, "")}`;

  return (
    <Section id="contact" variant="dark">
      <Reveal>
        <Label>{contact.label}</Label>
        <Heading
          lead={contact.titleLead}
          emphasis={contact.titleEmphasis}
          className="mt-4 text-3xl sm:text-4xl lg:text-5xl"
        />
      </Reveal>

      <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: direct contact */}
        <Reveal>
          <p className="max-w-md text-sm leading-relaxed text-white/65 sm:text-base">
            {contact.intro}
          </p>

          {/* Direct line — premium call card */}
          <div className="mt-8 border-t border-white/10 pt-8">
            <a
              href={telHref}
              className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-colors hover:border-accent-bright/50 hover:bg-white/[0.04] sm:p-5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent-bright/40 bg-accent/10 text-accent-label transition-colors group-hover:bg-accent group-hover:text-white">
                <Phone className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                  Direct line
                </span>
                <span className="mt-1 block font-display text-xl font-bold tracking-wide text-white sm:text-2xl">
                  {company.phone}
                </span>
              </span>
              <ArrowUpRight
                className="ml-auto h-5 w-5 shrink-0 text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-bright"
                strokeWidth={1.75}
                aria-hidden
              />
            </a>
            <span className="mt-3 flex items-center gap-2.5 text-xs text-white/55">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-bright" />
              </span>
              {contact.responseTime}
            </span>
          </div>

          {/* Capability brief download */}
          <a
            href={contact.capabilityBrief.href}
            download
            className="mt-8 inline-flex items-center gap-2.5 border border-white/20 px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:border-accent-bright hover:text-accent-label"
          >
            <FileDown className="h-4 w-4" strokeWidth={1.75} aria-hidden />
            {contact.capabilityBrief.label}
          </a>

          {/* Secondary details */}
          <dl className="mt-10 space-y-5 border-t border-white/10 pt-8">
            <div className="flex items-start gap-4">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent-label" strokeWidth={1.5} aria-hidden />
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">Email</dt>
                <dd className="mt-1 text-sm text-white/85">
                  <a href={`mailto:${company.email}`} className="transition-colors hover:text-accent-bright">
                    {company.email}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Globe className="mt-0.5 h-5 w-5 shrink-0 text-accent-label" strokeWidth={1.5} aria-hidden />
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">Website</dt>
                <dd className="mt-1 text-sm text-white/85">{company.website}</dd>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-label" strokeWidth={1.5} aria-hidden />
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">Offices</dt>
                <dd className="mt-1 text-sm text-white/85">{site.footer.offices.join(" · ")}</dd>
              </div>
            </div>
          </dl>
        </Reveal>

        {/* Right: form */}
        <Reveal delay={100}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
