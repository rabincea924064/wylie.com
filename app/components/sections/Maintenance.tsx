"use client";

import Section from "../Section";
import ScrollReveal from "../ScrollReveal";
import CTABlock from "../CTABlock";

export function Maintenance() {
  return (
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
  );
}
