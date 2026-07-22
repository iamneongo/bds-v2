"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const CARDS = [
  { title: "Sell a home", desc: "Maximize your home's value with smart marketing and expert negotiation.", img: "/images/products/sell.jpg" },
  { title: "Buy a home", desc: "Navigate the market with confidence, guided by local expertise and proven strategy.", img: "/images/products/buy.jpg" },
  { title: "Home evaluation", desc: "Discover your home's current value with our quick, data-backed evaluation tool.", img: "/images/products/home-eval.jpg" },
  { title: "Cancellation guarantee", desc: "Not satisfied? Cancel your listing agreement anytime, no questions asked.", img: "/images/products/guarantee.jpg" },
];

export function Products() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 480, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1c1a17] via-[#241f1a] to-[#3d2412] py-24 text-white">
      <div className="mx-auto max-w-[1600px] px-6 text-center lg:px-10">
        <h2 className="font-serif-display text-4xl leading-tight lg:text-[56px]">
          Products built to deliver results
        </h2>
        <p className="mt-3 font-mont text-base text-white/70">
          Your Goals. Our Expertise.
        </p>
      </div>

      <div className="relative mt-14">
        <button
          onClick={() => scrollBy(-1)}
          aria-label="Previous"
          className="absolute left-4 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-[#ede5dd] text-[#c75912] shadow-lg transition hover:scale-105"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => scrollBy(1)}
          aria-label="Next"
          className="absolute right-4 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-[#ede5dd] text-[#c75912] shadow-lg transition hover:scale-105"
        >
          <ArrowRight className="h-5 w-5" />
        </button>

        <div
          ref={trackRef}
          className="wbg-hide-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-[8vw] pb-4"
        >
          {CARDS.map((c) => (
            <article
              key={c.title}
              className="group relative aspect-[3/4] w-[78vw] max-w-[460px] shrink-0 snap-center overflow-hidden rounded-2xl sm:w-[460px]"
            >
              <Image
                src={c.img}
                alt={c.title}
                fill
                sizes="460px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <h3 className="font-serif-display text-4xl">{c.title}</h3>
                <p className="mt-3 max-w-sm font-mont text-sm leading-relaxed text-white/80">
                  {c.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
