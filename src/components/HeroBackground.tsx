"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * Full-bleed cinematic hero background. A directional gradient keeps the
 * left column crisp for text while revealing the photographed subject on the
 * right. Falls back to a plain dark base if the file is missing.
 */
export function HeroBackground({ src }: { src: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {!failed ? (
        <Image
          src={src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_28%]"
          onError={() => setFailed(true)}
        />
      ) : null}

      {/* Cinematic left→right darkening for text legibility */}
      <div className="absolute inset-0 bg-linear-to-r from-ink from-15% via-ink/80 via-45% to-ink/15" />
      {/* Bottom fade into the section / ticker */}
      <div className="absolute inset-0 bg-linear-to-t from-ink from-5% via-transparent to-ink/50" />
      {/* Gentle top fade so the header reads */}
      <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-ink/70 to-transparent" />
      {/* Subtle violet grade, low-right */}
      <div className="pointer-events-none absolute -bottom-1/4 right-0 h-[70vh] w-[70vh] rounded-full bg-accent/15 blur-[150px]" />
    </div>
  );
}
