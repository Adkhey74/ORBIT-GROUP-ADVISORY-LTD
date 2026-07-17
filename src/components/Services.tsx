import { Shield, Car, Home, Anchor, type LucideIcon } from "lucide-react";
import { site, type Service } from "@/content/site";
import { Section } from "./ui/Section";
import { Label } from "./ui/Label";
import { Heading } from "./ui/Heading";
import { Reveal } from "./ui/Reveal";
import { AssetImage } from "./ui/AssetImage";

const icons: Record<string, LucideIcon> = {
  "executive-protection": Shield,
  "executive-chauffeur": Car,
  "residential-security": Home,
  "superyacht-security": Anchor,
};

function Collage({ images, title }: { images: string[]; title: string }) {
  const alt = `${title} — Orbit Group`;
  const fill = { alt, label: title, ratio: "", className: "h-full w-full" } as const;

  // Three images: one tall left + two stacked right, inside a bounded 4/3 box.
  if (images.length >= 3) {
    return (
      <div className="grid aspect-[4/3] grid-cols-2 grid-rows-2 gap-3">
        <div className="relative row-span-2">
          <AssetImage src={images[0]} {...fill} sizes="(max-width:1024px) 60vw, 30vw" />
        </div>
        <AssetImage src={images[1]} {...fill} sizes="(max-width:1024px) 30vw, 15vw" />
        <AssetImage src={images[2]} {...fill} sizes="(max-width:1024px) 30vw, 15vw" />
      </div>
    );
  }

  // Two images: side by side (portraits) forming a compact landscape block.
  if (images.length === 2) {
    return (
      <div className="grid grid-cols-2 gap-3">
        <AssetImage src={images[0]} alt={alt} label={title} ratio="aspect-[3/4]" sizes="(max-width:1024px) 50vw, 25vw" />
        <AssetImage src={images[1]} alt={alt} label={title} ratio="aspect-[3/4]" sizes="(max-width:1024px) 50vw, 25vw" />
      </div>
    );
  }

  return <AssetImage src={images[0]} alt={alt} label={title} ratio="aspect-[4/3]" sizes="(max-width:1024px) 100vw, 50vw" />;
}

function ServiceRow({ service, index }: { service: Service; index: number }) {
  const Icon = icons[service.id];
  const imageRight = index % 2 === 0;

  const text = (
    <div>
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold tracking-[0.2em] text-accent-bright">
            {service.num}
          </span>
          {Icon ? <Icon className="h-6 w-6 text-white/30" strokeWidth={1.5} aria-hidden /> : null}
        </div>
        <h3 className="mt-4 font-display text-2xl font-extrabold uppercase tracking-tight text-white sm:text-3xl lg:text-4xl">
          {service.title}
        </h3>
        <p className="mt-3 text-base font-medium text-accent-soft">{service.tagline}</p>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/60">{service.intro}</p>
      </Reveal>

      <Reveal delay={80}>
        <ul className="mt-6 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
          {service.capabilities.map((c) => (
            <li key={c} className="flex items-start gap-3 text-sm text-white/75">
              <span aria-hidden className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-bright" />
              {c}
            </li>
          ))}
        </ul>
      </Reveal>

      {service.note ? (
        <Reveal delay={120}>
          <p className="mt-6 border-t border-white/10 pt-4 text-xs uppercase tracking-[0.12em] text-white/40">
            {service.note}
          </p>
        </Reveal>
      ) : null}
    </div>
  );

  const media = (
    <Reveal delay={100}>
      <Collage images={service.images} title={service.title} />
    </Reveal>
  );

  return (
    <div className="grid items-center gap-10 border-t border-white/10 py-12 first:border-t-0 lg:grid-cols-2 lg:gap-16 lg:py-16">
      {imageRight ? (
        <>
          {text}
          <div className="lg:order-last">{media}</div>
        </>
      ) : (
        <>
          <div className="order-2 lg:order-first">{media}</div>
          <div className="order-1">{text}</div>
        </>
      )}
    </div>
  );
}

export function Services() {
  const { services } = site;

  return (
    <Section id="services" variant="dark">
      <Reveal>
        <Label>{services.label}</Label>
        <Heading
          lead={services.titleLead}
          emphasis={services.titleEmphasis}
          className="mt-4 text-3xl sm:text-4xl lg:text-5xl"
        />
      </Reveal>

      <div className="mt-8">
        {services.items.map((service, index) => (
          <ServiceRow key={service.id} service={service} index={index} />
        ))}
      </div>
    </Section>
  );
}
