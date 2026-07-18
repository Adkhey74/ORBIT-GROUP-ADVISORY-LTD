import { ShieldCheck } from "lucide-react";
import { site } from "@/content/site";
import { Section } from "./ui/Section";
import { Label } from "./ui/Label";
import { Heading } from "./ui/Heading";
import { Reveal } from "./ui/Reveal";
import { AssetImage } from "./ui/AssetImage";

export function JoinNetwork() {
  const { network } = site;

  return (
    <Section id="network" variant="dark">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image — first on mobile, left on desktop */}
        <Reveal className="order-1">
          <AssetImage
            src={network.image}
            alt="Join the Orbit Group network of operators"
            label="Join the network"
            tone="dark"
            ratio="aspect-[4/5]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </Reveal>

        {/* Text */}
        <div className="order-2">
          <Reveal>
            <Label>{network.label}</Label>
            <Heading
              lead={network.titleLead}
              emphasis={network.titleEmphasis}
              className="mt-4 text-3xl sm:text-4xl lg:text-5xl"
            />
            <p className="mt-6 text-sm leading-relaxed text-white/65 sm:text-base">
              {network.intro}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
                Profiles we look for
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {network.profiles.map((p) => (
                  <li
                    key={p}
                    className="border border-white/15 px-3 py-1.5 text-xs font-medium text-white/75"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ul className="mt-8 space-y-2.5">
              {network.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-white/70">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent-bright" strokeWidth={1.75} aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-9">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-accent px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-accent-bright"
              >
                {network.cta}
              </a>
              <p className="mt-4 text-xs italic text-white/55">{network.note}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
