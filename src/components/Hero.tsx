import { site } from "@/content/site";
import { Marquee } from "./ui/Marquee";
import { Label } from "./ui/Label";
import { Reveal } from "./ui/Reveal";
import { HeroBackground } from "./HeroBackground";

export function Hero() {
  const { hero } = site;

  // Split the title into words for the staggered entrance animation.
  const titleWords = [
    ...hero.titleLead.split(" ").map((word) => ({ word, accent: false })),
    ...hero.titleEmphasis.split(" ").map((word) => ({ word, accent: true })),
  ];

  return (
    <section
      id="top"
      className="relative isolate flex min-h-dvh flex-col justify-center overflow-hidden bg-ink px-6 pb-24 pt-28 sm:px-8"
    >
      <HeroBackground src={hero.image} />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="max-w-4xl">
          <Reveal>
            <Label>{hero.eyebrow}</Label>
          </Reveal>

          <h1 className="mt-6 max-w-4xl font-display text-4xl font-black uppercase leading-[0.9] tracking-tight [text-shadow:0_2px_20px_rgba(0,0,0,0.5)] sm:text-5xl lg:text-6xl xl:text-[68px]">
            {titleWords.map((item, i) => (
              <span key={i}>
                <span
                  className={`hero-word ${item.accent ? "text-accent-bright" : ""}`}
                  style={{ animationDelay: `${0.15 + i * 0.07}s` }}
                >
                  {item.word}
                </span>
                {i < titleWords.length - 1 ? " " : null}
              </span>
            ))}
          </h1>

          <Reveal delay={160}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              {hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-accent px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-bright"
              >
                {hero.ctaPrimary}
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center border border-white/25 bg-white/5 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:border-white/50 hover:bg-white/10 md:backdrop-blur-sm"
              >
                {hero.ctaSecondary}
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to content"
        className="absolute bottom-20 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/65 transition-colors hover:text-white sm:flex"
      >
        <span className="text-[9px] font-semibold uppercase tracking-[0.3em]">Scroll</span>
        <span className="relative h-10 w-px overflow-hidden bg-white/20">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-[scrollcue_2s_ease-in-out_infinite] bg-accent-bright" />
        </span>
      </a>

      {/* Ticker */}
      {/* backdrop-blur only on md+ — it's an expensive paint op on mobile Safari */}
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/10 bg-ink/70 py-3.5 md:bg-ink/40 md:backdrop-blur-sm">
        <Marquee
          items={hero.ticker.map((t) => t)}
          duration={24}
          itemClassName="px-7 text-[10px] uppercase tracking-[0.2em] text-white/55"
        />
      </div>
    </section>
  );
}
