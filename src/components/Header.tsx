"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { Wordmark } from "./ui/Wordmark";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
      {/* Top bar — kept above the overlay so the logo + close stay visible */}
      <div
        className={`relative z-50 transition-colors duration-300 ${
          scrolled || open
            ? "border-b border-white/10 bg-ink/95 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[62px] w-full max-w-6xl items-center justify-between px-6 sm:px-8">
          <a href="#top" className="shrink-0" aria-label="Orbit Group — home">
            <Wordmark size="sm" />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/60 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
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
