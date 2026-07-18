"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * Floating "back to top" control. Appears once the user has scrolled past the
 * first viewport. It's an anchor to #top so it reuses the existing smooth-scroll
 * handling (Lenis on desktop, native on mobile).
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#top"
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-ink/90 text-accent-label shadow-lg shadow-black/40 transition-all duration-300 hover:border-accent-bright hover:text-white ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp className="h-5 w-5" strokeWidth={2} aria-hidden />
    </a>
  );
}
