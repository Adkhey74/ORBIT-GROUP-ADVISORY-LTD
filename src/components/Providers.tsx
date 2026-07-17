"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { MotionConfig } from "motion/react";

/**
 * App-level providers:
 *  - Lenis inertial smooth scrolling (disabled for prefers-reduced-motion)
 *  - In-page anchor links routed through Lenis with a sticky-header offset
 *  - MotionConfig so motion animations honour the user's reduced-motion setting
 */
export function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    // Sticky header height — sections should land just beneath it.
    const HEADER_OFFSET = 62;

    const onAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector<HTMLElement>(id);
      if (!el) return;
      event.preventDefault();
      // Deterministic absolute target: element top in the document, minus header.
      const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      lenis.scrollTo(Math.max(0, y), { duration: 1.1 });
    };

    document.addEventListener("click", onAnchorClick);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("click", onAnchorClick);
      lenis.destroy();
    };
  }, []);

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
