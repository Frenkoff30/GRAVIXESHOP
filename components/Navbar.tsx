"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ShoppingBag, Search, Truck } from "lucide-react";
import { Logo } from "@/components/Logo";
import { clsx } from "@/lib/clsx";

const links = [
  { href: "/produkty", label: "Produkty" },
  { href: "/#kategorie", label: "Kategorie" },
  { href: "/znacka", label: "Značka" },
  { href: "/#kontakt", label: "Kontakt" },
];

/** Vyhledávací pole s lupou (zatím jen demo — přesměruje na výpis produktů). */
function SearchBar({ className }: { className?: string }) {
  const router = useRouter();
  const [q, setQ] = useState("");

  return (
    <form
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        router.push("/produkty");
      }}
      className={clsx("relative", className)}
    >
      <Search
        className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-zinc-400"
        strokeWidth={2}
      />
      <label htmlFor="site-search" className="sr-only">
        Hledat produkty
      </label>
      <input
        id="site-search"
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Hledat produkty…"
        className="h-11 w-full rounded-full border border-zinc-300 bg-zinc-100 pl-11 pr-24 text-[15px] text-zinc-900 placeholder:text-zinc-500 transition-colors duration-200 focus:border-volt focus:bg-white focus:outline-none focus:ring-4 focus:ring-volt/25"
      />
      <button
        type="submit"
        className="absolute right-1.5 top-1/2 flex h-8 -translate-y-1/2 cursor-pointer items-center gap-1.5 rounded-full bg-volt px-4 font-display text-xs font-bold uppercase tracking-[0.14em] text-ink transition-colors duration-200 hover:bg-volt-bright"
      >
        <Search className="h-4 w-4 sm:hidden" strokeWidth={2.5} />
        <span className="hidden sm:inline">Hledat</span>
      </button>
    </form>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Jen přepínáme zelený stín při scrollu (žádné zatahování výšky → nic neskáče).
  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      setScrolled(window.scrollY > 4);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
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
    <>
      {/* horní zelený proužek (banner) — normálně odscrolluje pryč */}
      <div className="bg-volt text-center">
        <p className="flex items-center justify-center gap-2 px-4 py-1.5 font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-ink sm:text-xs">
          <Truck className="h-3.5 w-3.5" strokeWidth={2} />
          Doprava zdarma od 1 000 Kč
          <span className="hidden text-ink/40 sm:inline">·</span>
          <span className="hidden sm:inline">Expedice do 24 h</span>
        </p>
      </div>

      {/* hlavní bílá lišta — přilepená nahoře (sticky) */}
      <div
        className={clsx(
          "sticky top-0 z-50 border-b border-zinc-200 bg-white transition-shadow duration-300",
          scrolled
            ? "shadow-[0_12px_34px_-14px_rgba(169,224,52,0.65)]"
            : "shadow-none",
        )}
      >
        <nav className="mx-auto flex h-[68px] max-w-7xl items-center gap-3 px-4 sm:h-20 sm:gap-5 sm:px-8">
          {/* mobilní hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Zavřít menu" : "Otevřít menu"}
            aria-expanded={open}
            className="grid h-10 w-10 shrink-0 cursor-pointer place-items-center rounded-full text-zinc-900 transition-colors duration-200 hover:bg-zinc-100 md:hidden"
          >
            {open ? (
              <X className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={2} />
            )}
          </button>

          {/* logo */}
          <Link href="/" aria-label="GRAVIX, domů" className="shrink-0">
            <Logo className="h-12 sm:h-16" />
          </Link>

          {/* vyhledávání — desktop */}
          <SearchBar className="mx-2 hidden max-w-2xl flex-1 md:block" />

          {/* košík */}
          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              title="Košík (již brzy)"
              aria-label="Košík"
              className="relative flex h-11 items-center gap-2 rounded-full border border-zinc-300 bg-white pl-3.5 pr-4 text-zinc-900 transition-colors duration-200 hover:border-zinc-900 hover:bg-zinc-100"
            >
              <ShoppingBag className="h-[19px] w-[19px]" strokeWidth={1.9} />
              <span className="hidden font-display text-sm font-semibold uppercase tracking-[0.12em] lg:inline">
                Košík
              </span>
              <span className="grid h-5 min-w-5 place-items-center rounded-full bg-volt px-1 text-[11px] font-bold leading-none text-ink">
                0
              </span>
            </button>
          </div>
        </nav>

        {/* vyhledávání — mobil (řádek pod lištou) */}
        <div className="px-4 pb-3 md:hidden">
          <SearchBar />
        </div>

        {/* mobilní menu (přilepené s lištou) */}
        <div
          className={clsx(
            "overflow-hidden border-t border-zinc-200 transition-[max-height,opacity] duration-300 md:hidden",
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <ul className="flex flex-col px-4 py-2">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-zinc-100 py-4 font-display text-lg font-semibold uppercase tracking-[0.14em] text-zinc-900"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* řádek s odkazy — desktop; normálně odscrolluje pod přilepenou lištu */}
      <div className="hidden bg-white md:block">
        <ul className="mx-auto flex h-12 max-w-7xl items-center gap-9 px-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="group relative font-display text-sm font-semibold uppercase tracking-[0.16em] text-zinc-700 transition-colors duration-200 hover:text-zinc-950"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-volt transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
