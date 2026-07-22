import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const CARDS = [
  { n: "01", title: "Buying", desc: "Find the one that fits.", img: "/texasace/prop-1.jpg" },
  { n: "02", title: "Selling", desc: "Priced right, sold fast.", img: "/texasace/prop-2.jpg" },
  { n: "03", title: "Commercial", desc: "Grow your portfolio.", img: "/texasace/prop-3.webp" },
];

export function Products() {
  return (
    <section className="bg-[#100d0b] py-24 text-white">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <h2 className="font-serif-display text-5xl font-extrabold sm:text-6xl leading-[0.9] lg:text-8xl" data-reveal>
          What we do
        </h2>

        {/* Expanding image panels */}
        <div className="mt-14 flex flex-col gap-3 lg:h-[70vh] lg:flex-row" data-reveal-group>
          {CARDS.map((c) => (
            <a
              key={c.title}
              href="#"
              className="group relative flex min-h-[320px] flex-1 overflow-hidden rounded-2xl transition-[flex-grow] duration-700 ease-out lg:min-h-0 lg:hover:grow-[2.6]"
            >
              <Image
                src={c.img}
                alt={c.title}
                fill
                sizes="(max-width:1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />

              <div className="relative flex w-full flex-col justify-between p-7">
                <span className="font-mont text-sm font-semibold tracking-widest text-white/60">
                  {c.n}
                </span>

                <div>
                  <div className="flex items-end justify-between gap-4">
                    <h3 className="font-serif-display text-4xl font-extrabold leading-none lg:text-6xl">
                      {c.title}
                    </h3>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#c75912] transition-transform duration-300 group-hover:-translate-y-1">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                  <p className="mt-3 max-w-xs font-mont text-base text-white/85 opacity-0 transition-opacity duration-500 lg:group-hover:opacity-100">
                    {c.desc}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
