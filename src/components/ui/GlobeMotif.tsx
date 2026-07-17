type GlobeMotifProps = {
  className?: string;
};

/**
 * Decorative wireframe globe — thin meridians + parallels — used as a subtle
 * background motif, echoing the line-art globe in the brand deck.
 * Purely ornamental: hidden from assistive tech.
 */
export function GlobeMotif({ className = "" }: GlobeMotifProps) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="200" cy="200" r="160" strokeWidth="1" />
      {/* Parallels */}
      <ellipse cx="200" cy="200" rx="160" ry="52" strokeWidth="0.8" />
      <ellipse cx="200" cy="200" rx="160" ry="108" strokeWidth="0.8" />
      <line x1="40" y1="200" x2="360" y2="200" strokeWidth="0.8" />
      <path d="M64 118 A 300 300 0 0 0 336 118" strokeWidth="0.6" />
      <path d="M64 282 A 300 300 0 0 1 336 282" strokeWidth="0.6" />
      {/* Meridians */}
      <ellipse cx="200" cy="200" rx="52" ry="160" strokeWidth="0.8" />
      <ellipse cx="200" cy="200" rx="108" ry="160" strokeWidth="0.8" />
      <line x1="200" y1="40" x2="200" y2="360" strokeWidth="0.8" />
    </svg>
  );
}
