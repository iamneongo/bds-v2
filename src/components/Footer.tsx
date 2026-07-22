import Image from "next/image";
import { MapPin } from "lucide-react";

const SOCIALS: { label: string; path: string }[] = [
  { label: "Facebook", path: "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12" },
  { label: "Instagram", path: "M12 2.2c3.2 0 3.6 0 4.9.1 1.2 0 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c0-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2m0 1.6c-3.1 0-3.5 0-4.7.1-1.1 0-1.7.3-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.1.4-.3 1-.4 2.1 0 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c0 1.1.3 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.1 1 .3 2.1.4 1.2 0 1.6.1 4.7.1s3.5 0 4.7-.1c1.1 0 1.7-.3 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.1-.4.3-1 .4-2.1 0-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c0-1.1-.3-1.7-.4-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.1-1-.3-2.1-.4-1.2 0-1.6-.1-4.7-.1m0 2.7a5.3 5.3 0 1 1 0 10.6 5.3 5.3 0 0 1 0-10.6m0 1.6a3.7 3.7 0 1 0 0 7.4 3.7 3.7 0 0 0 0-7.4m5.5-1a1.2 1.2 0 1 1 0 2.5 1.2 1.2 0 0 1 0-2.5" },
  { label: "YouTube", path: "M23 7.5a2.8 2.8 0 0 0-2-2C19.2 5 12 5 12 5s-7.2 0-9 .5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 .5 12 29 29 0 0 0 1 16.5a2.8 2.8 0 0 0 2 2c1.8.5 9 .5 9 .5s7.2 0 9-.5a2.8 2.8 0 0 0 2-2 29 29 0 0 0 .5-4.5 29 29 0 0 0-.5-4.5M9.8 15.3V8.7l6 3.3-6 3.3" },
  { label: "LinkedIn", path: "M20.4 3H3.6A.6.6 0 0 0 3 3.6v16.8a.6.6 0 0 0 .6.6h16.8a.6.6 0 0 0 .6-.6V3.6a.6.6 0 0 0-.6-.6M8.3 18.3H5.5V9.4h2.8v8.9M6.9 8.2a1.6 1.6 0 1 1 0-3.3 1.6 1.6 0 0 1 0 3.3m11.4 10.1h-2.8v-4.3c0-1 0-2.4-1.4-2.4s-1.6 1.1-1.6 2.3v4.4H9.7V9.4h2.7v1.2h.1a3 3 0 0 1 2.6-1.4c2.9 0 3.4 1.9 3.4 4.3v4.8" },
];

const OFFICES = [
  ["15932 Bernardo Center Drive", "San Diego, CA 92127"],
  ["5857 Owens Avenue #300", "Carlsbad, CA 92008"],
  ["3180 University Avenue Ste 600", "San Diego, CA 92104"],
  ["8371 La Mesa Blvd", "La Mesa, CA 91942"],
  ["41877 Enterprise Cir N #200", "Temecula, CA 92590"],
];

export function Footer() {
  return (
    <footer className="bg-[#2a2521] pb-28 pt-20 text-white">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div className="grid items-center gap-10 border-b border-white/10 pb-14 lg:grid-cols-3">
          <div className="text-center lg:text-left">
            <p className="font-serif-display text-2xl text-[#d9b48f]">Phone:</p>
            <a href="tel:6196484700" className="mt-3 inline-block font-mont text-lg text-white/90 hover:text-[#c75912]">
              619-648-4700
            </a>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/logo-white-orange.png"
              alt="Whissel Beer Group"
              width={320}
              height={62}
              className="h-14 w-auto"
            />
          </div>
          <div className="text-center lg:text-right">
            <p className="font-serif-display text-2xl text-[#d9b48f]">Email:</p>
            <a href="mailto:info@thewbgroup.com" className="mt-3 inline-block font-mont text-lg text-white/90 hover:text-[#c75912]">
              info@thewbgroup.com
            </a>
          </div>
        </div>

        <div className="grid gap-8 border-b border-white/10 py-12 sm:grid-cols-3 lg:grid-cols-5">
          {OFFICES.map((o) => (
            <div key={o[0]} className="text-center">
              <MapPin className="mx-auto mb-3 h-5 w-5 text-[#c75912]" />
              <p className="font-mont text-sm text-white/85">{o[0]}</p>
              <p className="font-mont text-sm text-white/60">{o[1]}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-6 pt-10 lg:flex-row lg:justify-between">
          <div className="flex gap-6 font-mont text-xs uppercase tracking-wide text-white/70">
            <a href="#" className="hover:text-white">Sitemap</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Accessibility</a>
          </div>
          <div className="flex gap-5 text-white/80">
            {SOCIALS.map((s) => (
              <a key={s.label} href="#" aria-label={s.label} className="transition-colors hover:text-[#c75912]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
          <p className="font-mont text-xs text-white/60">
            Created with <span className="text-[#c75912]">♥</span> by AgentFire
          </p>
        </div>
      </div>
    </footer>
  );
}
