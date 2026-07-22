import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const LISTINGS = [
  { addr: "3129 Emory Dr", city: "Flower Mound", beds: 5, baths: 4, sqft: "3,190", img: "/texasace/prop-2.jpg" },
  { addr: "1600 Enchanted Way", city: "Lucas", beds: 5, baths: 4.5, sqft: "4,683", img: "/texasace/prop-1.jpg" },
  { addr: "1416 Arezzo Ln", city: "Rockwall", beds: 6, baths: 5, sqft: "4,989", img: "/texasace/prop-3.webp" },
  { addr: "1121 Marc Pl", city: "Rowlett", beds: 3, baths: 3.5, sqft: "2,273", img: "/texasace/prop-4.jpg" },
  { addr: "3201 Lapis Ln", city: "McKinney", beds: 4, baths: 4.5, sqft: "3,359", img: "/texasace/prop-2.jpg" },
  { addr: "6910 Midcrest Dr", city: "Dallas", beds: 5, baths: 4.5, sqft: "3,531", img: "/texasace/prop-1.jpg" },
];

export function FeaturedListings() {
  return (
    <section className="bg-[#f4f3f0] py-24">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6" data-reveal>
          <h2 className="font-serif-display text-5xl font-extrabold sm:text-6xl leading-[0.9] text-[#161311] lg:text-8xl">
            Featured
            <br />
            <span className="font-light text-[#6b6560]">properties</span>
          </h2>
          <a
            href="#"
            className="rounded-full border border-[#161311]/20 px-8 py-4 font-mont text-[13px] font-semibold tracking-widest text-[#161311] transition-colors hover:bg-[#161311] hover:text-white"
          >
            VIEW ALL
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-reveal-group>
          {LISTINGS.map((l) => (
            <a
              key={l.addr}
              href="#"
              className="group relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-3xl p-6 text-white"
            >
              <Image
                src={l.img}
                alt={l.addr}
                fill
                sizes="(max-width:1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/25" />

              {/* top row */}
              <div className="relative flex items-start justify-between">
                <span className="rounded-full bg-[#c75912] px-3.5 py-1.5 font-mont text-[11px] font-semibold uppercase tracking-widest">
                  For Sale
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 backdrop-blur-md transition-all duration-300 group-hover:bg-[#c75912]">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>

              {/* bottom info */}
              <div className="relative">
                <p className="font-mont text-xs uppercase tracking-[0.2em] text-white/70">
                  {l.city}, TX
                </p>
                <h3 className="mt-1 font-serif-display text-2xl font-bold leading-tight">
                  {l.addr}
                </h3>
                <div className="mt-4 flex items-center gap-2 font-mont text-[13px] text-white/85">
                  <span>{l.beds} bd</span>
                  <span className="h-1 w-1 rounded-full bg-white/40" />
                  <span>{l.baths} ba</span>
                  <span className="h-1 w-1 rounded-full bg-white/40" />
                  <span>{l.sqft} sqft</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
