import { Fragment, type ReactNode } from "react";

type MarqueeProps = {
  items: ReactNode[];
  /** Seconds for a full loop. */
  duration?: number;
  separator?: ReactNode;
  className?: string;
  itemClassName?: string;
};

/**
 * Seamless infinite marquee.
 *
 * Two identical groups sit side by side and the track translates by -50%
 * (one group) forever. Each group is forced to at least the viewport width
 * (`min-w-[100vw]`) with items spread across it, so the band is ALWAYS full —
 * never a gap, whatever the screen width or number of items.
 */
export function Marquee({
  items,
  duration = 28,
  separator,
  className = "",
  itemClassName = "",
}: MarqueeProps) {
  const group = (keyPrefix: string) => (
    <div className="flex min-w-[100vw] shrink-0 items-center justify-around">
      {items.map((item, i) => (
        <Fragment key={`${keyPrefix}-${i}`}>
          <span className={itemClassName}>{item}</span>
          {separator ? (
            <span aria-hidden className="text-accent-bright/70">
              {separator}
            </span>
          ) : null}
        </Fragment>
      ))}
    </div>
  );

  return (
    // Decorative, looping content — hidden from assistive tech.
    <div aria-hidden className={`overflow-hidden ${className}`}>
      <div
        className="animate-marquee flex w-max"
        style={{ animationDuration: `${duration}s` }}
      >
        {group("a")}
        {group("b")}
      </div>
    </div>
  );
}
