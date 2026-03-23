interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  dark?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const eyebrowColor = dark ? "text-accent-light" : "text-primary";
  const titleColor = dark ? "text-white" : "text-secondary";
  const subtitleColor = dark ? "text-white/70" : "text-muted";

  return (
    <div className={`max-w-3xl mb-12 lg:mb-16 ${alignClass} ${className}`}>
      {eyebrow && (
        <span
          className={`text-caption uppercase font-semibold tracking-widest ${eyebrowColor} mb-3 block`}
        >
          {eyebrow}
        </span>
      )}
      <h2 className={`text-h2 ${titleColor}`}>{title}</h2>
      {subtitle && (
        <p className={`text-body ${subtitleColor} mt-4`}>{subtitle}</p>
      )}
    </div>
  );
}
