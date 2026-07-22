"use client";

import { MapPinned, Compass, ListFilter, Search } from "lucide-react";

const OPTS = [
  { icon: Compass, top: "SEARCH BY", bottom: "COUNTY" },
  { icon: ListFilter, top: "SEARCH BY", bottom: "POPULAR SEARCHES" },
  { icon: MapPinned, top: "SEARCH", bottom: "MAP SEARCH" },
];

export function SearchBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 bg-[#0d0b09] text-white">
      <div className="mx-auto flex max-w-[1600px] flex-col items-stretch gap-3 px-4 py-3 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-6 overflow-x-auto lg:gap-8">
          {OPTS.map((o) => (
            <button
              key={o.bottom}
              className="flex shrink-0 items-center gap-3 border-r border-white/10 pr-6 text-left last:border-0"
            >
              <o.icon className="h-5 w-5 text-white/80" />
              <span className="leading-tight">
                <span className="block font-mont text-[10px] uppercase tracking-wide text-white/50">
                  {o.top}
                </span>
                <span className="block font-mont text-xs font-semibold uppercase tracking-wide">
                  {o.bottom} &rsaquo;
                </span>
              </span>
            </button>
          ))}
        </div>

        <div className="flex w-full items-center overflow-hidden rounded-full bg-[#17130f] lg:max-w-xl">
          <input
            type="text"
            placeholder="City, ZIP, Neighborhood, School"
            className="w-full bg-transparent px-6 py-3 font-mont text-sm text-white placeholder:text-white/50 focus:outline-none"
          />
          <button className="flex items-center gap-2 bg-[#f4f3f0] px-6 py-3 font-mont text-xs font-semibold uppercase tracking-wide text-[#161311] transition-colors hover:bg-white">
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline">Search</span>
          </button>
        </div>
      </div>
    </div>
  );
}
