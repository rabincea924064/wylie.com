"use client";

import { useRef, useEffect, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: "fade-up" | "fade-in" | "scale-up" | "slide-right";
  delay?: number;
  duration?: number;
  className?: string;
}

export default function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 0.8,
  className = "",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only animate on desktop/tablet for performance
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (!isDesktop) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const getAnimationStyles = () => {
    if (isVisible) {
      return {
        opacity: 1,
        transform: "translate(0, 0) scale(1)",
        transition: `all ${duration}s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
      };
    }

    switch (animation) {
      case "fade-up":
        return { opacity: 0, transform: "translateY(40px)" };
      case "fade-in":
        return { opacity: 0 };
      case "scale-up":
        return { opacity: 0, transform: "scale(0.95)" };
      case "slide-right":
        return { opacity: 0, transform: "translateX(-40px)" };
      default:
        return { opacity: 0 };
    }
  };

  return (
    <div
      ref={containerRef}
      className={`will-change-transform ${className}`}
      style={getAnimationStyles()}
    >
      {children}
    </div>
  );
}
