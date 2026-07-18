import { site } from "@/content/site";
import { Section } from "./ui/Section";
import { Label } from "./ui/Label";
import { Heading } from "./ui/Heading";
import { Reveal } from "./ui/Reveal";
import { AssetImage } from "./ui/AssetImage";

export function Founder() {
  const { founder } = site;

  return (
    <Section variant="soft-dark">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
        {/* Portrait — image first on mobile, left on desktop */}
        <Reveal className="order-1">
          <figure className="overflow-hidden rounded-2xl border border-white/10 bg-ink">
            <AssetImage
              src={founder.profile.image}
              alt={`${founder.profile.name} — ${founder.profile.role}, Orbit Group`}
              label="Founder portrait"
              tone="dark"
              ratio="aspect-[4/5]"
              className="rounded-none ring-0"
              imgClassName="object-top"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <figcaption className="p-6 sm:p-8">
              <p className="font-display text-2xl font-extrabold uppercase tracking-tight text-white">
                {founder.profile.name}
              </p>
              <p className="mt-1 text-sm font-semibold text-accent-label">
                {founder.profile.role}
              </p>
            </figcaption>
          </figure>
        </Reveal>

        {/* Text */}
        <div className="order-2">
          <Reveal>
            <Label>{founder.label}</Label>
            <Heading
              lead={founder.titleLead}
              emphasis={founder.titleEmphasis}
              className="mt-4 text-3xl sm:text-4xl lg:text-5xl"
            />
            <p className="mt-6 text-sm leading-relaxed text-white/65 sm:text-base">
              {founder.profile.bio}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <ul className="mt-8 flex flex-wrap gap-2">
              {founder.credentials.map((c) => (
                <li
                  key={c}
                  className="border border-white/15 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.1em] text-white/70"
                >
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
