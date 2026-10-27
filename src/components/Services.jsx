import React from "react";

export default function Services({ t }) {
  return (
    <section
      className="scroll-mt-20 w-full px-margin-mobile md:px-margin-tablet lg:px-margin py-space-xl lg:py-24 relative"
      id="services"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <span className="px-space-md py-1 rounded-full bg-[#ccff00]/10 text-[#ccff00] border border-[#ccff00]/25 font-label-md text-label-md uppercase tracking-wider mb-space-sm font-semibold">
            {t.tag}
          </span>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white mb-space-xs">
            {t.title}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            {t.subtitle}
          </p>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {t.cards.map((card, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl p-space-md sm:p-space-lg bg-[#16181e]/90 border border-white/10 backdrop-blur-md shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#ccff00]/50 hover:shadow-[0_10px_35px_-5px_rgba(204,255,0,0.2)] flex flex-col justify-between"
            >
              <div className="flex flex-col">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#ccff00]/10 text-[#ccff00] border border-[#ccff00]/20 flex items-center justify-center mb-space-md sm:mb-space-lg shadow-inner shadow-[#ccff00]/20 group-hover:scale-110 group-hover:bg-[#ccff00] group-hover:text-black transition-all">
                  <span className="material-symbols-outlined text-[26px] sm:text-[28px]" aria-hidden="true">
                    {card.icon}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-white mb-space-xs sm:mb-space-sm">
                  {card.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-space-md sm:mb-space-lg">
                  {card.description}
                </p>
              </div>

              <div className="space-y-space-xs bg-[#0d0e13]/70 border border-white/5 p-space-md rounded-xl">
                {card.features.map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    className="flex items-start gap-space-xs text-on-surface font-body-sm text-body-sm"
                  >
                    <span
                      className="material-symbols-outlined text-[#ccff00] text-[16px] mt-0.5 shrink-0"
                      aria-hidden="true"
                    >
                      check_circle
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
