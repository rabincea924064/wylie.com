"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Button from "./Button";
import SidebarForm from "./SidebarForm";
import gsap from "gsap"; // STATIC IMPORT AS REQUESTED

export default function HomeHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // DISABLE GSAP ON MOBILE for performance scores
    if (window.innerWidth < 1024) return;

    const ctx = gsap.context(() => {
      // Main container fade in
      gsap.from(containerRef.current, {
        opacity: 0,
        duration: 2,
        ease: "power2.out",
      });

      // Left Column Stagger
      const children = leftColRef.current?.children;
      if (children) {
        gsap.from(Array.from(children), {
          opacity: 0,
          y: 30,
          stagger: 0.2,
          duration: 1,
          delay: 0.5,
          ease: "back.out(1.7)",
        });
      }

      // Form animation
      if (formRef.current) {
        gsap.from(formRef.current, {
          opacity: 0,
          x: 50,
          rotateY: 15,
          duration: 1.2,
          delay: 1,
          ease: "power3.out",
        });
      }

      // Scroll indicator float
      if (scrollRef.current) {
        gsap.to(scrollRef.current, {
          y: 10,
          opacity: 0.8,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center overflow-hidden perspective-1000" id="hero">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/slider-img01.webp"
          alt="Modern home with heating and cooling comfort"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/80 to-[#727f87]/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Text & CTAs) */}
          <div ref={leftColRef} className="lg:col-span-7">
            <span className="inline-block text-accent-light text-caption uppercase font-semibold tracking-widest mb-4 drop-shadow-md">
              Cornwall, ON &bull; Trusted HVAC Experts
            </span>
            
            <h1 className="text-display text-white mb-6 leading-tight drop-shadow-xl">
              Your Comfort Is Our <span className="text-primary-lighter relative">Priority</span>
            </h1>
            
            <p className="text-body text-white/90 max-w-lg mb-8 leading-relaxed text-lg drop-shadow-md">
              Professional heating, cooling, and indoor air quality services for the Greater Cornwall area. Fast, affordable, and reliable when you need us most.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button href="tel:613-577-2726" variant="primary" size="lg" className="shadow-2xl shadow-primary/30 min-w-[200px] hover:scale-105 transition-transform">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 inline">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                (613) 577-2726
              </Button>
              <Button href="#services-section" variant="secondary" size="lg" className="!border-white/30 !text-white hover:!bg-white hover:!text-secondary text-sm backdrop-blur-sm">
                Explore Services
              </Button>
            </div>
          </div>

          {/* Right Column (Lead Form) */}
          <div ref={formRef} className="lg:col-span-5 relative lg:ml-auto w-full max-w-md">
            <div className="relative z-10 w-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-surface-alt/90 backdrop-blur-md">
              <SidebarForm />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>
  );
}
