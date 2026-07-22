"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.registerPlugin(ScrollTrigger);

    let lenis: Lenis | undefined;
    let rafId: ((t: number) => void) | undefined;

    if (!reduce) {
      lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      lenis.on("scroll", ScrollTrigger.update);
      rafId = (time: number) => lenis!.raf(time * 1000);
      gsap.ticker.add(rafId);
      gsap.ticker.lagSmoothing(0);
    }

    const ctx = gsap.context(() => {
      if (reduce) return;

      // Single elements: fade + rise
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 48,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      // Groups: staggered children
      gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((grp) => {
        gsap.from(grp.children, {
          y: 56,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.09,
          scrollTrigger: { trigger: grp, start: "top 85%" },
        });
      });
    });

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
      if (rafId) gsap.ticker.remove(rafId);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
