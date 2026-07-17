import type { ElementType } from "react";

type HeadingProps = {
  lead: string;
  emphasis?: string;
  as?: ElementType;
  variant?: "dark" | "light";
  className?: string;
};

/**
 * Two-part display heading: the lead in the section's base colour, the
 * emphasis rendered in accent violet. Heavy uppercase display face.
 */
export function Heading({
  lead,
  emphasis,
  as: Tag = "h2",
  variant = "dark",
  className = "",
}: HeadingProps) {
  const base = variant === "dark" ? "text-white" : "text-ink";
  return (
    <Tag
      className={`font-display font-extrabold uppercase leading-[0.95] tracking-tight ${base} ${className}`}
    >
      {lead}
      {emphasis ? (
        <>
          {" "}
          <span className="text-accent-bright">{emphasis}</span>
        </>
      ) : null}
    </Tag>
  );
}
