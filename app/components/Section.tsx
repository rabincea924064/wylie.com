interface SectionProps {
  children: React.ReactNode;
  variant?: "standard" | "full-bleed" | "split" | "overlap";
  dark?: boolean;
  className?: string;
  id?: string;
}

export default function Section({
  children,
  variant = "standard",
  dark = false,
  className = "",
  id,
}: SectionProps) {
  const bgClass = dark ? "bg-brand-surface-dark text-white" : "bg-surface";

  const containerClass =
    variant === "full-bleed"
      ? ""
      : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

  return (
    <section
      className={`section-padding ${bgClass} ${className}`}
      id={id}
    >
      <div className={containerClass}>{children}</div>
    </section>
  );
}
