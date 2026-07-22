import { Star } from "lucide-react";

// Reviews marquee (formerly press logos — screenshots were unreadable).
const REVIEWS = [
  { quote: "Made buying our first home in Frisco effortless.", name: "The Nguyen Family" },
  { quote: "Priced right — sold in one weekend, above asking.", name: "The Patel Family" },
  { quote: "From photos to closing, handled with real care.", name: "The Carter Family" },
  { quote: "Honest, transparent, and always available.", name: "DFW Homeowner" },
  { quote: "They treated our move like it was their own.", name: "Plano Seller" },
  { quote: "Top dollar, zero stress. Couldn't ask for more.", name: "McKinney Client" },
];

function Card({ quote, name }: { quote: string; name: string }) {
  return (
    <figure className="flex w-[340px] shrink-0 flex-col justify-between rounded-2xl border border-[#161311]/8 bg-white p-6 shadow-[0_10px_30px_-18px_rgba(22,19,17,0.4)]">
      <div className="flex gap-0.5 text-[#c75912]">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <blockquote className="mt-4 font-serif-display text-lg font-semibold leading-snug text-[#161311]">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-4 font-mont text-sm text-[#6b6560]">{name}</figcaption>
    </figure>
  );
}

export function FeaturedOn() {
  const row = [...REVIEWS, ...REVIEWS];
  return (
    <section className="overflow-hidden bg-[#f4f3f0] py-20">
      <div className="mx-auto mb-10 flex max-w-[1600px] items-center justify-between gap-6 px-6 lg:px-10" data-reveal>
        <h2 className="font-serif-display text-4xl font-extrabold leading-[0.95] text-[#161311] lg:text-6xl">
          Loved across
          <br />
          <span className="font-light text-[#6b6560]">the metroplex.</span>
        </h2>
        <div className="hidden shrink-0 text-right sm:block">
          <div className="font-serif-display text-5xl font-extrabold text-[#161311]">5.0</div>
          <div className="mt-1 font-mont text-xs uppercase tracking-[0.15em] text-[#6b6560]">
            500+ reviews · Google &amp; Zillow
          </div>
        </div>
      </div>

      <div className="group relative">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#f4f3f0] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#f4f3f0] to-transparent" />
        <div className="flex w-max gap-5 wbg-marquee px-6 group-hover:[animation-play-state:paused]">
          {row.map((r, i) => (
            <Card key={i} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}
