import Image from "next/image";

export function About() {
  return (
    <section className="relative overflow-hidden bg-[#f4f3f0] py-24">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <h2 className="font-serif-display text-5xl font-extrabold sm:text-6xl leading-[0.92] text-[#161311] lg:text-8xl">
            We are
            <br />
            <span className="font-light text-[#6b6560]">the Ace Team</span>
          </h2>
          <p className="max-w-sm justify-self-start font-mont text-lg leading-snug text-[#161311] lg:justify-self-end">
            Nine realtors. One team. All of Dallas&ndash;Fort Worth.
          </p>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-2xl">
          <Image
            src="/texasace/team-wide.jpg"
            alt="Texas Ace Team"
            width={1600}
            height={1000}
            className="h-auto w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 flex justify-center pb-10">
            <div className="bg-[#161311]/70 px-10 py-4 backdrop-blur-sm">
              <p className="font-serif-display text-2xl text-white lg:text-3xl">
                &ldquo;Think Texas. Think Texas Ace Team.&rdquo;
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-block rounded-full bg-[#161311] px-9 py-4 font-mont text-[13px] font-semibold tracking-widest text-white transition-colors hover:bg-[#c75912]"
          >
            LEARN MORE ABOUT US
          </a>
        </div>
      </div>
    </section>
  );
}
