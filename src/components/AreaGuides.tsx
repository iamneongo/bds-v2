"use client";

import { useState, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

const AREAS = [
  { name: "North County Coastal", img: "/images/areas/carlsbad.jpg" },
  { name: "North County Inland", img: "/images/areas/san-marcos.jpg" },
  { name: "North Central", img: "/images/areas/escondido.jpg" },
  { name: "East County", img: "/images/areas/alpine.jpg" },
  { name: "Central", img: "/images/areas/san-diego-downtown.jpg" },
  { name: "Coastal Metro / Uptown", img: "/images/areas/solana-beach.jpg" },
  { name: "South Bay", img: "/images/areas/coronado.jpg" },
  { name: "Riverside County", img: "/images/areas/riverside.jpg" },
  { name: "Explore more", img: "/images/areas/del-mar.jpg" },
];

const REGIONS = [
  { label: "North County\nCoastal", x: "8%", y: "42%" },
  { label: "North County\nInland", x: "40%", y: "20%" },
  { label: "North\nCentral", x: "40%", y: "48%" },
  { label: "East\nCounty", x: "74%", y: "30%" },
  { label: "Central", x: "45%", y: "68%" },
  { label: "South\nBay", x: "52%", y: "88%" },
];

/** Shown only if the real map SVG fails to load. */
function MapFallback() {
  return (
    <div className="relative aspect-[4/5] w-full">
      <div className="absolute inset-0 [clip-path:polygon(30%_0,70%_2%,72%_10%,88%_18%,100%_40%,92%_55%,80%_58%,78%_72%,60%_78%,58%_96%,44%_100%,40%_84%,26%_74%,10%_58%,4%_36%,18%_26%,22%_10%)] bg-[#3a352f]" />
      {REGIONS.map((r) => (
        <span
          key={r.label}
          className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-pre text-center font-serif-display text-lg leading-tight text-white/90"
          style={{ left: r.x, top: r.y }}
        >
          {r.label}
        </span>
      ))}
    </div>
  );
}

export function AreaGuides({ map }: { map?: ReactNode }) {
  const [tab, setTab] = useState<"exclusive" | "match">("exclusive");

  return (
    <section className="relative overflow-hidden bg-[#ede5dd] pb-28">
      {/* toggle bar */}
      <div className="mx-auto flex max-w-[1600px] flex-col items-center gap-6 px-6 py-16 lg:flex-row lg:justify-between lg:px-10">
        <h3 className="font-serif-display text-2xl italic text-[#23201c] lg:text-3xl">
          See what&rsquo;s on the market
        </h3>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setTab("exclusive")}
            className={`rounded-full px-7 py-3.5 font-mont text-[13px] font-semibold tracking-wide transition-colors ${
              tab === "exclusive"
                ? "bg-[#23201c] text-white"
                : "border border-[#23201c]/25 text-[#23201c] hover:border-[#23201c]/60"
            }`}
          >
            EXCLUSIVE PROPERTIES
          </button>
          <button
            onClick={() => setTab("match")}
            className={`rounded-full px-7 py-3.5 font-mont text-[13px] font-semibold tracking-wide transition-colors ${
              tab === "match"
                ? "bg-[#23201c] text-white"
                : "border border-[#23201c]/25 text-[#23201c] hover:border-[#23201c]/60"
            }`}
          >
            HOME MATCH&trade;
          </button>
        </div>
      </div>

      {/* guide grid + map */}
      <div className="mx-auto grid max-w-[1600px] items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="font-mont text-sm uppercase tracking-[0.2em] text-[#c75912]">
            Your guide to living
          </p>
          <h2 className="mt-3 font-serif-display text-5xl italic leading-[1.05] text-[#23201c] lg:text-6xl">
            In Sunny San Diego
          </h2>
          <p className="mt-6 max-w-lg font-mont text-[15px] leading-relaxed text-[#5a534b]">
            Local expertise, neighborhood insight, and real homes waiting for you.
            Learn more about the cities, neighborhoods, and communities we serve
            throughout San Diego County, each with its own personality, charm, and
            opportunities.
          </p>

          <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {AREAS.map((a) => (
              <a
                key={a.name}
                href="#"
                className="group relative flex h-16 items-center overflow-hidden rounded-lg"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${a.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#23201c]/85 to-[#23201c]/30" />
                <span className="relative flex w-full items-center justify-between px-4 font-mont text-[13px] font-medium leading-tight text-white">
                  {a.name}
                  <ArrowUpRight className="h-4 w-4 shrink-0 opacity-80" />
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Real San Diego interactive map (inline SVG) */}
        <div className="relative hidden w-full lg:block">
          {map ?? <MapFallback />}
        </div>
      </div>
    </section>
  );
}
