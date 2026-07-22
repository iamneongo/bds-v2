export function CtaBanner() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/balboa-park.jpg)" }}
      />
      <div className="absolute inset-0 bg-[#23201c]/55" />
      <div className="relative mx-auto max-w-[1600px] px-6 py-28 text-center text-white lg:px-10 lg:py-36">
        <h2 className="font-serif-display text-5xl leading-[1.08] lg:text-7xl">
          Simplify your next move
          <br />
          <span className="italic">with trusted local experts</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl font-mont text-base leading-relaxed text-white/85">
          Whether you&rsquo;re planning your first move or your next one, our team
          is here to make it simple and successful. Reach out today and experience
          real estate done right.
        </p>
        <div className="mt-9 flex items-center justify-center gap-4">
          <a
            href="#"
            className="rounded-full bg-[#ede5dd] px-8 py-3.5 font-mont text-[13px] font-semibold tracking-widest text-[#23201c] transition-colors hover:bg-white"
          >
            BUY WITH US
          </a>
          <a
            href="#"
            className="rounded-full border border-white/50 px-8 py-3.5 font-mont text-[13px] font-semibold tracking-widest text-white transition-colors hover:bg-white/10"
          >
            SELL WITH US
          </a>
        </div>
      </div>
    </section>
  );
}
