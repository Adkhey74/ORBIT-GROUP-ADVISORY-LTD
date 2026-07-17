type WordmarkProps = {
  className?: string;
  /** Show the "Executive Security & Mobility" baseline. */
  tagline?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-4xl sm:text-5xl",
};

/**
 * ORBIT GROUP two-tone wordmark (white + violet), set in the geometric
 * Orbitron face to echo the logo. Text-based for crispness and SEO.
 */
export function Wordmark({ className = "", tagline = false, size = "md" }: WordmarkProps) {
  return (
    <span className={`inline-flex flex-col leading-none ${className}`}>
      <span
        className={`font-wordmark font-black tracking-[0.14em] ${sizes[size]}`}
        aria-label="Orbit Group"
      >
        <span className="text-white">ORBIT</span>{" "}
        <span className="text-accent-bright">GROUP</span>
      </span>
      {tagline ? (
        <span className="tracked-caps mt-2 text-[0.6rem] font-medium text-white/60 sm:text-xs">
          Executive Security &amp; Mobility
        </span>
      ) : null}
    </span>
  );
}
