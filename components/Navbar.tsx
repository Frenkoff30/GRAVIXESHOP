"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Logo } from "@/components/Logo";
import { clsx } from "@/lib/clsx";

const links = [
  { href: "/produkty", label: "Produkty" },
  { href: "/#kategorie", label: "Kategorie" },
  { href: "/#znacka", label: "Značka" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // zamkni scroll když je otevřené mobilní menu
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="GRAVIX — domů" className="shrink-0">
          <Logo />
        </Link>

        {/* desktop links */}
        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="group relative font-display text-sm font-semibold uppercase tracking-[0.18em] text-fog transition-colors duration-200 hover:text-chrome"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-chrome transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            title="Košík — již brzy"
            aria-label="Košík"
            className="relative grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-line text-chrome transition-colors duration-200 hover:border-line-hi hover:bg-card"
          >
            <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.75} />
            <span className="absolute -right-1 -top-1 grid h-4 min-w-4 place-items-center rounded-full bg-chrome px-1 text-[10px] font-bold leading-none text-ink">
              0
            </span>
          </button>

          {/* mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Zavřít menu" : "Otevřít menu"}
            aria-expanded={open}
            className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-line text-chrome transition-colors duration-200 hover:border-line-hi hover:bg-card md:hidden"
          >
            {open ? (
              <X className="h-5 w-5" strokeWidth={1.75} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <div
        className={clsx(
          "overflow-hidden border-t border-line bg-ink/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 md:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="flex flex-col px-5 py-3">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-line/60 py-4 font-display text-lg font-semibold uppercase tracking-[0.16em] text-chrome"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
