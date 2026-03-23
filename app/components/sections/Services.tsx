"use client";

import Section from "../Section";
import SectionHeader from "../SectionHeader";
import ScrollReveal from "../ScrollReveal";
import ServiceCard from "../ServiceCard";
import Button from "../Button";

/* ============================================
   SERVICE ICON SVGs
   ============================================ */

function IconAC() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="12" rx="2" />
      <path d="M6 20h12" />
      <path d="M12 16v4" />
      <path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01" />
    </svg>
  );
}

function IconHeating() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2c-4 4-6 7-6 10a6 6 0 0012 0c0-3-2-6-6-10z" />
      <path d="M12 12c-1.5 1.5-2 3-2 4a2 2 0 004 0c0-1-.5-2.5-2-4z" />
    </svg>
  );
}

function IconAirQuality() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.59 4.59A2 2 0 1111 8H2" />
      <path d="M12.59 19.41A2 2 0 1014 16H2" />
      <path d="M17.73 7.73A2.5 2.5 0 1119.5 12H2" />
    </svg>
  );
}

function IconWaterHeater() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v6" />
      <path d="M8 4v4" />
      <path d="M16 4v4" />
      <rect x="4" y="8" width="16" height="14" rx="2" />
      <circle cx="12" cy="15" r="3" />
    </svg>
  );
}

function IconHeatPump() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="2" />
      <circle cx="12" cy="12" r="5" />
      <path d="M12 7v10M7 12h10" />
    </svg>
  );
}

function IconDuctless() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="8" rx="2" />
      <path d="M4 12v4M8 12v6M12 12v4M16 12v6M20 12v4" />
      <line x1="4" y1="8" x2="20" y2="8" />
    </svg>
  );
}

function IconGasLine() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4v16" />
      <path d="M4 8h8a4 4 0 014 4v0a4 4 0 01-4 4H4" />
      <path d="M20 4v4l-2 2-2-2V4" />
      <circle cx="19" cy="18" r="2" />
      <path d="M19 14v2" />
    </svg>
  );
}

const services = [
  {
    icon: <IconAC />,
    title: "Air Conditioning",
    description: "Expert AC installation, replacement, repair, and maintenance services to keep your home cool all summer.",
    href: "/air-conditioning-services-cornwall-on",
  },
  {
    icon: <IconHeating />,
    title: "Heating",
    description: "Professional furnace repair, replacement, and heating system services to keep your family warm and comfortable.",
    href: "/heating-services-cornwall-on",
  },
  {
    icon: <IconAirQuality />,
    title: "Indoor Air Quality",
    description: "Improve your home's air with ventilation, humidifiers, and HRV systems for healthier indoor living.",
    href: "/indoor-air-quality-cornwall-on",
  },
  {
    icon: <IconWaterHeater />,
    title: "Tankless Water Heaters",
    description: "Never run out of hot water again. Energy-efficient tankless solutions for endless comfort.",
    href: "/tankless-water-heaters-cornwall-on",
  },
  {
    icon: <IconHeatPump />,
    title: "Heat Pumps",
    description: "Energy-efficient heating and cooling in one system. Year-round comfort with lower energy bills.",
    href: "/heat-pump-services-cornwall-on",
  },
  {
    icon: <IconDuctless />,
    title: "Ductless Mini Splits",
    description: "Flexible zone control without ductwork. Increasingly popular for their efficiency and versatility.",
    href: "/ductless-mini-splits-services-cornwall-on",
  },
  {
    icon: <IconGasLine />,
    title: "Gas Lines",
    description: "Safe and professional gas line installation, repair, replacement, and maintenance by certified experts.",
    href: "/gas-lines-cornwall-on",
  },
];

export function Services() {
  return (
    <Section dark id="services-section">
      <SectionHeader
        eyebrow="What We Do"
        title="Our HVAC Services"
        subtitle="From installation to maintenance, we provide comprehensive HVAC solutions for your home comfort needs."
        dark
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <ScrollReveal key={service.title} animation="fade-up" delay={i * 0.1} duration={0.5} className="h-full">
            <ServiceCard
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
              id={`service-card-${i}`}
            />
          </ScrollReveal>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button
          href="/our-hvac-services-cornwall-on"
          variant="secondary"
          size="lg"
          className="!border-white/30 !text-white hover:!bg-white hover:!text-secondary"
          id="services-view-all"
        >
          View All Services
        </Button>
      </div>
    </Section>
  );
}
