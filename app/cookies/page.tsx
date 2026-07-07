import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Zásady používání cookies",
  description: "Jak e-shop GRAVIX používá cookies a jak spravovat souhlas.",
};

export default function CookiesPage() {
  return (
    <LegalPage title="Zásady používání cookies" updated="červenec 2026">
      <p>
        Cookies jsou malé soubory, které web ukládá do tvého prohlížeče. Pomáhají
        zajistit správné fungování e-shopu a zlepšovat jeho obsah.
      </p>

      <h2>Jaké cookies používáme</h2>
      <ul>
        <li>
          <strong>Nezbytné</strong> — potřebné pro základní chod webu (košík,
          bezpečnost). Nelze je vypnout.
        </li>
        <li>
          <strong>Analytické</strong> — anonymní statistiky o návštěvnosti, jen s
          tvým souhlasem.
        </li>
        <li>
          <strong>Marketingové</strong> — pro relevantnější reklamu, jen s tvým
          souhlasem.
        </li>
      </ul>

      <h2>Správa souhlasu</h2>
      <p>
        Při první návštěvě si vybereš, které cookies povolíš. Volbu můžeš kdykoli
        změnit smazáním cookies ve svém prohlížeči nebo nás kontaktovat na{" "}
        <a href="mailto:gravixstore1@gmail.com">gravixstore1@gmail.com</a>.
      </p>

      <p>
        Více o zpracování údajů najdeš v{" "}
        <a href="/ochrana-osobnich-udaju">Zásadách ochrany osobních údajů</a>.
      </p>
    </LegalPage>
  );
}
