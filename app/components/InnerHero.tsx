"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import pageDetailsData from "../../page-details.json";

// Map slugs to human-readable page titles automatically scraped from the live site
const PAGE_DETAILS: Record<string, { title: string; description?: string }> = pageDetailsData;

export default function InnerHero() {
  const pathname = usePathname();
  // Default fallback for unknown routes
  const currentDetails = PAGE_DETAILS[pathname] || {
    title: "HVAC Services",
    description: "Professional heating, cooling, and indoor air quality services for your home and business.",
  };

  // Convert pathname to breadcrumb label
  const rawPath = pathname.replace("/", "").replace(/-/g, " ");
  const breadcrumbLabel = rawPath
    ? rawPath.replace(/\b\w/g, (char) => char.toUpperCase()) // Capitalize Words
    : "Services";

  return (
    <div className="bg-brand-surface-dark text-white pt-32 pb-16 lg:pt-40 lg:pb-20 border-b border-white/10" id="inner-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up" key={pathname}>
        {/* Breadcrumbs */}
        <nav className="mb-6 flex items-center gap-3 text-sm font-medium font-[family-name:var(--font-outfit)] uppercase tracking-widest text-white/50">
          <Link href="/" className="hover:text-accent-light transition-colors whitespace-nowrap">
            Home
          </Link>
          <span className="text-white/30">/</span>
          <span className="text-white/80 truncate">
            {breadcrumbLabel}
          </span>
        </nav>

        {/* Dynamic Page Title (H1) */}
        <h1 className="text-display mb-4">{currentDetails.title}</h1>
        
        {/* Dynamic Subtext */}
        {currentDetails.description && (
          <p className="text-body text-white/70 max-w-2xl text-lg leading-relaxed">
            {currentDetails.description}
          </p>
        )}
      </div>
    </div>
  );
}
