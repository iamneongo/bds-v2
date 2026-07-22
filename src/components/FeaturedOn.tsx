import Image from "next/image";

const LOGOS = [
  { src: "/images/news/10news.png", alt: "10 News San Diego", w: 141 },
  { src: "/images/news/fox5.jpg", alt: "Fox 5 San Diego", w: 70 },
  { src: "/images/news/cbs.png", alt: "CBS News", w: 120 },
  { src: "/images/news/union-tribune.png", alt: "The San Diego Union-Tribune", w: 200 },
  { src: "/images/news/7sd.png", alt: "7 San Diego", w: 60 },
  { src: "/images/news/kn.png", alt: "KUSI News", w: 120 },
];

export function FeaturedOn() {
  const row = [...LOGOS, ...LOGOS];
  return (
    <section className="bg-[#ede5dd] py-14">
      <div className="wbg-hide-scrollbar overflow-hidden">
        <div className="flex w-max wbg-marquee items-center gap-24 px-12">
          {row.map((l, i) => (
            <div key={i} className="flex h-16 shrink-0 items-center">
              <Image
                src={l.src}
                alt={l.alt}
                width={l.w}
                height={60}
                className="h-14 w-auto object-contain opacity-90 grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
