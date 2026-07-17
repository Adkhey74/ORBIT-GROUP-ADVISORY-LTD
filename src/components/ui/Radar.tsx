type RadarProps = {
  className?: string;
};

/**
 * Decorative radar sweep — concentric rings, rotating conic sweep and
 * fading blips. Violet on near-black. Purely ornamental.
 */
export function Radar({ className = "" }: RadarProps) {
  const blips = [
    { top: "28%", left: "62%", delay: "0.8s" },
    { top: "55%", left: "72%", delay: "1.6s" },
    { top: "70%", left: "52%", delay: "2.2s" },
    { top: "38%", left: "78%", delay: "3.1s" },
    { top: "48%", left: "58%", delay: "0.3s" },
  ];

  return (
    <div data-radar className={`pointer-events-none ${className}`} aria-hidden>
      {/* Rings */}
      {[0, 14, 28, 42].map((inset, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-accent-soft/15"
          style={{ inset: `${inset}%` }}
        />
      ))}

      {/* Crosshair */}
      <div className="absolute inset-0">
        <div className="absolute left-0 right-0 top-1/2 h-px bg-accent-soft/10" />
        <div className="absolute bottom-0 top-0 left-1/2 w-px bg-accent-soft/10" />
      </div>

      {/* Sweep */}
      <div className="absolute inset-0 overflow-hidden rounded-full">
        <div
          className="absolute left-1/2 top-1/2 h-1/2 w-1/2 origin-bottom-left rounded-tr-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(124,58,237,0) 60deg, rgba(124,58,237,0.28) 90deg)",
            animation: "orbit-sweep 4s linear infinite",
          }}
        />
      </div>

      {/* Blips */}
      {blips.map((b, i) => (
        <span
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-accent-bright"
          style={{
            top: b.top,
            left: b.left,
            boxShadow: "0 0 8px var(--color-accent-bright)",
            animation: `orbit-blip 4s ease-out infinite`,
            animationDelay: b.delay,
          }}
        />
      ))}
    </div>
  );
}
