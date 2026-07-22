import { ArrowUpRight } from "lucide-react";

const AREAS = [
  { name: "Flower Mound", img: "/texasace/prop-2.jpg" },
  { name: "McKinney", img: "/texasace/prop-3.webp" },
  { name: "Frisco", img: "/texasace/prop-1.jpg" },
  { name: "Plano", img: "/texasace/prop-4.jpg" },
  { name: "Rockwall", img: "/texasace/prop-2.jpg" },
  { name: "Rowlett", img: "/texasace/prop-3.webp" },
  { name: "Lucas", img: "/texasace/prop-1.jpg" },
  { name: "Dallas", img: "/texasace/prop-4.jpg" },
];

export function AreaGuides() {
  return (
    <section className="bg-[#f4f3f0] py-24">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6" data-reveal>
          <h2 className="font-serif-display text-5xl font-extrabold sm:text-6xl leading-[0.9] text-[#161311] lg:text-8xl">
            Every corner
            <br />
            <span className="font-light text-[#6b6560]">of DFW.</span>
          </h2>
          <a
            href="#"
            className="rounded-full bg-[#161311] px-8 py-4 font-mont text-[13px] font-semibold tracking-widest text-white transition-transform duration-300 hover:-translate-y-0.5"
          >
            EXPLORE AREAS
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4" data-reveal-group>
          {AREAS.map((a) => (
            <a
              key={a.name}
              href="#"
              className="group relative flex aspect-[3/4] items-end overflow-hidden rounded-xl"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[800ms] group-hover:scale-110"
                style={{ backgroundImage: `url(${a.img})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161311]/85 via-[#161311]/10 to-transparent" />
              <span className="relative flex w-full items-center justify-between p-5 font-serif-display text-xl font-semibold text-white">
                {a.name}
                <ArrowUpRight className="h-5 w-5 shrink-0 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
