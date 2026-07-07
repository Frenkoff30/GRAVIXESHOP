"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "gravix-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      /* localStorage nedostupný — banner prostě nezobrazíme */
    }
  }, []);

  const decide = (value: "all" | "essential") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Souhlas s cookies"
      className="fixed inset-x-3 bottom-3 z-[70] mx-auto max-w-3xl rounded-2xl border border-line-hi bg-surface/95 p-5 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur sm:inset-x-4 sm:bottom-4 sm:p-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex items-start gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line bg-ink text-volt">
            <Cookie className="h-5 w-5" strokeWidth={1.75} />
          </span>
          <p className="text-sm leading-relaxed text-fog">
            Používáme cookies pro správný chod e-shopu a — s tvým souhlasem —
            pro statistiky a lepší obsah. Více v{" "}
            <Link
              href="/cookies"
              className="font-semibold text-chrome underline underline-offset-4 hover:text-white"
            >
              zásadách cookies
            </Link>
            .
          </p>
        </div>

        <div className="flex shrink-0 gap-3 sm:ml-auto">
          <button
            type="button"
            onClick={() => decide("essential")}
            className="flex-1 cursor-pointer rounded-full border border-line-hi px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-[0.12em] text-fog transition-colors hover:border-chrome hover:text-chrome sm:flex-none"
          >
            Jen nezbytné
          </button>
          <button
            type="button"
            onClick={() => decide("all")}
            className="flex-1 cursor-pointer rounded-full bg-volt px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-volt-bright sm:flex-none"
          >
            Přijmout vše
          </button>
        </div>
      </div>
    </div>
  );
}
