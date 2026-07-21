import { site } from "@/content/site";
import { Section } from "./ui/Section";
import { Label } from "./ui/Label";
import { Heading } from "./ui/Heading";
import { Reveal } from "./ui/Reveal";
import { AssetImage } from "./ui/AssetImage";

export function SelectedExperience() {
  const { experience } = site;

  return (
    <Section variant="soft-dark">
      <Reveal>
        <Label>{experience.label}</Label>
        <Heading
          lead={experience.titleLead}
          emphasis={experience.titleEmphasis}
          className="mt-4 text-3xl sm:text-4xl lg:text-5xl"
        />
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-white/65 sm:text-base">
          {experience.intro}
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {experience.blocks.map((block, i) => (
          <Reveal
            as="article"
            key={block.title}
            delay={(i % 4) * 80}
            className="group overflow-hidden rounded-xl border border-white/10"
          >
            <div className="relative">
              <AssetImage
                src={block.image}
                alt={`${block.title} — Orbit Group`}
                label={block.title}
                tone="dark"
                ratio="aspect-[4/5]"
                className="rounded-none ring-0"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              {/* Dark gradient + title overlay */}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink via-ink/20 to-transparent" />
              <h3 className="absolute inset-x-0 bottom-0 p-5 font-display text-lg font-bold uppercase leading-tight tracking-tight text-white">
                {block.title}
              </h3>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
