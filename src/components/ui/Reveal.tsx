"use client";

import { type ReactNode } from "react";
import { motion, type Variants } from "motion/react";

type RevealProps = {
  children: ReactNode;
  /** Delay in seconds-equivalent ms before the transition starts (for staggering). */
  delay?: number;
  className?: string;
  as?: "div" | "li" | "article" | "section";
};

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/**
 * Subtle scroll-reveal wrapper powered by motion. Fades + lifts content into
 * view once. Honours prefers-reduced-motion automatically via MotionConfig at
 * the app root; also degrades to visible for no-JS via the SSR fallback.
 */
export function Reveal({ children, delay = 0, className = "", as = "div" }: RevealProps) {
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -8% 0px" }}
      variants={variants}
      transition={{ duration: 0.7, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
