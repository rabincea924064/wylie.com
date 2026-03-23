import Image from "next/image";
import Navbar from "./components/Navbar";
import ContactBar from "./components/ContactBar";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Section from "./components/Section";
import SectionHeader from "./components/SectionHeader";
import ServiceCard from "./components/ServiceCard";
import TestimonialCard from "./components/TestimonialCard";
import TrustBadge from "./components/TrustBadge";
import CTABlock from "./components/CTABlock";
import SidebarForm from "./components/SidebarForm";
import HomeHero from "./components/HomeHero";
import ScrollReveal from "./components/ScrollReveal";
import ParallaxSection from "./components/ParallaxSection";

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

/* ============================================
   TRUST BAR ICONS
   ============================================ */

function IconMapPin() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconDollar() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

/* ============================================
   SERVICES DATA
   ============================================ */

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

/* ============================================
   TESTIMONIALS DATA
   ============================================ */

const testimonials = [
  {
    quote: "Wylie Mechanical was fantastic! They installed our new furnace quickly and professionally. The team was courteous and cleaned up after themselves. Highly recommend!",
    author: "Blair W.",
    rating: 5,
  },
  {
    quote: "Called for an emergency AC repair on the hottest day of the year. They came within the hour and had everything running perfectly. Outstanding service!",
    author: "Sarah M.",
    rating: 5,
  },
  {
    quote: "We've been using Wylie Mechanical for our maintenance plan and couldn't be happier. Their technicians are knowledgeable, friendly, and always on time.",
    author: "James T.",
    rating: 5,
  },
];

/* ============================================
   HOME PAGE
   ============================================ */

export default function Home() {
  return (
    <>
      {/* Top Contact Bar */}
      <ContactBar />

      {/* Navigation */}
      <Navbar />

      {/* ==========================================
          HERO SECTION (ANIMATED)
         ========================================== */}
      <HomeHero />

      {/* ==========================================
          TRUST BAR
         ========================================== */}
      <section className="bg-surface-alt border-b border-border" id="trust-bar">
        <ScrollReveal animation="fade-up" duration={0.6}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <TrustBadge
                icon={<IconMapPin />}
                label="Greater Cornwall Area"
                sublabel="Local & Trusted"
                id="trust-service-area"
              />
              <TrustBadge
                icon={<IconDollar />}
                label="Free Estimates"
                sublabel="No Hidden Costs"
                id="trust-estimates"
              />
              <TrustBadge
                icon={<IconClock />}
                label="Fast Response"
                sublabel="When You Need Us"
                id="trust-response"
              />
              <TrustBadge
                icon={<IconShield />}
                label="Licensed & Insured"
                sublabel="Professional Service"
                id="trust-licensed"
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ==========================================
          SERVICES SECTION
         ========================================== */}
      <Section dark id="services-section">
        <SectionHeader
          eyebrow="What We Do"
          title="Our HVAC Services"
          subtitle="From installation to maintenance, we provide comprehensive HVAC solutions for your home comfort needs."
          dark
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} animation="fade-up" delay={i * 0.1} duration={0.5}>
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

      {/* ==========================================
          ABOUT / WHY CHOOSE US
         ========================================== */}
      <Section id="about-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <ScrollReveal animation="scale-up" duration={0.8}>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-primary/10">
              <Image
                src="/images/about-image.png"
                alt="Wylie Mechanical HVAC technician performing maintenance"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              {/* Experience badge */}
              <div className="absolute bottom-6 left-6 glass rounded-xl px-5 py-3">
                <span className="text-white font-bold text-lg font-[family-name:var(--font-outfit)]">
                  Trusted Local Experts
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal animation="slide-right" delay={0.2} duration={0.7}>
            <div>
              <SectionHeader
                eyebrow="Why Choose Us"
                title="Your Comfort, Our Commitment"
                subtitle="At Wylie Mechanical, we're more than just HVAC technicians — we're your neighbors. We serve the Greater Cornwall area with integrity, expertise, and a genuine care for our community."
                align="left"
              />
              <ul className="space-y-4 mb-8">
                {[
                  "Air Conditioners & heating systems",
                  "Tankless & traditional water heaters",
                  "Ductless mini split systems",
                  "Ventilation & indoor air quality",
                  "Gas line installation & repair",
                  "Maintenance plans from $7.99/month",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="shrink-0 mt-0.5"
                    >
                      <circle cx="10" cy="10" r="10" fill="#727f87" fillOpacity="0.15" />
                      <path
                        d="M7 10l2 2 4-4"
                        stroke="#727f87"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-body text-muted">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/about-us" variant="primary" id="about-learn-more">
                  Learn More About Us
                </Button>
                <Button href="/request-estimate" variant="secondary" id="about-estimate">
                  Free Estimate
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* ==========================================
          TESTIMONIALS
         ========================================== */}
      <Section className="!bg-surface-alt" id="testimonials-section">
        <SectionHeader
          eyebrow="What Our Customers Say"
          title="Trusted by Cornwall Homeowners"
          subtitle="Don't just take our word for it — hear from the families we've helped stay comfortable year-round."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.author} animation="fade-up" delay={i * 0.2}>
              <TestimonialCard
                quote={t.quote}
                author={t.author}
                rating={t.rating}
                id={`testimonial-${i}`}
              />
            </ScrollReveal>
          ))}
        </div>
        <div className="text-center mt-10">
          <ScrollReveal animation="fade-up" delay={0.6}>
            <Button
              href="https://g.page/r/CRVc4lKbmKtoEAE/review"
              variant="link"
              id="testimonials-view-all"
            >
              View All Reviews on Google →
            </Button>
          </ScrollReveal>
        </div>
      </Section>

      {/* ==========================================
          MAINTENANCE PLAN CTA
         ========================================== */}
      <Section id="maintenance-cta-section">
        <ScrollReveal animation="fade-up" duration={0.8}>
          <CTABlock
            headline="Maintenance Plans Starting at $7.99/Month"
            subtext="Keep your HVAC system running at peak performance with our affordable maintenance plans. Prevent breakdowns, extend equipment life, and save on energy bills."
            primaryAction={{
              label: "View Maintenance Plans",
              href: "/hvac-maintenance-plan-cornwall-on",
            }}
            secondaryAction={{
              label: "Call to Learn More",
              href: "tel:613-701-2030",
            }}
            id="cta-maintenance"
          />
        </ScrollReveal>
      </Section>

      {/* Footer */}
      <Footer />
    </>
  );
}
