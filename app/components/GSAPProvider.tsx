"use client";

import { useEffect, useState } from "react";

export default function GSAPProvider({ children }: { children: React.ReactNode }) {
  const [gsapLoaded, setGsapLoaded] = useState(false);

  useEffect(() => {
    // Only load GSAP on desktop screens for performance
    if (window.innerWidth < 1024) {
      setGsapLoaded(true); // Still render children, just no GSAP logic
      return;
    }

    const loadGSAP = async () => {
      try {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        
        gsap.registerPlugin(ScrollTrigger);
        setGsapLoaded(true);
      } catch (error) {
        console.error("Failed to load GSAP:", error);
        setGsapLoaded(true); // Render children regardless
      }
    };

    loadGSAP();
  }, []);

  return <>{children}</>;
}
