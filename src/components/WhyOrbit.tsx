import { site } from "@/content/site";
import { Section } from "./ui/Section";
import { Label } from "./ui/Label";
import { Heading } from "./ui/Heading";
import { Reveal } from "./ui/Reveal";

export function WhyOrbit() {
  const { whyOrbit } = site;

  return (
    <Section variant="dark">
      <Reveal>
        <Label>{whyOrbit.label}</Label>
        <Heading
          lead={whyOrbit.titleLead}
          emphasis={whyOrbit.titleEmphasis}
          className="mt-4 text-3xl sm:text-4xl lg:text-5xl"
        />
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-white/65 sm:text-base">
          {whyOrbit.intro}
        </p>
      </Reveal>

      <div className="mt-12 grid gap-px overflow-hidden rounded-xl bg-white/10 md:grid-cols-2">
        {whyOrbit.cards.map((card, i) => (
          <Reveal
            as="article"
            key={card.num}
            delay={(i % 2) * 80}
            className="bg-ink-soft p-7 transition-colors hover:bg-[#17171d] sm:p-9"
          >
            <div className="text-xs font-semibold tracking-[0.2em] text-accent-label">
              {card.num} —
            </div>
            <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-tight text-white sm:text-2xl">
              {card.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/60">{card.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
