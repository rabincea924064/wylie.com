"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Force immediate scroll to top on every route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // Use instant to bypass smooth-scroll logic
    });
  }, [pathname]);

  return null;
}
