"use client";

import { useState } from "react";
import Image from "next/image";
import { GlobeMotif } from "./GlobeMotif";

type AssetImageProps = {
  src: string;
  alt: string;
  /** Caption shown on the fallback placeholder while the file is missing. */
  label?: string;
  tone?: "dark" | "light";
  /** Aspect ratio utility, e.g. "aspect-[4/3]". */
  ratio?: string;
  className?: string;
  /** Extra classes on the <img> itself, e.g. "object-top". */
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Image with a graceful fallback: renders the real photo from /public when
 * present, otherwise an elegant placeholder (so the site looks complete
 * before the client's assets are dropped in). Swap happens automatically
 * once the correctly-named file exists.
 */
export function AssetImage({
  src,
  alt,
  label,
  tone = "dark",
  ratio = "aspect-[4/3]",
  className = "",
  imgClassName = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: AssetImageProps) {
  const [failed, setFailed] = useState(false);

  const frame = `relative isolate overflow-hidden rounded-xl ring-1 ring-inset ${
    tone === "dark" ? "ring-white/10" : "ring-ink/10"
  } ${ratio} ${className}`;

  if (failed) {
    const bg =
      tone === "dark"
        ? "bg-[radial-gradient(120%_120%_at_30%_10%,#1a1a22_0%,#050505_70%)]"
        : "bg-[radial-gradient(120%_120%_at_30%_10%,#e9e9ee_0%,#c9c9d2_70%)]";
    const globeColor = tone === "dark" ? "text-white/10" : "text-ink/10";
    const labelColor = tone === "dark" ? "text-white/45" : "text-ink/45";
    return (
      <div className={`${frame} ${bg}`}>
        <GlobeMotif className={`absolute -right-10 -top-10 h-56 w-56 sm:h-72 sm:w-72 ${globeColor}`} />
        {label ? (
          <div className="absolute inset-0 flex items-end p-5">
            <span className={`tracked-caps text-[0.65rem] font-medium sm:text-xs ${labelColor}`}>
              {label}
            </span>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className={frame}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${imgClassName}`}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
