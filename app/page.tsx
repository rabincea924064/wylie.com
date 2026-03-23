import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import ContactBar from "./components/ContactBar";
import Footer from "./components/Footer";
import SectionHeader from "./components/SectionHeader";
import TrustBadge from "./components/TrustBadge";
import HomeHero from "./components/HomeHero";
import ScrollReveal from "./components/ScrollReveal";

// Statically import above-fold components
// Navbar, ContactBar, HomeHero are already statically imported

// Dynamically import below-fold sections
const Services = dynamic(() => import("./components/sections/Services").then(m => m.Services), { ssr: true });
const About = dynamic(() => import("./components/sections/About").then(m => m.About), { ssr: true });
const Testimonials = dynamic(() => import("./components/sections/Testimonials").then(m => m.Testimonials), { ssr: true });
const Maintenance = dynamic(() => import("./components/sections/Maintenance").then(m => m.Maintenance), { ssr: true });

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

export default function Home() {
  return (
    <>
      <ContactBar />
      <Navbar />
      <main id="main-content">
        <HomeHero />

        {/* Trust Bar - Above Fold/Near fold, keep static or reveal */}
        <section className="relative z-20 bg-surface-alt border-b border-border" id="trust-bar">
          <ScrollReveal animation="fade-up" duration={0.6}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <TrustBadge icon={<IconMapPin />} label="Greater Cornwall Area" sublabel="Local & Trusted" id="trust-service-area" />
                <TrustBadge icon={<IconDollar />} label="Free Estimates" sublabel="No Hidden Costs" id="trust-estimates" />
                <TrustBadge icon={<IconClock />} label="Fast Response" sublabel="When You Need Us" id="trust-response" />
                <TrustBadge icon={<IconShield />} label="Licensed & Insured" sublabel="Professional Service" id="trust-licensed" />
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Below Fold Sections - Dynamically Loaded */}
        <Services />
        <About />
        <Testimonials />
        <Maintenance />
      </main>

      <Footer />
    </>
  );
}
