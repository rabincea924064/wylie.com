"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Air Conditioning",
    href: "/air-conditioning-services-cornwall-on",
    children: [{ label: "AC Replacement", href: "/ac-replacement-cornwall-on" }],
  },
  {
    label: "Heating",
    href: "/heating-services-cornwall-on",
    children: [
      { label: "Furnace Repair", href: "/furnace-repair-cornwall-on" },
      { label: "Furnace Replacement", href: "/furnace-replacement-cornwall-on" },
      { label: "Heat Pumps", href: "/heat-pump-services-cornwall-on" },
    ],
  },
  {
    label: "Indoor Air Quality",
    href: "/indoor-air-quality-cornwall-on",
    children: [
      { label: "Ventilation", href: "/ventilation-cornwall-on" },
      { label: "Humidifiers", href: "/humidifiers-cornwall-on" },
      { label: "HRVs", href: "/hrvs-cornwall-on" },
    ],
  },
  {
    label: "Our Services",
    href: "/our-hvac-services-cornwall-on",
    children: [
      { label: "Ductless Mini Splits", href: "/ductless-mini-splits-services-cornwall-on" },
      { label: "Water Heaters", href: "/water-heaters-cornwall-on" },
      { label: "Gas Lines", href: "/gas-lines-cornwall-on" },
    ],
  },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
          const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrolledPct = (winScroll / height) * 100;
          
          setScrollProgress(scrolledPct);
          setScrolled(winScroll > 40);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "top-0 bg-white/95 backdrop-blur-lg shadow-lg shadow-black/5"
          : "top-10 bg-transparent"
      }`}
      id="main-nav"
    >
      {/* Scroll Progress Indicator */}
      <div 
        className="absolute top-0 left-0 h-[2px] bg-primary z-[60] transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation content... (same as before) */}
        <div className="flex items-center justify-between h-20 relative">
          {/* Logo... */}
          <Link 
            href="/" 
            className={`flex items-center shrink-0 transition-all duration-300 ${
              scrolled ? "w-32 lg:w-40" : "w-[120px] lg:w-[150px]"
            }`} 
            id="nav-logo"
            aria-label="Wylie Mechanical Home"
          >
            <div 
              className={`transition-all duration-300 origin-top-left ${
                scrolled 
                  ? "relative w-full h-12 lg:h-16" 
                  : "absolute top-0 w-[120px] h-[120px] lg:w-[150px] lg:h-[150px] z-50"
              }`}
            >
              <Image 
                src="/images/wylie-logo.webp" 
                alt="Wylie Mechanical Logo" 
                fill
                sizes="150px"
                className="object-contain"
                loading="eager"
              />
            </div>
          </Link>

          {/* Desktop Nav... */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() =>
                  link.children ? setOpenDropdown(link.label) : undefined
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-primary/10 ${
                    scrolled
                      ? "text-foreground hover:text-primary"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                  {link.children && (
                    <svg
                      className="inline-block ml-1 w-3 h-3"
                      fill="none"
                      viewBox="0 0 12 12"
                    >
                      <path
                        d="M3 5l3 3 3-3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </Link>
                {link.children && openDropdown === link.label && (
                  <div className="absolute top-full left-0 pt-2 animate-fade-in">
                    <div className="bg-white rounded-xl shadow-xl shadow-black/10 border border-border-light py-2 min-w-[200px]">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-muted hover:text-primary hover:bg-primary/5 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA + Mobile Toggle... */}
          <div className="flex items-center gap-3">
            <Button
              href="tel:613-577-2726"
              variant="primary"
              size="sm"
              className="hidden md:inline-flex"
              id="nav-cta-call"
              ariaLabel="Call Wylie Mechanical at (613) 577-2726"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              (613) 577-2726
            </Button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? "text-secondary" : "text-white"
              }`}
              id="nav-mobile-toggle"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              type="button"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                {mobileOpen ? (
                  <path
                    d="M18 6L6 18M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with CSS transition-all */}
      <div 
        className={`lg:hidden bg-white border-t border-border overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                className="block px-4 py-3 rounded-lg text-foreground hover:bg-primary/5 hover:text-primary font-medium text-sm"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.children?.map((child) => (
                <Link
                  key={child.label}
                  href={child.href}
                  className="block pl-8 pr-4 py-2 text-sm text-muted hover:text-primary"
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="pt-4 border-t border-border">
            <Button href="tel:613-577-2726" variant="primary" size="md" className="w-full">
              Call (613) 577-2726
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
