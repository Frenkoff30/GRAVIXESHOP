import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Obchodní podmínky",
  description: "Všeobecné obchodní podmínky e-shopu GRAVIX.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Obchodní podmínky" updated="červenec 2026">
      <p>
        Tyto obchodní podmínky upravují vztah mezi provozovatelem e-shopu{" "}
        <strong>GRAVIX</strong> a kupujícím. Nákupem v e-shopu kupující s
        podmínkami souhlasí.
      </p>

      <h2>1. Provozovatel</h2>
      <p>
        <strong>[jméno / firma provozovatele]</strong>, IČO{" "}
        <strong>[doplnit IČO]</strong>, se sídlem{" "}
        <strong>[doplnit adresu]</strong>. Kontakt:{" "}
        <a href="mailto:gravixstore1@gmail.com">gravixstore1@gmail.com</a>, tel.{" "}
        <a href="tel:+420792419532">792 419 532</a>.
      </p>

      <h2>2. Objednávka a uzavření smlouvy</h2>
      <p>
        Kupní smlouva vzniká odesláním objednávky kupujícím a jejím potvrzením ze
        strany prodávajícího. Ceny jsou uvedeny včetně DPH. Prodávající si
        vyhrazuje právo odmítnout objednávku u produktů, které se teprve
        připravují a nejsou skladem.
      </p>

      <h2>3. Platba a doprava</h2>
      <p>
        Způsoby platby a dopravy včetně cen najdeš na stránce{" "}
        <a href="/doprava-a-platba">Doprava a platba</a>.
      </p>

      <h2>4. Odstoupení od smlouvy</h2>
      <p>
        Kupující spotřebitel má právo odstoupit od smlouvy do{" "}
        <strong>14 dnů</strong> od převzetí zboží bez udání důvodu. Zboží je
        potřeba vrátit nepoškozené; postup najdeš na stránce{" "}
        <a href="/reklamace">Reklamace a vrácení</a>.
      </p>

      <h2>5. Práva z vadného plnění (reklamace)</h2>
      <p>
        Kupující může uplatnit reklamaci v zákonné lhůtě{" "}
        <strong>24 měsíců</strong>. Postup a kontakt najdeš na stránce{" "}
        <a href="/reklamace">Reklamace a vrácení</a>.
      </p>

      <h2>6. Ochrana osobních údajů</h2>
      <p>
        Zpracování osobních údajů se řídí{" "}
        <a href="/ochrana-osobnich-udaju">Zásadami ochrany osobních údajů</a>.
      </p>

      <h2>7. Mimosoudní řešení sporů</h2>
      <p>
        K mimosoudnímu řešení spotřebitelských sporů je příslušná{" "}
        <a href="https://www.coi.cz" target="_blank" rel="noopener noreferrer">
          Česká obchodní inspekce
        </a>
        .
      </p>
    </LegalPage>
  );
}
