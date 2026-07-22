export function CtaBanner() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/texasace/prop-4.jpg)" }}
      />
      <div className="absolute inset-0 bg-[#161311]/60" />
      <div className="relative mx-auto flex min-h-[70vh] max-w-[1600px] flex-col items-center justify-center px-6 py-28 text-center text-white lg:px-10">
        <h2 className="font-serif-display text-[13vw] font-extrabold leading-[0.9] [text-wrap:balance] lg:text-[104px]">
          Your move.
          <br />
          <span className="font-light text-white/75">Top dollar.</span>
        </h2>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#"
            className="rounded-full bg-[#c75912] px-8 py-3.5 font-mont text-[13px] font-semibold tracking-widest text-[#161311] transition-colors hover:bg-[#e0763a]"
          >
            WORK WITH US
          </a>
          <a
            href="#"
            className="rounded-full border border-white/50 px-8 py-3.5 font-mont text-[13px] font-semibold tracking-widest text-white transition-colors hover:bg-white/10"
          >
            CONTACT US
          </a>
        </div>
      </div>
    </section>
  );
}
