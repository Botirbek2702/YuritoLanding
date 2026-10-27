import React, { useEffect, useLayoutEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LegalModal from "./components/LegalModal";
import { SUPPORTED_LANGS, translations } from "./i18n/translations";

const LANG_STORAGE_KEY = "yurito_lang";

function getInitialLang() {
  try {
    const saved = window.localStorage.getItem(LANG_STORAGE_KEY);
    if (saved) {
      const normalized = saved.toUpperCase();
      if (SUPPORTED_LANGS.includes(normalized)) {
        document.documentElement.lang = normalized.toLowerCase();
        return normalized;
      }
    }
  } catch {
    // Ignore storage access errors and fallback safely
  }
  document.documentElement.lang = "en";
  return "EN";
}

function alignToHash(behavior = "instant") {
  const hash = window.location.hash;
  if (!hash || hash.length <= 1) return;

  const targetId = decodeURIComponent(hash.slice(1));
  const targetEl = document.getElementById(targetId);
  if (!targetEl) return;

  const headerEl = document.querySelector("header");
  const headerOffset = headerEl ? headerEl.offsetHeight : 80;
  const targetTop =
    targetEl.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({
    top: Math.max(0, Math.round(targetTop)),
    behavior,
  });
}

export default function App() {
  const [lang, setLangState] = useState(getInitialLang);
  const [activeLegalDoc, setActiveLegalDoc] = useState(null);

  const setLang = (nextLang) => {
    const normalized = String(nextLang || "").toUpperCase();
    const validLang = SUPPORTED_LANGS.includes(normalized) ? normalized : "EN";
    setLangState(validLang);
    document.documentElement.lang = validLang.toLowerCase();
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, validLang);
    } catch {
      // Ignore storage write errors
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang.toLowerCase();
  }, [lang]);

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    let userInteracted = false;
    const markInteracted = () => {
      userInteracted = true;
    };

    window.addEventListener("wheel", markInteracted, { passive: true });
    window.addEventListener("touchstart", markInteracted, { passive: true });
    window.addEventListener("keydown", markInteracted, { passive: true });

    alignToHash("instant");

    const handleInitialAlign = () => {
      if (!userInteracted) {
        alignToHash("instant");
      }
    };

    const handleHashChange = () => {
      alignToHash("smooth");
    };

    window.addEventListener("load", handleInitialAlign);
    window.addEventListener("hashchange", handleHashChange);

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(handleInitialAlign).catch(() => {});
    }

    return () => {
      window.removeEventListener("wheel", markInteracted);
      window.removeEventListener("touchstart", markInteracted);
      window.removeEventListener("keydown", markInteracted);
      window.removeEventListener("load", handleInitialAlign);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const current = translations[lang] || translations.EN;

  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface antialiased selection:bg-[#ccff00] selection:text-black overflow-x-clip">
      <Header lang={lang} setLang={setLang} t={current.header} />
      <main className="w-full pt-20 bg-background">
        <div className="flex flex-col w-full">
          <Hero t={current.hero} />
          <Services t={current.services} />
          <Portfolio t={current.portfolio} />
          <Process t={current.process} />
          <WhyUs t={current.whyUs} />
          <Contact t={current.contact} />
        </div>
      </main>
      <Footer
        t={current.footer}
        nav={current.header.nav}
        onOpenLegal={(docKey) => setActiveLegalDoc(docKey)}
      />
      <LegalModal
        activeDoc={activeLegalDoc}
        onClose={() => setActiveLegalDoc(null)}
        t={current.legal}
      />
    </div>
  );
}
