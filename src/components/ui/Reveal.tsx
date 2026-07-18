"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Delay in ms before the reveal transition starts (for staggering). */
  delay?: number;
  className?: string;
  as?: "div" | "li" | "article" | "section";
};

type State = "idle" | "hidden" | "shown";

/**
 * Progressive scroll-reveal.
 *
 * Critically: content is VISIBLE by default (SSR / no-JS / slow-JS) — it is
 * never hidden waiting for hydration. Only once JS runs do below-the-fold
 * elements get hidden and then faded/lifted in as they scroll into view.
 * Elements already in view (e.g. the hero) stay put, no flash.
 * No animation library — plain CSS transition + IntersectionObserver.
 */
export function Reveal({ children, delay = 0, className = "", as = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [state, setState] = useState<State>("idle");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setState("shown");
      return;
    }

    const rect = node.getBoundingClientRect();
    const alreadyInView = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
    if (alreadyInView) {
      // Keep it visible with no animation — avoids a flash on above-the-fold content.
      setState("shown");
      return;
    }

    setState("hidden");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setState("shown");
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as;
  const hidden = state === "hidden";
  const animate = state !== "idle";

  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{
        opacity: hidden ? 0 : 1,
        transform: hidden ? "translateY(24px)" : "none",
        transition: animate
          ? `opacity 700ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 700ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`
          : undefined,
        willChange: hidden ? "opacity, transform" : undefined,
      }}
    >
      {children}
    </Tag>
  );
}
