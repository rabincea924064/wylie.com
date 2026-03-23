import Button from "./Button";

interface CTABlockProps {
  headline: string;
  subtext?: string;
  primaryAction: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  dark?: boolean;
  id?: string;
}

export default function CTABlock({
  headline,
  subtext,
  primaryAction,
  secondaryAction,
  dark = false,
  id,
}: CTABlockProps) {
  return (
    <div
      className={`rounded-3xl p-8 md:p-12 lg:p-16 text-center ${
        dark
          ? "bg-dark-textured text-white"
          : "bg-gradient-to-br from-primary to-primary-dark text-white"
      }`}
      id={id}
    >
      <h2 className="text-h2 mb-4">{headline}</h2>
      {subtext && (
        <p
          className={`text-body max-w-2xl mx-auto mb-8 ${
            dark ? "text-white/70" : "text-white/80"
          }`}
        >
          {subtext}
        </p>
      )}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          href={primaryAction.href}
          variant="secondary"
          size="lg"
          className="!border-white !text-white hover:!bg-white hover:!text-primary-dark"
        >
          {primaryAction.label}
        </Button>
        {secondaryAction && (
          <Button
            href={secondaryAction.href}
            variant="ghost"
            size="lg"
            className="!text-white hover:!bg-white/10"
          >
            {secondaryAction.label}
          </Button>
        )}
      </div>
    </div>
  );
}
