import Image from "next/image";

export function About() {
  return (
    <section className="relative overflow-hidden bg-[#ede5dd] py-24">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <h2 className="font-serif-display text-5xl leading-[1.05] text-[#23201c] lg:text-7xl">
            We are
            <br />
            <span className="italic">Whissel Beer Group</span>
          </h2>
          <p className="max-w-md justify-self-end font-mont text-[15px] leading-relaxed text-[#5a534b] lg:pt-6">
            We&rsquo;re a group of trusted professionals dedicated to making your
            real estate experience simple. By combining insight, innovation and
            genuine care, we deliver results that make every move feel effortless.
          </p>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-2xl">
          <Image
            src="/images/team-cover.jpg"
            alt="Whissel Beer Group team"
            width={1600}
            height={800}
            className="h-auto w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 flex justify-center pb-10">
            <div className="bg-[#23201c]/70 px-10 py-4 backdrop-blur-sm">
              <p className="font-serif-display text-2xl italic text-white lg:text-3xl">
                &ldquo;Making real estate easy for you&rdquo;
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-block rounded-full bg-[#23201c] px-9 py-4 font-mont text-[13px] font-semibold tracking-widest text-white transition-colors hover:bg-[#c75912]"
          >
            LEARN MORE ABOUT US
          </a>
        </div>
      </div>
    </section>
  );
}
