import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { Wordmark } from "./ui/Wordmark";
import { Footer } from "./Footer";

type LegalShellProps = {
  title: string;
  updated: string;
  children: ReactNode;
};

/** Shared layout for legal pages: minimal header, prose container, site footer. */
export function LegalShell({ title, updated, children }: LegalShellProps) {
  return (
    <>
      <header className="border-b border-white/10 bg-ink">
        <div className="mx-auto flex h-16 w-full max-w-3xl items-center justify-between px-6">
          <Link href="/" aria-label="Orbit Group — home">
            <Wordmark size="sm" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
            Back to site
          </Link>
        </div>
      </header>

      <main className="bg-ink">
        <div className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-20">
          <h1 className="font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-xs uppercase tracking-[0.15em] text-white/45">
            Last updated: {updated}
          </p>

          <div className="mt-10 space-y-5 text-sm leading-relaxed text-white/70 [&_a]:text-accent-label [&_a]:underline [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-lg [&_h2]:font-bold [&_h2]:uppercase [&_h2]:tracking-tight [&_h2]:text-white [&_li]:marker:text-accent-bright [&_strong]:font-semibold [&_strong]:text-white/90 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
