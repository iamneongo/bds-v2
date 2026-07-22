"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: "$7B+", label: "Sold" },
  { value: "8,000+", label: "Families Served" },
  { value: "3,000+", label: "5 Star Reviews (Google/Zillow/Yelp)" },
  { value: "#1", label: "Team in San Diego" },
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
    <section className="relative overflow-hidden bg-[#5a534b] text-white">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/balboa-park.jpg"
      >
        <source src="/videos/hero-san-diego.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-[#23201c]/70" />

      <div className="relative mx-auto flex min-h-[92vh] max-w-[1600px] flex-col justify-center px-6 pb-40 pt-32 text-center lg:px-10">
        <h1 className="font-serif-display text-[46px] font-light leading-[1.05] sm:text-6xl lg:text-[76px]">
          #1 Residential Real Estate Team
          <br />
          <span className="italic">in San Diego County</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl font-mont text-base text-white/85 lg:text-lg">
          Bringing you more options, deeper expertise and proven results.
        </p>
        <div className="mt-9 flex items-center justify-center gap-4">
          <a
            href="#"
            className="rounded-full bg-[#ede5dd] px-8 py-3.5 font-mont text-[13px] font-semibold tracking-widest text-[#23201c] transition-colors hover:bg-white"
          >
            SELL A HOME
          </a>
          <a
            href="#"
            className="rounded-full border border-white/50 px-8 py-3.5 font-mont text-[13px] font-semibold tracking-widest text-white transition-colors hover:bg-white/10"
          >
            BUY A HOME
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
              <div className="font-serif-display text-4xl font-light lg:text-6xl">
                {s.value}
              </div>
              <div className="mx-auto mt-2 max-w-[200px] font-mont text-xs uppercase tracking-wide text-white/70 lg:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
