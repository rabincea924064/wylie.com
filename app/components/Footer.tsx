import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "Air Conditioning", href: "/air-conditioning-services-cornwall-on" },
  { label: "Heating", href: "/heating-services-cornwall-on" },
  { label: "Indoor Air Quality", href: "/indoor-air-quality-cornwall-on" },
  { label: "Heat Pumps", href: "/heat-pump-services-cornwall-on" },
  { label: "Ductless Mini-Splits", href: "/ductless-mini-splits-services-cornwall-on" },
  { label: "Water Heaters", href: "/water-heaters-cornwall-on" },
  { label: "Gas Lines", href: "/gas-lines-cornwall-on" },
];

const companyLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Reviews", href: "/reviews" },
  { label: "Gallery", href: "/gallery" },
  { label: "Financing", href: "/hvac-financing-cornwall-on" },
  { label: "Maintenance Plans", href: "/hvac-maintenance-plan-cornwall-on" },
  { label: "Contact Us", href: "/contact-us" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-surface-dark text-white" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6" aria-label="Wylie Mechanical Home">
              <Image 
                src="/images/wylie-logo.webp" 
                alt="Wylie Mechanical Logo" 
                width={240} 
                height={72} 
                className="object-contain h-16 w-auto" 
                loading="lazy"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Your trusted HVAC partner in Cornwall, ON. Professional heating,
              cooling, and indoor air quality services for your home.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/WylieMechanical/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary transition-colors flex items-center justify-center"
                id="footer-facebook"
                aria-label="Wylie Mechanical on Facebook"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://g.page/r/CRVc4lKbmKtoEAE/review"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-primary transition-colors flex items-center justify-center"
                id="footer-google"
                aria-label="Wylie Mechanical Google Reviews"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base font-[family-name:var(--font-outfit)] mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-accent-light text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-base font-[family-name:var(--font-outfit)] mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-accent-light text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-base font-[family-name:var(--font-outfit)] mb-6">
              Contact Us
            </h3>
            <div className="space-y-4">
              <a
                href="https://www.google.com/maps/place/Wylie+Mechanical/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/60 hover:text-accent-light text-sm transition-colors"
                id="footer-address"
                aria-label="View Wylie Mechanical location on Google Maps"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="shrink-0 mt-0.5"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  P.O. BOX 644
                  <br />
                  Cornwall PO Main, ON K6H5T3
                </span>
              </a>
              <a
                href="tel:613-577-2726"
                className="flex items-center gap-3 text-white/60 hover:text-accent-light text-sm transition-colors"
                id="footer-phone"
                aria-label="Call Wylie Mechanical Main Line: (613) 577-2726"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                (613) 577-2726
              </a>
              <a
                href="tel:613-701-2030"
                className="flex items-center gap-3 text-white/60 hover:text-accent-light text-sm transition-colors"
                id="footer-phone-alt"
                aria-label="Call Wylie Mechanical Secondary Line: (613) 701-2030"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                (613) 701-2030
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Copyright */}
          <p className="text-white/40 text-sm order-3 lg:order-1 text-center lg:text-left">
            &copy; {new Date().getFullYear()} Wylie Mechanical. All rights reserved.
          </p>

          {/* Developer Credentials */}
          <div className="flex items-center gap-3 order-1 lg:order-2">
            <span className="text-white/40 text-[11px] uppercase tracking-widest font-medium">
              Website Designed and Developed by:
            </span>
            <Image 
              src="/images/CIWEB.png" 
              alt="CIWEB Logo" 
              width={160} 
              height={40} 
              className="opacity-60 hover:opacity-100 transition-opacity h-6 w-auto"
              unoptimized
              loading="lazy"
            />
          </div>

          {/* Utility Links */}
          <div className="flex gap-6 text-sm order-2 lg:order-3">
            <Link
              href="/privacy-policy"
              className="text-white/40 hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/accessibility"
              className="text-white/40 hover:text-white/70 transition-colors"
            >
              Accessibility
            </Link>
            <Link
              href="/sitemap"
              className="text-white/40 hover:text-white/70 transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
