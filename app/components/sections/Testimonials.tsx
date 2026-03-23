"use client";

import Section from "../Section";
import SectionHeader from "../SectionHeader";
import ScrollReveal from "../ScrollReveal";
import TestimonialCard from "../TestimonialCard";
import Button from "../Button";

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

export function Testimonials() {
  return (
    <Section className="!bg-surface-alt" id="testimonials-section">
      <SectionHeader
        eyebrow="What Our Customers Say"
        title="Trusted by Cornwall Homeowners"
        subtitle="Don't just take our word for it — hear from the families we've helped stay comfortable year-round."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.author} animation="fade-up" delay={i * 0.2} className="h-full">
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
  );
}
