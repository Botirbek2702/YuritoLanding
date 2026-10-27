import React from "react";

export default function Process({ t }) {
  return (
    <section
      className="scroll-mt-20 w-full px-margin-mobile md:px-margin-tablet lg:px-margin py-space-xl lg:py-24 relative"
      id="process"
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

        {/* 4 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter relative">
          {t.steps.map((step) => (
            <div
              key={step.num}
              className="rounded-2xl p-space-lg bg-[#16181e]/80 border border-white/10 backdrop-blur-md shadow-xl flex flex-col justify-between group hover:border-[#ccff00]/50 hover:bg-surface-container-high/80 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <span className="font-display-xl-mobile text-display-xl-mobile text-[#ccff00] font-extrabold opacity-90 drop-shadow-[0_0_10px_rgba(204,255,0,0.3)]">
                    {step.num}
                  </span>
                  <span className="w-9 h-9 rounded-full bg-[#ccff00]/15 border border-[#ccff00]/30 text-[#ccff00] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                      {step.icon}
                    </span>
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-white mb-space-xs">
                  {step.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {step.description}
                </p>
              </div>
              <div className="w-full h-1 bg-gradient-to-r from-[#ccff00] to-transparent rounded-full mt-space-md opacity-40 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
