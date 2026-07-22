"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: "$120M+", label: "Total Volume in 2025" },
  { value: "250+", label: "Transactions in 2025" },
  { value: "90+", label: "Leases in 2025" },
  { value: "500+", label: "Satisfied Reviews" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#6b6560] text-white">
      {/* Background team image */}
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center opacity-70"
        style={{ backgroundImage: "url(/texasace/team-hero.jpg)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#161311]/70 via-[#161311]/55 to-[#161311]/85" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-[1600px] flex-col justify-center px-6 pb-40 pt-32 text-center lg:px-10">
        <h1 className="font-serif-display text-[15vw] font-extrabold leading-[0.92] [text-wrap:balance] sm:text-7xl lg:text-[112px]">
          Realtors in
          <br />
          <span className="font-light text-white/80">the DFW area</span>
        </h1>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#"
            className="rounded-full bg-[#c75912] px-8 py-4 font-mont text-[13px] font-semibold tracking-widest text-white transition-transform duration-300 hover:-translate-y-0.5"
          >
            READ OUR STORY
          </a>
          <a
            href="#"
            className="rounded-full border border-white/40 px-8 py-4 font-mont text-[13px] font-semibold tracking-widest text-white transition-colors hover:bg-white/10"
          >
            CONTACT US
          </a>
        </div>

        {/* Stats */}
        <div
          ref={ref}
          className={`mx-auto mt-20 grid w-full max-w-5xl grid-cols-2 gap-y-10 lg:grid-cols-4 ${
            visible ? "wbg-fade-up" : "opacity-0"
          }`}
        >
          {STATS.map((s) => (
            <div key={s.label} className="px-4 text-center">
              <div className="font-serif-display text-4xl font-bold tracking-tight lg:text-6xl">
                {s.value}
              </div>
              <div className="mx-auto mt-2 max-w-[200px] font-mont text-[11px] uppercase tracking-[0.15em] text-white/60 lg:text-xs">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
