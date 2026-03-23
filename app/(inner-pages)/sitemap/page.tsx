import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sitemap | Wylie Mechanical",
  description: "Explore all pages and services offered by Wylie Mechanical in Cornwall, ON. Find everything from heating and cooling to air quality solutions.",
};

const sitemapData = [
  {
    category: "Main Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about-us" },
      { label: "Contact Us", href: "/contact-us" },
      { label: "Reviews", href: "/reviews" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  {
    category: "Air Conditioning",
    links: [
      { label: "AC Services", href: "/air-conditioning-services-cornwall-on" },
      { label: "AC Repair", href: "/ac-repair-cornwall-on" },
      { label: "AC Replacement", href: "/ac-replacement-cornwall-on" },
      { label: "Ductless Mini Splits", href: "/ductless-mini-splits-services-cornwall-on" },
      { label: "Ductless Installation", href: "/ductless-mini-split-installation-cornwall-on" },
    ],
  },
  {
    category: "Heating",
    links: [
      { label: "Heating Services", href: "/heating-services-cornwall-on" },
      { label: "Furnace Repair", href: "/furnace-repair-cornwall-on" },
      { label: "Furnace Replacement", href: "/furnace-replacement-cornwall-on" },
      { label: "Heat Pump Services", href: "/heat-pump-services-cornwall-on" },
      { label: "Heat Pump Installation", href: "/heat-pump-installation-cornwall-on" },
    ],
  },
  {
    category: "Indoor Air Quality",
    links: [
      { label: "Indoor Air Quality", href: "/indoor-air-quality-cornwall-on" },
      { label: "Ventilation", href: "/ventilation-cornwall-on" },
      { label: "Humidifiers", href: "/humidifiers-cornwall-on" },
      { label: "HRVs", href: "/hrvs-cornwall-on" },
    ],
  },
  {
    category: "Water & Gas",
    links: [
      { label: "Water Heaters", href: "/water-heaters-cornwall-on" },
      { label: "Tankless Water Heaters", href: "/tankless-water-heaters-cornwall-on" },
      { label: "Gas Lines", href: "/gas-lines-cornwall-on" },
    ],
  },
  {
    category: "Resources & Support",
    links: [
      { label: "Our HVAC Services", href: "/our-hvac-services-cornwall-on" },
      { label: "HVAC Near Me", href: "/hvac-near-me" },
      { label: "Financing", href: "/hvac-financing-cornwall-on" },
      { label: "Maintenance Plans", href: "/hvac-maintenance-plan-cornwall-on" },
      { label: "Promotions", href: "/hvac-promotions-cornwall-on" },
      { label: "HVAC Resources", href: "/hvac-resources-cornwall-on" },
      { label: "Troubleshooter", href: "/hvac-troubleshooter" },
      { label: "SEER Calculator", href: "/seer-calculator" },
      { label: "Greener Homes Grant", href: "/canada-greener-homes-grant" },
    ],
  },
  {
    category: "Business & Service",
    links: [
      { label: "Who We Serve", href: "/who-we-serve-cornwall-on" },
      { label: "New Construction", href: "/new-construction-cornwall-on" },
      { label: "Residential Services", href: "/residential-hvac-services-cornwall-on" },
      { label: "Schedule Service", href: "/schedule-hvac-service" },
      { label: "Request Estimate", href: "/request-estimate" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="section-padding pt-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {sitemapData.map((section) => (
          <div key={section.category} className="space-y-6">
            <h2 className="text-h3 text-secondary pb-4 border-b border-border">
              {section.category}
            </h2>
            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-muted hover:text-primary transition-colors flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary mr-3 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
