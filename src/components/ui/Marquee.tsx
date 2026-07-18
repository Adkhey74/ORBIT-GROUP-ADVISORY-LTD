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
 * Infinite horizontal marquee. Renders the item list twice and translates
 * by -50% so the loop is seamless.
 */
export function Marquee({
  items,
  duration = 28,
  separator,
  className = "",
  itemClassName = "",
}: MarqueeProps) {
  const sequence = (keyPrefix: string) =>
    items.map((item, i) => (
      <Fragment key={`${keyPrefix}-${i}`}>
        <span className={itemClassName}>{item}</span>
        {separator ? (
          <span aria-hidden className="text-accent-bright/70">
            {separator}
          </span>
        ) : null}
      </Fragment>
    ));

  return (
    // Decorative, looping content (rendered twice) — hidden from assistive tech.
    <div aria-hidden className={`overflow-hidden ${className}`}>
      <div
        className="animate-marquee flex w-max whitespace-nowrap"
        style={{ animationDuration: `${duration}s` }}
      >
        {sequence("a")}
        {sequence("b")}
      </div>
    </div>
  );
}
