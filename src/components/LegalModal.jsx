import React, { useEffect, useRef } from "react";

export default function LegalModal({ activeDoc, onClose, t }) {
  const closeBtnRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!activeDoc) return;

    const previouslyFocused = document.activeElement;
    if (closeBtnRef.current) {
      closeBtnRef.current.focus();
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (previouslyFocused && typeof previouslyFocused.focus === "function") {
        previouslyFocused.focus();
      }
    };
  }, [activeDoc, onClose]);

  if (!activeDoc || !t || !t[activeDoc]) return null;

  const doc = t[activeDoc];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-margin-mobile bg-black/80 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-modal-title"
        className="w-full max-w-xl rounded-3xl bg-[#16181e] border border-white/15 p-space-lg lg:p-space-xl shadow-2xl text-on-surface relative"
      >
        <div className="flex items-center justify-between gap-space-md mb-space-md pb-space-sm border-b border-white/10">
          <h2
            id="legal-modal-title"
            className="font-headline-sm text-headline-sm text-white"
          >
            {doc.title}
          </h2>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label={t.closeBtn}
            className="w-9 h-9 rounded-full bg-[#0d0e13] border border-white/10 text-on-surface-variant hover:text-[#ccff00] hover:border-[#ccff00]/40 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#ccff00]"
          >
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
              close
            </span>
          </button>
        </div>

        <div className="space-y-space-md font-body-md text-body-md text-on-surface-variant">
          <p className="text-white">{doc.summary}</p>
          <ul className="space-y-space-xs list-disc pl-5">
            {doc.points.map((pt, i) => (
              <li key={i}>{pt}</li>
            ))}
          </ul>
          <div className="p-space-sm rounded-xl bg-[#0d0e13] border border-[#ccff00]/25 text-on-surface-variant font-body-sm text-body-sm">
            {doc.note}
          </div>
        </div>

        <div className="mt-space-lg flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-space-lg py-2.5 rounded-full bg-[#ccff00] text-black font-bold font-label-md text-label-md hover:bg-[#bbf436] transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          >
            {t.closeBtn}
          </button>
        </div>
      </div>
    </div>
  );
}
