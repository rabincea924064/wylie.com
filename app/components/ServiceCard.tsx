import Link from "next/link";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  id?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  id,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col h-full glass rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:bg-white/15 hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/10"
      id={id}
    >
      <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/30 transition-colors duration-300 shrink-0">
        <div className="text-primary-lighter group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
      </div>
      <h3 className="text-h3 text-white mb-3">{title}</h3>
      <p className="text-body text-white/60 mb-8 line-clamp-3 flex-grow">{description}</p>
      <span className="inline-flex items-center gap-2 text-accent-light text-sm font-medium group-hover:gap-3 transition-all duration-300">
        Learn more
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          <path
            d="M6 12L10 8L6 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
}
