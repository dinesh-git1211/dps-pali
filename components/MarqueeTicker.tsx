import React from "react";

interface MarqueeTickerProps {
  reverse?: boolean;
}

export default function MarqueeTicker({ reverse = false }: MarqueeTickerProps) {
  const content =
    "DELHI PUBLIC SCHOOL • SERVICE BEFORE SELF • HOLISTIC EDUCATION • LEADERSHIP • 100% BOARD RESULTS • ACADEMIC RIGOR • FUTURE-READY MINDS • ";
  
  // We duplicate the text twice in the same line so it loops seamlessly.
  // The animation moves from 0% to -50% translateX.
  return (
    <div className="relative flex w-full overflow-hidden bg-editorial-cream py-6 border-y border-emerald-900/10">
      <div
        className={`flex whitespace-nowrap pause-on-hover ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {/* We render the string twice inside the flex container */}
        <span className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter shrink-0 px-4 flex items-center">
          <span className="text-primary">{content}</span>
          <span className="text-stroke-primary opacity-80 mx-4">{content}</span>
        </span>
        <span className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter shrink-0 px-4 flex items-center" aria-hidden="true">
          <span className="text-primary">{content}</span>
          <span className="text-stroke-primary opacity-80 mx-4">{content}</span>
        </span>
      </div>
    </div>
  );
}
