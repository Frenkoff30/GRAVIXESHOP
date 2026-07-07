import Link from "next/link";
import { ChevronRight } from "lucide-react";

/**
 * Jednotný obal pro právní / informační stránky (GDPR, podmínky, doprava…).
 * Obsah se píše čistě přes <h2>, <p>, <ul> — styl řeší tenhle wrapper.
 */
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-0 h-72 bg-radial-glow" />

      <div className="relative mx-auto max-w-3xl px-5 pb-24 pt-10 sm:px-8 sm:pt-14">
        {/* breadcrumb */}
        <nav
          className="flex flex-wrap items-center gap-1.5 text-sm text-mist"
          aria-label="Drobečková navigace"
        >
          <Link href="/" className="transition-colors hover:text-chrome">
            Domů
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-fog">{title}</span>
        </nav>

        <h1 className="mt-6 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-chrome sm:text-5xl">
          {title}
        </h1>
        {updated && (
          <p className="mt-3 text-sm text-mist">Poslední aktualizace: {updated}</p>
        )}

        <div className="mt-10 space-y-5 text-[15px] leading-relaxed text-fog [&_a]:text-chrome [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-white [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:uppercase [&_h2]:tracking-tight [&_h2]:text-chrome [&_li]:marker:text-volt [&_strong]:text-chrome [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
          {children}
        </div>
      </div>
    </div>
  );
}
