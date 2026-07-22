"use client";

import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { useRef } from "react";

const REELS = [
  { img: "/images/products/home-eval.jpg", label: "" },
  { img: "/images/areas/carlsbad.jpg", label: "" },
  { img: "/images/areas/coronado.jpg", label: "OCEANSIDE" },
  { img: "/images/products/sell.jpg", label: "US" },
  { img: "/images/areas/del-mar.jpg", label: "" },
  { img: "/images/areas/solana-beach.jpg", label: "" },
];

export function Social() {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: number) =>
    trackRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });

  return (
    <section className="relative overflow-hidden bg-[#23201c] py-20 text-white">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="font-serif-display text-4xl lg:text-6xl">
              Let&rsquo;s get social
            </h2>
            <p className="mt-3 font-mont text-[#c75912]">@whisselbeergroup</p>
          </div>
          <div className="hidden gap-3 lg:flex">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Previous"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 transition hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Next"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 transition hover:bg-white/10"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="wbg-hide-scrollbar mt-10 flex gap-4 overflow-x-auto pb-2"
        >
          {REELS.map((r, i) => (
            <a
              key={i}
              href="#"
              className="group relative aspect-[9/16] w-[240px] shrink-0 overflow-hidden rounded-xl"
              style={{ backgroundImage: `url(${r.img})`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black/50 backdrop-blur">
                  <Play className="h-5 w-5 fill-white text-white" />
                </span>
              </div>
              {r.label && (
                <span className="absolute bottom-4 left-4 font-serif-display text-xl text-white drop-shadow">
                  {r.label}
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
