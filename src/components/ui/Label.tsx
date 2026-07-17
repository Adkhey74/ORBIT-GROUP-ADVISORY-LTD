type LabelProps = {
  children: string;
  className?: string;
};

/** Section label: a short rule followed by violet tracked caps. */
export function Label({ children, className = "" }: LabelProps) {
  return (
    <span className={`eyebrow-rule text-accent-bright ${className}`}>
      <span aria-hidden className="h-px w-6 bg-accent-bright" />
      {children}
    </span>
  );
}
