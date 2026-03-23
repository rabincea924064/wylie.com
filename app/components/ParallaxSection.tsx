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
  speed?: number;
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
          y: () => (window.innerHeight) * speed,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
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
      {/* Background Layer */}
      <div
        className="absolute left-0 right-0 w-full h-[150%] top-[-25%] z-0"
        ref={bgImage}
        style={{
          backgroundImage: `url(${bgImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
}
