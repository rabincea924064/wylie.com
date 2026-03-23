"use client";

import Image from "next/image";
import Section from "../Section";
import SectionHeader from "../SectionHeader";
import ScrollReveal from "../ScrollReveal";
import Button from "../Button";

export function About() {
  return (
    <Section id="about-section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <ScrollReveal animation="scale-up" duration={0.8}>
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-primary/10">
            <Image
              src="/images/about-image.webp"
              alt="Wylie Mechanical HVAC technician performing professional maintenance in Cornwall"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
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
  );
}
