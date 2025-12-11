"use client";

import { useEffect, useState } from "react";

const COOKIE_CONSENT_KEY = "fleet_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!stored) {
        setVisible(true);
      }
    } catch {
      // If localStorage is not available, fall back to showing banner once per session
      setVisible(true);
    }
  }, []);

  const handleDecision = (value: "accept" | "reject" | "personalize") => {
    try {
      window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
    } catch {
      // ignore storage errors; still hide banner
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-30 flex items-end justify-center bg-slate-900/40 px-4 pb-4 pt-10 text-xs text-slate-800 sm:items-end sm:justify-end sm:px-6 sm:pb-6 lg:px-8">
      <div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl">
        <p className="text-[13px] leading-relaxed text-slate-800">
          We use cookies, including third-party cookies, for operational purposes,
          statistical analyses, to personalize your experience, provide you with
          targeted content tailored to your interests and to analyze the
          performance of our campaigns.
        </p>
        <p className="mt-3 text-[13px] leading-relaxed text-slate-700">
          To find out more about the types of cookies we use, as well as who sends
          them on our website, please visit our dedicated guide to
          <button className="ml-1 text-[#2d6a2a] underline underline-offset-2 hover:text-[#4c8c47]">
            managing cookies
          </button>
          .
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-end gap-2">
          <button
            onClick={() => handleDecision("personalize")}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-1.5 text-[12px] font-medium text-slate-800 hover:border-slate-400"
          >
            Personalize my choices
          </button>
          <button
            onClick={() => handleDecision("reject")}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[12px] font-medium text-slate-700 hover:border-slate-300"
          >
            Reject all
          </button>
          <button
            onClick={() => handleDecision("accept")}
            className="inline-flex items-center justify-center rounded-full bg-[#2d6a2a] px-4 py-1.5 text-[12px] font-semibold text-white shadow-sm hover:bg-[#4c8c47]"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
