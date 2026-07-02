import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { LogoMark } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Naše značka",
  description:
    "GRAVIX — česká fitness značka pro lidi, kteří berou trénink vážně.",
};

export default function ZnackaPage() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <Reveal>
          <div className="mb-8 flex justify-center">
            <LogoMark className="h-20 w-20" />
          </div>
        </Reveal>
        <Reveal>
          <span className="tech-label text-volt">// Naše značka</span>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-6 text-balance font-display font-semibold uppercase leading-[0.98] tracking-tight text-chrome text-[clamp(1.75rem,4vw,3.25rem)]">
            Nezačali jsme proto, abychom prodávali{" "}
            <span className="text-metal">další levný plast.</span> Začali jsme,
            protože jsme sami chtěli vybavení, které{" "}
            <span className="text-flame">
              nezklame v&nbsp;poslední&nbsp;sérii.
            </span>
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-fog">
            GRAVIX je česká značka pro lidi, kteří berou trénink vážně. Každý
            produkt vybíráme a testujeme tak, aby vydržel přesně to, co od něj
            čekáš, a vypadal přitom líp než cokoliv v regále.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
