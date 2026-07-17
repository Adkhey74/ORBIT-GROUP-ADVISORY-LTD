import { GlobeMotif } from "./GlobeMotif";

type PlaceholderProps = {
  label: string;
  className?: string;
  /** Aspect ratio utility, e.g. "aspect-[4/3]" or "aspect-square". */
  ratio?: string;
  tone?: "dark" | "light";
};

/**
 * Elegant image placeholder: metallic gradient + wireframe globe + caption.
 * Stands in for HD photography until final assets are supplied.
 */
export function Placeholder({
  label,
  className = "",
  ratio = "aspect-[4/3]",
  tone = "dark",
}: PlaceholderProps) {
  const bg =
    tone === "dark"
      ? "bg-[radial-gradient(120%_120%_at_30%_10%,#1a1a22_0%,#050505_70%)]"
      : "bg-[radial-gradient(120%_120%_at_30%_10%,#e9e9ee_0%,#c9c9d2_70%)]";
  const globeColor = tone === "dark" ? "text-white/10" : "text-ink/10";
  const labelColor = tone === "dark" ? "text-white/45" : "text-ink/45";

  return (
    <div
      className={`relative isolate overflow-hidden rounded-xl ring-1 ring-inset ${
        tone === "dark" ? "ring-white/10" : "ring-ink/10"
      } ${bg} ${ratio} ${className}`}
    >
      <GlobeMotif
        className={`absolute -right-10 -top-10 h-56 w-56 sm:h-72 sm:w-72 ${globeColor}`}
      />
      <div className="absolute inset-0 flex items-end p-5">
        <span
          className={`tracked-caps text-[0.65rem] font-medium sm:text-xs ${labelColor}`}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
