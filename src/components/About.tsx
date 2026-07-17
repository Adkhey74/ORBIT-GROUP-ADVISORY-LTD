import { site } from "@/content/site";
import { Section } from "./ui/Section";
import { Label } from "./ui/Label";
import { Heading } from "./ui/Heading";
import { Reveal } from "./ui/Reveal";

export function About() {
  const { about } = site;

  return (
    <Section id="about" variant="soft-dark">
      <Reveal>
        <Label>{about.label}</Label>
        <Heading
          lead={about.titleLead}
          emphasis={about.titleEmphasis}
          className="mt-4 text-3xl sm:text-4xl lg:text-5xl"
        />
      </Reveal>

      <div className="mt-8 max-w-3xl space-y-4">
        {about.paragraphs.map((p, i) => (
          <Reveal key={i} delay={i * 60}>
            <p className="text-sm leading-relaxed text-white/65 sm:text-base">{p}</p>
          </Reveal>
        ))}
      </div>

      <ul className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-white/10 lg:grid-cols-4">
        {about.stats.map((s, i) => (
          <Reveal
            as="li"
            key={s.label}
            delay={i * 70}
            className="bg-ink px-5 py-7 sm:px-6 sm:py-8"
          >
            <div className="font-display text-4xl font-extrabold text-accent-bright sm:text-5xl">
              {s.value}
            </div>
            <div className="mt-2 text-[0.7rem] uppercase tracking-[0.15em] text-white/55">
              {s.label}
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
