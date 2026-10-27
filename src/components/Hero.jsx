import React from "react";
import { siteConfig } from "../config/siteConfig";

export default function Hero({ t }) {
  return (
    <section
      className="scroll-mt-20 relative w-full overflow-hidden px-margin-mobile md:px-margin-tablet lg:px-margin pt-space-lg pb-space-xl lg:pb-32 flex flex-col items-center text-center"
      id="hero"
    >
      {/* Ambient Backdrop Lighting */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[350px] sm:w-[900px] sm:h-[450px] rounded-full bg-[#ccff00]/10 blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] rounded-full bg-emerald-500/10 blur-[130px] pointer-events-none -z-10"></div>

      {/* Status Pill Badge */}
      <div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-[#16181e] border border-[#ccff00]/30 backdrop-blur-md shadow-lg shadow-black/40 mb-space-lg hover:scale-105 transition-transform duration-300">
        <span className="text-[#ccff00] text-[16px] animate-pulse" aria-hidden="true">
          ⚡
        </span>
        <span className="font-label-md text-label-md text-on-surface tracking-wide">
          {t.badgeLeft} <span className="text-[#ccff00] mx-1">•</span> {t.badgeRight}
        </span>
      </div>

      {/* Main Headline with Gradient Accent */}
      <h1 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl text-white max-w-5xl tracking-tight leading-none mb-space-md">
        {t.titleStart}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] via-[#bbf436] to-emerald-400">
          {t.titleAccent}
        </span>
      </h1>

      {/* Subtitle */}
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mb-space-xl">
        {t.subtitle}
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center gap-space-md w-full sm:w-auto mb-space-xl">
        <a
          className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-xl py-3.5 rounded-full bg-[#16181e] text-white border border-white/10 hover:border-[#ccff00]/50 hover:bg-surface-container-high transition-all duration-300 font-label-lg text-label-lg shadow-md group"
          href="#portfolio"
        >
          <span>{t.seeWork}</span>
          <span
            className="material-symbols-outlined text-[18px] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform group-hover:text-[#ccff00]"
            aria-hidden="true"
          >
            south_east
          </span>
        </a>
        <a
          className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-xl py-3.5 rounded-full bg-[#ccff00] text-black font-bold font-label-lg text-label-lg shadow-[0_0_24px_rgba(204,255,0,0.35)] hover:bg-[#bbf436] hover:shadow-[0_0_35px_rgba(204,255,0,0.55)] hover:scale-[1.02] transition-all duration-300"
          href={siteConfig.telegram.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
            send
          </span>
          <span>{t.contactTelegram}</span>
        </a>
      </div>

      {/* Social Proof Bar */}
      <div className="w-full max-w-5xl p-space-md rounded-2xl bg-[#16181e]/80 border border-white/10 backdrop-blur-xl shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-space-md text-left">
        {t.stats.map((stat, idx) => (
          <div
            key={idx}
            className="flex items-center gap-space-sm p-space-sm rounded-xl bg-[#0d0e13]/70 border border-white/5"
          >
            <div className="w-10 h-10 rounded-lg bg-[#ccff00]/10 border border-[#ccff00]/20 text-[#ccff00] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                {stat.icon}
              </span>
            </div>
            <div className="min-w-0">
              <div className="font-label-lg text-label-lg text-white font-bold">
                {stat.value}
              </div>
              <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
