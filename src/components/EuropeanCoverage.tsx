import { site } from "@/content/site";
import { Section } from "./ui/Section";
import { Label } from "./ui/Label";
import { Heading } from "./ui/Heading";
import { Reveal } from "./ui/Reveal";
import { Marquee } from "./ui/Marquee";
import { EuropeMapClient } from "./EuropeMapClient";

export function EuropeanCoverage() {
  const { coverage } = site;

  return (
    <Section id="coverage" variant="soft-dark" className="overflow-hidden">
      <Reveal>
        <Label>{coverage.label}</Label>
        <Heading
          lead={coverage.titleLead}
          emphasis={coverage.titleEmphasis}
          className="mt-4 text-3xl sm:text-4xl lg:text-5xl"
        />
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
          {coverage.intro}
        </p>
      </Reveal>

      <Reveal delay={100} className="mt-10">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d]">
          <div className="relative">
            {/* Violet glow behind the map */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-3xl" />
            <div className="relative px-2 py-4 sm:px-6 sm:py-6">
              <EuropeMapClient />
            </div>
          </div>

          {/* Location marquee */}
          <div className="border-t border-white/10 py-4">
            <Marquee
              items={coverage.locations.map((l) => l)}
              duration={22}
              separator="⬡"
              itemClassName="px-7 text-[11px] uppercase tracking-[0.22em] text-white/55"
            />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
