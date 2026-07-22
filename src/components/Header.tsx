"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";

const NAV = [
  { label: "ABOUT US", items: ["Our Story", "Our Team", "In the Press"] },
  { label: "SERVICES", items: ["Buying", "Selling", "Commercial"] },
  { label: "CURRENT LISTINGS", items: ["Featured Properties", "New Listings", "Sold"] },
  { label: "OUR UPDATES", items: ["Media Projects", "Blog", "Market News"] },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#161311]/85 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 lg:px-10">
        <a href="#" className="flex items-center">
          <Image
            src="/texasace/logo.png"
            alt="Texas Ace Team"
            width={300}
            height={90}
            className="h-10 w-auto brightness-0 invert lg:h-12"
            priority
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <div key={n.label} className="group relative">
              <button className="flex items-center gap-1 font-mont text-[15px] font-medium tracking-wide text-white/90 transition-colors hover:text-[#c75912]">
                {n.label}
                <ChevronDown className="h-3.5 w-3.5 opacity-70" />
              </button>
              <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-52 -translate-x-1/2 translate-y-1 rounded-xl bg-[#161311] p-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {n.items.map((it) => (
                  <a
                    key={it}
                    href="#"
                    className="block rounded-lg px-4 py-2.5 font-mont text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-[#c75912]"
                  >
                    {it}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden rounded-full bg-[#f4f3f0] px-6 py-2.5 font-mont text-[13px] font-semibold tracking-wide text-[#161311] transition-colors hover:bg-white sm:block"
          >
            CONTACT US
          </a>
          <button className="flex items-center gap-2 rounded-full border border-white/40 px-5 py-2.5 font-mont text-[13px] font-semibold tracking-wide text-white transition-colors hover:bg-white/10">
            <Menu className="h-4 w-4" />
            MENU
          </button>
        </div>
      </div>
    </header>
  );
}
