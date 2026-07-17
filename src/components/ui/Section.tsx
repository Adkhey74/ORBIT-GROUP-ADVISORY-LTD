import type { ReactNode } from "react";

type Variant = "dark" | "light" | "soft-dark";

type SectionProps = {
  id?: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
  /** Remove default vertical padding when a section manages its own. */
  flush?: boolean;
};

const variantClasses: Record<Variant, string> = {
  dark: "bg-ink text-white",
  "soft-dark": "bg-ink-soft text-white",
  light: "bg-paper text-ink",
};

/**
 * Standard full-width section wrapper providing the alternating
 * dark / light rhythm from the brand deck plus a centered container.
 */
export function Section({
  id,
  variant = "dark",
  className = "",
  children,
  flush = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative w-full scroll-mt-20 ${variantClasses[variant]} ${
        flush ? "" : "py-20 sm:py-24 lg:py-28"
      } ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">{children}</div>
    </section>
  );
}
