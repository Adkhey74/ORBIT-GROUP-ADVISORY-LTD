"use client";

import { useEffect, useState } from "react";
import {
  ChevronDown,
  ArrowRight,
  Shield,
  Car,
  Home,
  Anchor,
  type LucideIcon,
} from "lucide-react";
import { site } from "@/content/site";
import { Wordmark } from "./ui/Wordmark";

const serviceIcons: Record<string, LucideIcon> = {
  "executive-protection": Shield,
  "executive-chauffeur": Car,
  "residential-security": Home,
  "superyacht-security": Anchor,
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    // NOTE: keep the root free of filter/transform/backdrop-filter — those create
    // a containing block that would trap the fixed mobile overlay inside the bar.
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Soft scrim behind the bar over the hero — taller than the bar and
          fading smoothly to transparent (no hard edge). Fades out on scroll. */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-ink/85 via-ink/35 to-transparent transition-opacity duration-300 ${
          scrolled || open ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Top bar — kept above the overlay so the logo + close stay visible */}
      <div
        className={`relative z-50 transition-colors duration-300 ${
          scrolled || open
            ? "border-b border-white/10 bg-ink/95 md:backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[62px] w-full max-w-6xl items-center justify-between px-6 sm:px-8">
          <a href="#top" className="shrink-0" aria-label="Orbit Group — home">
            <Wordmark size="sm" />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {site.nav.map((item) => {
              const linkClass =
                "text-[11px] font-medium uppercase tracking-[0.18em] text-white/60 transition-colors hover:text-white";

              // Services → premium mega-menu built from the service data.
              if (item.label === "Services") {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <a
                      href={item.href}
                      onClick={() => setServicesOpen(false)}
                      className={`${linkClass} inline-flex items-center gap-1.5`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-3 w-3 transition-transform duration-300 ${
                          servicesOpen ? "rotate-180 text-accent-label" : "text-white/40"
                        }`}
                        strokeWidth={2.5}
                        aria-hidden
                      />
                    </a>
                    {/* Bridge + mega-menu */}
                    <div
                      className={`absolute left-1/2 top-full z-50 flex -translate-x-1/2 justify-center pt-4 transition-all duration-300 ${
                        servicesOpen ? "visible opacity-100" : "invisible opacity-0"
                      }`}
                    >
                      <div
                        className={`w-[24rem] rounded-2xl border border-white/10 bg-ink-soft/95 p-2.5 shadow-2xl shadow-black/60 ring-1 ring-white/5 backdrop-blur-md transition-transform duration-300 ${
                          servicesOpen ? "translate-y-0" : "translate-y-2"
                        }`}
                      >
                        <span className="block px-3 pb-2 pt-1 text-[9px] font-semibold uppercase tracking-[0.28em] text-white/35">
                          Four disciplines. One standard.
                        </span>
                        {site.services.items.map((s) => {
                          const Icon = serviceIcons[s.id];
                          return (
                            <a
                              key={s.id}
                              href={`#${s.id}`}
                              onClick={() => setServicesOpen(false)}
                              className="group/item flex items-start gap-3.5 rounded-xl p-3 transition-colors hover:bg-white/[0.05]"
                            >
                              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-accent-label transition-all duration-200 group-hover/item:border-accent-bright/50 group-hover/item:bg-accent/15 group-hover/item:text-white">
                                {Icon ? <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden /> : null}
                              </span>
                              <span className="min-w-0 flex-1">
                                <span className="flex items-center gap-1.5 text-[13px] font-semibold text-white/85 transition-colors group-hover/item:text-white">
                                  {s.title}
                                  <ArrowRight
                                    className="h-3.5 w-3.5 -translate-x-1 text-accent-bright opacity-0 transition-all duration-200 group-hover/item:translate-x-0 group-hover/item:opacity-100"
                                    strokeWidth={2}
                                    aria-hidden
                                  />
                                </span>
                                <span className="mt-0.5 block text-[11px] leading-snug text-white/45">
                                  {s.tagline}
                                </span>
                              </span>
                            </a>
                          );
                        })}
                        <a
                          href="#contact"
                          onClick={() => setServicesOpen(false)}
                          className="mt-1.5 flex items-center justify-center gap-2 rounded-xl bg-white/[0.03] py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-label transition-colors hover:bg-accent hover:text-white"
                        >
                          Discuss your requirements
                          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <a key={item.href} href={item.href} className={linkClass}>
                  {item.label}
                </a>
              );
            })}
            <a
              href="#contact"
              className="border border-accent-bright/70 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-accent-label transition-colors hover:bg-accent-bright hover:text-white"
            >
              Confidential Enquiry
            </a>
          </nav>

          <button
            type="button"
            className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <div className="flex w-6 flex-col items-end gap-1.5">
              <span
                className={`h-0.5 w-6 bg-white transition-transform duration-300 ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-white transition-opacity duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-white transition-transform duration-300 ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile overlay — sibling of the bar, fixed to the viewport */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-ink px-6 pb-10 pt-24 transition-opacity duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col border-t border-white/10">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-white/10 py-5 font-display text-2xl font-bold uppercase tracking-tight text-white transition-colors hover:text-accent-bright"
            >
              {item.label}
              <span aria-hidden className="text-accent-bright">
                →
              </span>
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-auto bg-accent px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.15em] text-white"
        >
          Confidential Enquiry
        </a>
        <div className="mt-6 space-y-1 text-center text-xs text-white/70">
          <a href={`mailto:${site.company.email}`} className="block hover:text-white">
            {site.company.email}
          </a>
          <a
            href={`tel:${site.company.phone.replace(/\s+/g, "")}`}
            className="block hover:text-white"
          >
            {site.company.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
