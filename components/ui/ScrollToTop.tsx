"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Disable browser's automatic scroll restoration globally
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const performScrollReset = () => {
      if (typeof window === "undefined") return;

      // Reset standard window scroll
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });

      // Reset Lenis smooth scroll position if active
      const lenis = (window as any).lenis;
      if (lenis && typeof lenis.scrollTo === "function") {
        lenis.scrollTo(0, { immediate: true });
      }
    };

    // Phase A: Instant reset
    performScrollReset();

    // Phase B: Animation frame (catches Next.js rendering loops)
    const frameId = requestAnimationFrame(performScrollReset);

    // Phase C: Multi-interval fallback (catches framer-motion layout height/exit/entrance transitions)
    const t1 = setTimeout(performScrollReset, 20);
    const t2 = setTimeout(performScrollReset, 50);
    const t3 = setTimeout(performScrollReset, 100);
    const t4 = setTimeout(performScrollReset, 200);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [pathname]);

  return null;
}
