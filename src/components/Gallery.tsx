import Image from "next/image";

// asymmetric mosaic on desktop, clean 2-col grid on mobile
const TILES: { img: string; span: string }[] = [
  { img: "/texasace/prop-1.jpg", span: "sm:col-span-2 sm:row-span-2" },
  { img: "/texasace/prop-2.jpg", span: "" },
  { img: "/texasace/media-1.jpg", span: "" },
  { img: "/texasace/prop-3.webp", span: "sm:row-span-2" },
  { img: "/texasace/media-2.jpg", span: "" },
  { img: "/texasace/prop-4.jpg", span: "sm:col-span-2" },
  { img: "/texasace/team-wide.jpg", span: "sm:col-span-2" },
  { img: "/texasace/media-3.jpg", span: "" },
];

export function Gallery() {
  return (
    <section className="bg-[#161311] py-3">
      <div className="grid auto-rows-[42vw] grid-cols-2 gap-2 sm:auto-rows-[180px] sm:grid-cols-4 lg:auto-rows-[220px]">
        {TILES.map((t, i) => (
          <div key={i} className={`group relative overflow-hidden ${t.span}`}>
            <Image
              src={t.img}
              alt=""
              fill
              sizes="(max-width:640px) 50vw, 25vw"
              className="object-cover transition-transform duration-[900ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#161311]/10 transition-colors group-hover:bg-transparent" />
          </div>
        ))}
      </div>
    </section>
  );
}
