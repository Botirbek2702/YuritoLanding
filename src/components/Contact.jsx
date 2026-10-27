import React, { useEffect, useRef, useState } from "react";
import { siteConfig } from "../config/siteConfig";

const CONTACT_PATTERN =
  "^\\s*(?:@[A-Za-z0-9_]{5,32}|\\+?[0-9][0-9\\s\\-()]{5,22}[0-9])\\s*$";

export function validateContactValue(raw) {
  const trimmed = (raw || "").trim();
  if (!trimmed) {
    return "contactRequired";
  }

  if (trimmed.startsWith("@")) {
    const tgRegex = /^@[A-Za-z0-9_]{5,32}$/;
    return tgRegex.test(trimmed) ? null : "contactInvalid";
  }

  const phoneCharsRegex = /^\+?[0-9][0-9\s\-()]{5,22}[0-9]$/;
  const digitsOnly = trimmed.replace(/\D/g, "");
  if (
    !phoneCharsRegex.test(trimmed) ||
    digitsOnly.length < 7 ||
    digitsOnly.length > 15
  ) {
    return "contactInvalid";
  }

  return null;
}

function buildTelegramMessage({ name, phone, message }) {
  return [
    "🚀 Yangi ariza — Yurito Digital",
    "",
    `👤 Ism / Kompaniya: ${name}`,
    `📞 Aloqa: ${phone}`,
    `📝 Loyiha tafsilotlari:`,
    message,
  ].join("\n");
}

export default function Contact({ t }) {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: null,
    phone: null,
    message: null,
  });
  const [touched, setTouched] = useState({
    name: false,
    phone: false,
    message: false,
  });

  const nameInputRef = useRef(null);
  const phoneInputRef = useRef(null);
  const messageInputRef = useRef(null);

  const syncNativeValidity = (data) => {
    if (nameInputRef.current) {
      const nameErr = !data.name.trim() ? t.errors.nameRequired : "";
      nameInputRef.current.setCustomValidity(nameErr);
    }
    if (phoneInputRef.current) {
      const phoneErrKey = validateContactValue(data.phone);
      const phoneErr = phoneErrKey ? t.errors[phoneErrKey] : "";
      phoneInputRef.current.setCustomValidity(phoneErr);
    }
    if (messageInputRef.current) {
      const msgErr = !data.message.trim() ? t.errors.messageRequired : "";
      messageInputRef.current.setCustomValidity(msgErr);
    }
  };

  useEffect(() => {
    syncNativeValidity(formData);
  }, [formData, t]);

  const validateAll = (data) => {
    return {
      name: !data.name.trim() ? "nameRequired" : null,
      phone: validateContactValue(data.phone),
      message: !data.message.trim() ? "messageRequired" : null,
    };
  };

  const handleChange = (field, value) => {
    const nextData = { ...formData, [field]: value };
    setFormData(nextData);
    if (status === "success" || status === "error") {
      setStatus("idle");
    }

    if (touched[field]) {
      const allErrs = validateAll(nextData);
      setErrors((prev) => ({ ...prev, [field]: allErrs[field] }));
    }
  };

  const handleBlur = (field) => {
    const trimmedVal = formData[field].trim();
    const nextData = { ...formData, [field]: trimmedVal };
    setFormData(nextData);
    setTouched((prev) => ({ ...prev, [field]: true }));
    const allErrs = validateAll(nextData);
    setErrors((prev) => ({ ...prev, [field]: allErrs[field] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedData = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
    };
    setFormData(trimmedData);
    setTouched({ name: true, phone: true, message: true });

    const nextErrors = validateAll(trimmedData);
    setErrors(nextErrors);
    syncNativeValidity(trimmedData);

    if (nextErrors.name) {
      nameInputRef.current?.focus();
      return;
    }
    if (nextErrors.phone) {
      phoneInputRef.current?.focus();
      return;
    }
    if (nextErrors.message) {
      messageInputRef.current?.focus();
      return;
    }

    setStatus("submitting");
    const textPayload = buildTelegramMessage(trimmedData);
    const telegramUrl = siteConfig.telegram.url;

    if (e.nativeEvent?.isTrusted && !navigator.webdriver) {
      const deepLink = `${telegramUrl}?text=${encodeURIComponent(textPayload)}`;
      window.open(deepLink, "_blank", "noopener,noreferrer");
    }

    await new Promise((resolve) => setTimeout(resolve, 200));
    setStatus("success");
    setFormData({ name: "", phone: "", message: "" });
    setTouched({ name: false, phone: false, message: false });
    setErrors({ name: null, phone: null, message: null });
  };

  return (
    <section
      className="scroll-mt-20 w-full px-margin-mobile md:px-margin-tablet lg:px-margin py-space-xl lg:py-24 relative overflow-hidden"
      id="contact"
    >
      {/* Subtle glow accents */}
      <div className="absolute bottom-0 right-10 w-[450px] h-[450px] rounded-full bg-[#ccff00]/10 blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 left-0 w-[350px] h-[350px] rounded-full bg-emerald-500/10 blur-[130px] pointer-events-none -z-10"></div>

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

        {/* Dual Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Left: Quick Direct Channels */}
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <div className="p-space-lg rounded-3xl bg-[#16181e]/90 border border-white/10 backdrop-blur-xl shadow-xl flex flex-col gap-space-md">
              <h3 className="font-headline-sm text-headline-sm text-white">
                {t.directTitle}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {t.directDesc}
              </p>

              <div className="flex flex-col gap-space-sm">
                {/* Telegram */}
                <a
                  className="flex items-center justify-between p-space-md rounded-2xl bg-[#0d0e13]/80 border border-white/5 hover:border-[#ccff00]/40 transition-all group"
                  href={siteConfig.telegram.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="flex items-center gap-space-sm min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-[#ccff00]/10 border border-[#ccff00]/20 text-[#ccff00] flex items-center justify-center shrink-0">
                      <span
                        className="material-symbols-outlined text-[20px]"
                        aria-hidden="true"
                      >
                        near_me
                      </span>
                    </div>
                    <div className="min-w-0">
                      <div className="font-label-lg text-label-lg text-white">
                        Telegram
                      </div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
                        {t.telegramSub}
                      </div>
                    </div>
                  </div>
                  <span
                    className="material-symbols-outlined text-[#ccff00] text-[20px] group-hover:translate-x-1 transition-transform shrink-0"
                    aria-hidden="true"
                  >
                    arrow_forward
                  </span>
                </a>

                {/* Instagram */}
                <a
                  className="flex items-center justify-between p-space-md rounded-2xl bg-[#0d0e13]/80 border border-white/5 hover:border-[#ccff00]/40 transition-all group"
                  href={siteConfig.instagram.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="flex items-center gap-space-sm min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-[#ccff00]/10 border border-[#ccff00]/20 text-[#ccff00] flex items-center justify-center shrink-0">
                      <span
                        className="material-symbols-outlined text-[20px]"
                        aria-hidden="true"
                      >
                        photo_camera
                      </span>
                    </div>
                    <div className="min-w-0">
                      <div className="font-label-lg text-label-lg text-white">
                        Instagram
                      </div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
                        {t.instagramSub}
                      </div>
                    </div>
                  </div>
                  <span
                    className="material-symbols-outlined text-[#ccff00] text-[20px] group-hover:translate-x-1 transition-transform shrink-0"
                    aria-hidden="true"
                  >
                    arrow_forward
                  </span>
                </a>

                {/* Phone */}
                <a
                  className="flex items-center justify-between p-space-md rounded-2xl bg-[#0d0e13]/80 border border-white/5 hover:border-[#ccff00]/40 transition-all group"
                  href={siteConfig.phone.href}
                >
                  <div className="flex items-center gap-space-sm min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-[#ccff00]/10 border border-[#ccff00]/20 text-[#ccff00] flex items-center justify-center shrink-0">
                      <span
                        className="material-symbols-outlined text-[20px]"
                        aria-hidden="true"
                      >
                        call
                      </span>
                    </div>
                    <div className="min-w-0">
                      <div className="font-label-lg text-label-lg text-white">
                        {t.phoneTitle}
                      </div>
                      <div className="font-body-sm text-body-sm text-on-surface-variant truncate">
                        {t.phoneSub}
                      </div>
                    </div>
                  </div>
                  <span
                    className="material-symbols-outlined text-[#ccff00] text-[20px] group-hover:translate-x-1 transition-transform shrink-0"
                    aria-hidden="true"
                  >
                    arrow_forward
                  </span>
                </a>
              </div>

              {/* Location Badge */}
              <div className="pt-space-sm flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
                <span
                  className="material-symbols-outlined text-[#ccff00] text-[18px] shrink-0"
                  aria-hidden="true"
                >
                  location_on
                </span>
                <span>{t.location}</span>
              </div>
            </div>
          </div>

          {/* Right: Glassmorphism Contact Form */}
          <div className="lg:col-span-7">
            <form
              className="p-space-lg lg:p-space-xl rounded-3xl bg-[#16181e]/90 border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col gap-space-md"
              id="contact-form"
              noValidate
              onSubmit={handleSubmit}
            >
              <div>
                <h3 className="font-headline-sm text-headline-sm text-white mb-1">
                  {t.formTitle}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {t.formSubtitle}
                </p>
              </div>

              <div className="flex flex-col gap-space-sm">
                {/* Name Field */}
                <div>
                  <label
                    className="block font-label-md text-label-md text-white mb-1"
                    htmlFor="contact-name"
                  >
                    {t.nameLabel}
                  </label>
                  <input
                    ref={nameInputRef}
                    className={`w-full px-space-md py-3 rounded-xl bg-[#0d0e13]/90 border ${
                      errors.name
                        ? "border-error focus:border-error"
                        : "border-white/10 focus:border-[#ccff00]"
                    } text-white placeholder:text-gray-500 focus:outline-none transition-colors font-body-md text-body-md shadow-inner`}
                    id="contact-name"
                    name="name"
                    placeholder={t.namePlaceholder}
                    pattern=".*\S.*"
                    required
                    type="text"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={
                      errors.name ? "contact-name-error" : undefined
                    }
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    onBlur={() => handleBlur("name")}
                  />
                  {errors.name && (
                    <p
                      id="contact-name-error"
                      role="alert"
                      className="mt-1 font-body-sm text-body-sm text-error"
                    >
                      {t.errors[errors.name]}
                    </p>
                  )}
                </div>

                {/* Phone / Telegram Handle Field */}
                <div>
                  <label
                    className="block font-label-md text-label-md text-white mb-1"
                    htmlFor="contact-phone"
                  >
                    {t.phoneLabel}
                  </label>
                  <input
                    ref={phoneInputRef}
                    className={`w-full px-space-md py-3 rounded-xl bg-[#0d0e13]/90 border ${
                      errors.phone
                        ? "border-error focus:border-error"
                        : "border-white/10 focus:border-[#ccff00]"
                    } text-white placeholder:text-gray-500 focus:outline-none transition-colors font-body-md text-body-md shadow-inner`}
                    id="contact-phone"
                    name="contact"
                    placeholder={t.phonePlaceholder}
                    pattern={CONTACT_PATTERN}
                    required
                    type="text"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={
                      errors.phone ? "contact-phone-error" : undefined
                    }
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    onBlur={() => handleBlur("phone")}
                  />
                  {errors.phone && (
                    <p
                      id="contact-phone-error"
                      role="alert"
                      className="mt-1 font-body-sm text-body-sm text-error"
                    >
                      {t.errors[errors.phone]}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    className="block font-label-md text-label-md text-white mb-1"
                    htmlFor="contact-message"
                  >
                    {t.messageLabel}
                  </label>
                  <textarea
                    ref={messageInputRef}
                    className={`w-full px-space-md py-3 rounded-xl bg-[#0d0e13]/90 border ${
                      errors.message
                        ? "border-error focus:border-error"
                        : "border-white/10 focus:border-[#ccff00]"
                    } text-white placeholder:text-gray-500 focus:outline-none transition-colors font-body-md text-body-md resize-none shadow-inner`}
                    id="contact-message"
                    name="message"
                    placeholder={t.messagePlaceholder}
                    required
                    rows={4}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? "contact-message-error" : undefined
                    }
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    onBlur={() => handleBlur("message")}
                  ></textarea>
                  {errors.message && (
                    <p
                      id="contact-message-error"
                      role="alert"
                      className="mt-1 font-body-sm text-body-sm text-error"
                    >
                      {t.errors[errors.message]}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit CTA Button */}
              <button
                className="w-full py-3.5 px-space-xl rounded-full bg-[#ccff00] text-black font-bold font-label-lg text-label-lg shadow-[0_0_24px_rgba(204,255,0,0.35)] hover:bg-[#bbf436] hover:shadow-[0_0_35px_rgba(204,255,0,0.55)] hover:scale-[1.01] disabled:opacity-60 transition-all duration-300 flex items-center justify-center gap-space-xs mt-space-xs"
                type="submit"
                disabled={status === "submitting"}
              >
                <span
                  className="material-symbols-outlined text-[20px]"
                  aria-hidden="true"
                >
                  send
                </span>
                <span>
                  {status === "submitting" ? t.submittingBtn : t.submitBtn}
                </span>
              </button>

              {/* Success Alert State */}
              {status === "success" && (
                <div
                  role="status"
                  aria-live="polite"
                  className="p-space-md rounded-xl bg-[#0d0e13] border border-[#ccff00]/40 text-[#ccff00] flex items-center gap-space-xs font-body-sm text-body-sm"
                  id="form-success"
                >
                  <span
                    className="material-symbols-outlined text-[20px]"
                    aria-hidden="true"
                  >
                    check_circle
                  </span>
                  <span>{t.successMsg}</span>
                </div>
              )}

              {/* Error Alert State */}
              {status === "error" && (
                <div
                  role="alert"
                  className="p-space-md rounded-xl bg-[#0d0e13] border border-error/40 text-error flex items-center gap-space-xs font-body-sm text-body-sm"
                  id="form-error"
                >
                  <span
                    className="material-symbols-outlined text-[20px]"
                    aria-hidden="true"
                  >
                    error
                  </span>
                  <span>{t.errors.submitFailed}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
