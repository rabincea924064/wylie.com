"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ParallaxSectionProps {
  children: React.ReactNode;
  bgImageUrl: string;
  className?: string;
  speed?: number; // Adjust parallax intensity (e.g. 0.3 = 30% slower than scroll)
}

export default function ParallaxSection({
  children,
  bgImageUrl,
  className = "",
  speed = 0.4,
}: ParallaxSectionProps) {
  const container = useRef<HTMLDivElement>(null);
  const bgImage = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.innerWidth < 1024) return;
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        if (!container.current || !bgImage.current) return;

        gsap.to(bgImage.current, {
          y: () => (window.innerHeight) * speed, // Move the image down
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom", // Trigger when top of section hits bottom of viewport
            end: "bottom top",   // End when bottom of section hits top of viewport
            scrub: true,         // Smooth interpolating tied directly to scrollbar
          },
        });
      });
    },
    { scope: container }
  );

  return (
    <section 
      ref={container} 
      className={`relative overflow-hidden ${className}`}
    >
      {/* Background Layer inside an oversized container to handle the move */}
      <div 
        className="absolute left-0 right-0 w-full h-[150%] top-[-25%] z-0"
        ref={bgImage} 
        style={{
          backgroundImage: `url(${bgImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
}
