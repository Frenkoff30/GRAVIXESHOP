import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[calc(100svh-5.5rem)] items-center justify-center overflow-hidden bg-ink px-5 py-20">
      {/* pozadí ve stylu hera */}
      <div className="absolute inset-0 bg-[radial-gradient(44%_50%_at_50%_40%,rgba(169,224,52,0.1),transparent_62%)]" />
      <div className="absolute inset-0 bg-grid opacity-[0.1]" />
      <div className="absolute inset-0 bg-[radial-gradient(130%_120%_at_50%_40%,transparent_38%,rgba(4,4,6,0.92))]" />

      <div className="relative z-10 text-center">
        <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-volt">
          Chyba 404
        </p>

        <h1 className="mt-5 font-display font-bold uppercase leading-[0.85] tracking-tight text-metal text-[clamp(5rem,22vw,13rem)]">
          404
        </h1>

        <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-fog">
          Tuhle stránku jsme nenašli. Možná byla přesunutá, nebo se překlep vloudil
          do adresy.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/" size="lg">
            <ArrowLeft className="h-5 w-5" strokeWidth={2} />
            Zpět domů
          </ButtonLink>
          <ButtonLink href="/produkty" variant="outline" size="lg">
            Prozkoumat produkty
            <ArrowRight className="h-5 w-5" strokeWidth={2} />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
