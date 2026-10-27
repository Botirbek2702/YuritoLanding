import React, { useEffect, useRef, useState } from "react";
import { siteConfig } from "../config/siteConfig";
import { SUPPORTED_LANGS } from "../i18n/translations";

const NAV_ITEMS = [
  { id: "hero", key: "hero" },
  { id: "services", key: "services" },
  { id: "portfolio", key: "portfolio" },
  { id: "process", key: "process" },
  { id: "why-us", key: "whyUs" },
  { id: "contact", key: "contact" },
];

export default function Header({ lang, setLang, t }) {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleBtnRef = useRef(null);
  const firstMobileLinkRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const updateActiveSection = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPos = window.scrollY + 120;
      let current = "hero";

      sections.forEach((sec) => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          current = sec.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("hashchange", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    if (firstMobileLinkRef.current) {
      firstMobileLinkRef.current.focus();
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setMobileMenuOpen(false);
        if (toggleBtnRef.current) {
          toggleBtnRef.current.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const handleMobileNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#090a0f]/85 backdrop-blur-md border-b border-white/5 shadow-[0_1px_12px_rgba(0,0,0,0.6)]">
      <div className="h-20 w-full px-margin-mobile md:px-margin-tablet lg:px-margin flex items-center justify-between gap-space-sm sm:gap-space-md">
        <div className="flex items-center gap-space-md min-w-0">
          <a className="flex items-center gap-space-sm group min-w-0" href="#hero">
            <img
              alt="Yurito Digital Logo"
              className="w-9 h-9 rounded-lg object-contain border border-[#ccff00]/30 shadow-[0_0_12px_rgba(204,255,0,0.25)] shrink-0"
              src="/assets/logo-aida.png"
              width="36"
              height="36"
            />
            <span className="font-headline-sm text-base sm:text-headline-sm tracking-tight text-white group-hover:text-[#ccff00] transition-colors truncate">
              {siteConfig.brandName}
            </span>
          </a>
          <div className="hidden xl:flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-[#16181e] border border-[#ccff00]/25">
            <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse shadow-[0_0_8px_#ccff00]"></span>
            <span className="font-label-sm text-label-sm uppercase text-[#ccff00] tracking-wider font-semibold">
              {t.available}
            </span>
          </div>
        </div>

        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-space-xs p-1 rounded-full bg-[#16181e] border border-white/5"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                aria-current={isActive ? "page" : undefined}
                data-path={item.id}
                href={`#${item.id}`}
                className={
                  isActive
                    ? "px-space-md py-1.5 transition-all bg-[#ccff00] text-black font-bold rounded-full shadow-[0_0_15px_rgba(204,255,0,0.3)] font-label-md text-label-md"
                    : "px-space-md py-1.5 rounded-full font-label-md text-label-md text-on-surface-variant hover:text-white hover:bg-surface-container-high transition-colors"
                }
              >
                {t.nav[item.key]}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-space-xs sm:gap-space-md shrink-0">
          <div
            role="group"
            aria-label="Language switcher"
            className="flex items-center p-0.5 rounded-full bg-[#16181e] border border-white/5"
          >
            {SUPPORTED_LANGS.map((code) => {
              const isSelected = lang === code;
              return (
                <button
                  key={code}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setLang(code)}
                  className={
                    isSelected
                      ? "px-2 sm:px-2.5 py-1 rounded-full font-label-sm text-label-sm uppercase bg-[#ccff00] text-black font-bold transition-all shadow-[0_0_10px_rgba(204,255,0,0.3)]"
                      : "px-2 sm:px-2.5 py-1 rounded-full font-label-sm text-label-sm uppercase text-on-surface-variant hover:text-white transition-colors"
                  }
                >
                  {code}
                </button>
              );
            })}
          </div>

          <a
            className="hidden sm:inline-flex items-center gap-space-xs px-space-md py-2 rounded-full bg-[#ccff00] text-black font-label-md text-label-md font-bold hover:bg-[#bbf436] transition-all shadow-[0_0_24px_rgba(204,255,0,0.35)] hover:shadow-[0_0_30px_rgba(204,255,0,0.55)]"
            href={siteConfig.telegram.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
              send
            </span>
            <span>{t.cta}</span>
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            ref={toggleBtnRef}
            type="button"
            aria-label={mobileMenuOpen ? t.closeMenu : t.openMenu}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden w-10 h-10 rounded-full bg-[#16181e] border border-white/10 text-white hover:border-[#ccff00]/50 hover:text-[#ccff00] flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#ccff00]"
          >
            <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          ref={mobileMenuRef}
          id="mobile-navigation-menu"
          aria-label={t.mobileNavLabel}
          className="lg:hidden bg-[#090a0f]/95 backdrop-blur-xl border-b border-white/10 px-margin-mobile py-space-md shadow-2xl"
        >
          <div className="flex flex-col gap-space-xs">
            {NAV_ITEMS.map((item, index) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  ref={index === 0 ? firstMobileLinkRef : undefined}
                  aria-current={isActive ? "page" : undefined}
                  href={`#${item.id}`}
                  onClick={() => handleMobileNavClick(item.id)}
                  className={
                    isActive
                      ? "px-space-md py-2.5 rounded-xl bg-[#ccff00] text-black font-bold font-label-md text-label-md transition-colors"
                      : "px-space-md py-2.5 rounded-xl text-on-surface hover:bg-[#16181e] hover:text-[#ccff00] font-label-md text-label-md transition-colors"
                  }
                >
                  {t.nav[item.key]}
                </a>
              );
            })}

            <a
              href={siteConfig.telegram.url}
              rel="noopener noreferrer"
              target="_blank"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-space-xs inline-flex items-center justify-center gap-space-xs px-space-md py-3 rounded-full bg-[#ccff00] text-black font-label-md text-label-md font-bold hover:bg-[#bbf436] transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)]"
            >
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                send
              </span>
              <span>{t.cta}</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
