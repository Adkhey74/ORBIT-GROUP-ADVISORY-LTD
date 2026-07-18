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

/* A single landscape photo card with a lift shadow (used inside the collage). */
function Photo({
  src,
  title,
  className,
  ratio = "aspect-[4/3]",
}: {
  src: string;
  title: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div className={`shadow-2xl shadow-black/60 ${className ?? ""}`}>
      <AssetImage
        src={src}
        alt={`${title} — Orbit Group`}
        label={title}
        ratio={ratio}
        sizes="(max-width: 1024px) 55vw, 32vw"
      />
    </div>
  );
}

/**
 * Staggered, overlapping photo collage. Frames are landscape (aspect-[4/3])
 * so the (landscape) source photos are shown with minimal cropping, while the
 * offset overlap keeps the block compact and editorial.
 */
function Collage({ images, title }: { images: string[]; title: string }) {
  // Three photos: one wide on top + two side by side below (clean, minimal crop).
  if (images.length >= 3) {
    return (
      <div className="grid gap-3">
        <Photo src={images[0]} title={title} ratio="aspect-[16/10]" className="w-full" />
        <div className="grid grid-cols-2 gap-3">
          <Photo src={images[1]} title={title} />
          <Photo src={images[2]} title={title} />
        </div>
      </div>
    );
  }

  // Two photos: top-left + overlapping bottom-right.
  if (images.length === 2) {
    return (
      <div className="relative aspect-[5/4] w-full">
        <Photo src={images[0]} title={title} className="absolute left-0 top-0 w-[64%]" />
        <Photo src={images[1]} title={title} className="absolute bottom-0 right-0 w-[60%]" />
      </div>
    );
  }

  return <Photo src={images[0]} title={title} className="w-full" />;
}

function ServiceRow({ service, index }: { service: Service; index: number }) {
  const Icon = icons[service.id];
  const imageRight = index % 2 === 0;

  const text = (
    <div>
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold tracking-[0.2em] text-accent-label">
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
          <p className="mt-6 border-t border-white/10 pt-4 text-xs uppercase tracking-[0.12em] text-white/55">
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
