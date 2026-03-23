interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "glass";
  className?: string;
  id?: string;
}

const variantStyles = {
  default: "bg-white border border-border rounded-2xl",
  elevated: "bg-white rounded-2xl shadow-xl shadow-black/5",
  glass: "glass rounded-2xl",
};

export default function Card({
  children,
  variant = "default",
  className = "",
  id,
}: CardProps) {
  return (
    <div className={`p-6 lg:p-8 ${variantStyles[variant]} ${className}`} id={id}>
      {children}
    </div>
  );
}
