import React from "react";

export default function WhyUs({ t }) {
  return (
    <section
      className="scroll-mt-20 w-full px-margin-mobile md:px-margin-tablet lg:px-margin py-space-xl lg:py-24 bg-[#07080b]/50 border-t border-white/5"
      id="why-us"
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

        {/* 3 Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {t.benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-space-lg lg:p-space-xl bg-[#16181e]/90 border border-white/10 backdrop-blur-md shadow-xl flex flex-col justify-between hover:border-[#ccff00]/40 transition-colors"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#ccff00]/10 border border-[#ccff00]/20 text-[#ccff00] flex items-center justify-center mb-space-md">
                  <span className="material-symbols-outlined text-[26px]" aria-hidden="true">
                    {benefit.icon}
                  </span>
                </div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-[#ccff00] mb-1 block font-semibold">
                  {benefit.tag}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-white mb-space-sm">
                  {benefit.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {benefit.description}
                </p>
              </div>
              <div className="mt-space-lg pt-space-md bg-[#0d0e13]/70 border border-white/5 px-space-md py-space-sm rounded-xl flex items-center gap-space-xs text-[#ccff00] font-label-sm text-label-sm font-medium">
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                  {benefit.footerIcon}
                </span>
                <span>{benefit.footerText}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
