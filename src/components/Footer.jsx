import React from "react";
import { siteConfig } from "../config/siteConfig";

export default function Footer({ t, nav, onOpenLegal }) {
  return (
    <footer className="w-full bg-[#07080b] border-t border-white/5 py-space-xl">
      <div className="w-full px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter mb-space-xl">
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <img
                alt="Yurito Digital Logo"
                className="w-9 h-9 rounded-lg object-contain border border-[#ccff00]/30 shadow-[0_0_12px_rgba(204,255,0,0.25)]"
                src="/assets/logo-aida.png"
                width="36"
                height="36"
              />
              <span className="font-headline-sm text-headline-sm tracking-tight text-white">
                {siteConfig.brandName}
              </span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              {t.tagline}
            </p>
            <div className="flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-[#16181e] border border-white/10 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#ccff00] shadow-[0_0_6px_#ccff00]"></span>
              <span className="font-label-sm text-label-sm uppercase text-[#ccff00] tracking-wider font-semibold">
                {t.badge}
              </span>
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col gap-space-sm">
            <span className="font-label-lg text-label-lg uppercase tracking-wider text-white">
              {t.quickLinks}
            </span>
            <nav aria-label="Footer navigation" className="flex flex-col gap-space-xs">
              <a
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-[#ccff00] transition-colors w-fit"
                href="#hero"
              >
                {nav.hero}
              </a>
              <a
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-[#ccff00] transition-colors w-fit"
                href="#services"
              >
                {nav.services}
              </a>
              <a
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-[#ccff00] transition-colors w-fit"
                href="#portfolio"
              >
                {nav.portfolio}
              </a>
              <a
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-[#ccff00] transition-colors w-fit"
                href="#process"
              >
                {nav.process}
              </a>
              <a
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-[#ccff00] transition-colors w-fit"
                href="#why-us"
              >
                {nav.whyUs}
              </a>
              <a
                className="font-body-sm text-body-sm text-on-surface-variant hover:text-[#ccff00] transition-colors w-fit"
                href="#contact"
              >
                {nav.contact}
              </a>
            </nav>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-space-sm">
            <span className="font-label-lg text-label-lg uppercase tracking-wider text-white">
              {t.connectSocial}
            </span>
            <div className="flex flex-col gap-space-xs font-body-sm text-body-sm">
              {siteConfig.socialLinks.map((social) => (
                <a
                  key={social.id}
                  className="flex items-center gap-space-xs text-on-surface-variant hover:text-[#ccff00] transition-colors w-fit"
                  href={social.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span
                    className="material-symbols-outlined text-[16px] text-[#ccff00]"
                    aria-hidden="true"
                  >
                    {social.icon}
                  </span>
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-md border-t border-white/5">
          <p className="font-body-sm text-body-sm text-on-surface-variant text-center sm:text-left">
            {t.copyright}
          </p>
          <div className="flex items-center gap-space-md font-label-sm text-label-sm text-on-surface-variant">
            <button
              type="button"
              onClick={() => onOpenLegal("privacy")}
              className="hover:text-[#ccff00] transition-colors focus:outline-none focus:underline"
            >
              {t.privacy}
            </button>
            <button
              type="button"
              onClick={() => onOpenLegal("terms")}
              className="hover:text-[#ccff00] transition-colors focus:outline-none focus:underline"
            >
              {t.terms}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
