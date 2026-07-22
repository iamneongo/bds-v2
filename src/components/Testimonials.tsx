"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const REVIEWS = [
  {
    quote:
      "They helped us get 8 offers on our home within 3 days and all of them were above the asking price. If you don't want any hassles, if you want to get top value for your money and if you just want a simple streamline process...definitely choose Whissel Beer Group",
    name: "The Martinez Family",
    result: "Sold in 3 days with 8 offers above asking",
  },
  {
    quote:
      "We had the confidence in our agent to leave everything in their hands and we sold for over the asking price. It was just really smooth... we have sold properties in the past and this has been the easiest and most efficient one by far!",
    name: "The Gonzaludo Family",
    result: "Sold in 6 days for 108% of their asking price",
  },
  {
    quote:
      "Our home sold in record time! We couldn't have done it without the Whissel Beer Group. They not only worked very hard for us but they were also nice and courteous and extremely communicative. Thank you so much for helping us sell our home and start a new chapter in our lives!",
    name: "The Reyes Family",
    result: "Sold in record time",
  },
];

export function Testimonials() {
  const [i, setI] = useState(1);
  const go = (dir: number) => setI((p) => (p + dir + REVIEWS.length) % REVIEWS.length);
  const r = REVIEWS[i];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1c1a17] to-[#23201c] py-24 text-white">
      <div className="mx-auto grid max-w-[1600px] items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <h2 className="font-serif-display text-4xl leading-tight lg:text-[56px]">
          Why people choose
          <br />
          <span className="italic">Whissel Beer Group</span>
        </h2>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 lg:p-10">
          <div className="mb-6 flex gap-2 text-[#c75912]">
            <span className="text-2xl">✳</span>
            <span className="text-2xl">✦</span>
          </div>
          <blockquote className="font-serif-display text-xl italic leading-relaxed text-white/95 lg:text-[26px] lg:leading-[1.5]">
            &ldquo;{r.quote}&rdquo;
          </blockquote>
          <div className="mt-8">
            <p className="font-mont font-semibold text-white">{r.name}</p>
            <p className="mt-1 font-mont text-white/60">{r.result}</p>
          </div>
          <div className="mt-8 flex gap-3">
            <button
              onClick={() => go(-1)}
              aria-label="Previous review"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 transition hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next review"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 transition hover:bg-white/10"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
