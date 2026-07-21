"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * Full-bleed cinematic hero background.
 *
 * A muted, looping video plays on all devices (with the still as poster/
 * fallback). Only users who prefer reduced motion get the static image.
 * A directional gradient keeps the left column crisp for text.
 */
export function HeroBackground({ src, video }: { src: string; video?: string }) {
  const [failed, setFailed] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (!video) return;
    // Now that the clip is light (~1.5MB) it plays on mobile too — only
    // skipped for users who prefer reduced motion (they keep the still image).
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setShowVideo(!reduce);
  }, [video]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {showVideo && video ? (
        <video
          className="absolute inset-0 h-full w-full object-cover object-[62%_28%]"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={src}
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : !failed ? (
        <Image
          src={src}
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-[62%_28%]"
          onError={() => setFailed(true)}
        />
      ) : null}

      {/* Cinematic left→right darkening for text legibility (lightened to reveal more video) */}
      <div className="absolute inset-0 bg-linear-to-r from-ink/90 from-10% via-ink/55 via-45% to-transparent" />
      {/* Bottom fade into the section / ticker */}
      <div className="absolute inset-0 bg-linear-to-t from-ink from-5% via-transparent to-ink/35" />
      {/* Gentle top fade so the header reads */}
      <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-ink/70 to-transparent" />
      {/* Subtle violet grade, low-right (radial gradient, no GPU blur) */}
      <div className="pointer-events-none absolute -bottom-1/4 right-0 h-[110vh] w-[110vh] bg-[radial-gradient(circle,rgba(91,33,230,0.18)_0%,rgba(91,33,230,0.07)_40%,transparent_70%)]" />
    </div>
  );
}
