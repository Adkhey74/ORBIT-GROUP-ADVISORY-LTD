import { Mail, Phone, Globe, Building2, MapPin, type LucideIcon } from "lucide-react";
import { site } from "@/content/site";
import { Section } from "./ui/Section";
import { Label } from "./ui/Label";
import { Heading } from "./ui/Heading";
import { Reveal } from "./ui/Reveal";
import { ContactForm } from "./ContactForm";

export function Contact() {
  const { contact, company } = site;
  const telHref = `tel:${company.phone.replace(/\s+/g, "")}`;

  const info: { label: string; value: string; href?: string; icon: LucideIcon }[] = [
    { label: "Email", value: company.email, href: `mailto:${company.email}`, icon: Mail },
    { label: "Telephone", value: company.phone, href: telHref, icon: Phone },
    { label: "Website", value: company.website, icon: Globe },
    { label: "Principal Office", value: company.principalOffice, icon: Building2 },
    { label: "Offices", value: site.footer.offices.join(" · "), icon: MapPin },
  ];

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
        <Reveal>
          <p className="max-w-md text-sm leading-relaxed text-white/65 sm:text-base">
            {contact.intro}
          </p>
          <dl className="mt-8 space-y-5">
            {info.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-start gap-4">
                  <Icon
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent-bright"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-sm text-white/85">
                      {item.href ? (
                        <a href={item.href} className="transition-colors hover:text-accent-bright">
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </Reveal>

        <Reveal delay={100}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
