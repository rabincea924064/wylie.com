interface TrustBadgeProps {
  icon: React.ReactNode;
  label: string;
  sublabel?: string;
  id?: string;
}

export default function TrustBadge({
  icon,
  label,
  sublabel,
  id,
}: TrustBadgeProps) {
  return (
    <div className="flex items-center gap-4 p-4" id={id}>
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
        <div className="text-primary">{icon}</div>
      </div>
      <div>
        <div className="font-semibold text-secondary text-sm lg:text-base">{label}</div>
        {sublabel && (
          <div className="text-caption text-muted">{sublabel}</div>
        )}
      </div>
    </div>
  );
}
