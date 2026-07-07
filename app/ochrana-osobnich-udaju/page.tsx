import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Ochrana osobních údajů",
  description:
    "Zásady zpracování a ochrany osobních údajů (GDPR) e-shopu GRAVIX.",
};

export default function GdprPage() {
  return (
    <LegalPage title="Ochrana osobních údajů" updated="červenec 2026">
      <p>
        Tyto zásady popisují, jak e-shop <strong>GRAVIX</strong> zpracovává a
        chrání osobní údaje svých zákazníků v souladu s nařízením Evropského
        parlamentu a Rady (EU) 2016/679 (GDPR) a zákonem č. 110/2019 Sb., o
        zpracování osobních údajů.
      </p>

      <h2>1. Správce údajů</h2>
      <p>
        Správcem osobních údajů je provozovatel e-shopu GRAVIX,{" "}
        <strong>[jméno / firma provozovatele]</strong>, IČO{" "}
        <strong>[doplnit IČO]</strong>, se sídlem{" "}
        <strong>[doplnit adresu]</strong>. Kontakt:{" "}
        <a href="mailto:gravixstore1@gmail.com">gravixstore1@gmail.com</a>, tel.{" "}
        <a href="tel:+420792419532">792 419 532</a>.
      </p>

      <h2>2. Jaké údaje zpracováváme</h2>
      <ul>
        <li>identifikační a kontaktní údaje (jméno, příjmení, e-mail, telefon, doručovací a fakturační adresa),</li>
        <li>údaje o objednávkách a platbách,</li>
        <li>komunikaci, kterou nám zašleš (e-mail, zpráva na Instagramu),</li>
        <li>technické údaje o používání webu (viz zásady{" "}
          <a href="/cookies">cookies</a>).
        </li>
      </ul>

      <h2>3. Účel a právní základ</h2>
      <ul>
        <li><strong>Vyřízení objednávky</strong> — plnění smlouvy (čl. 6 odst. 1 písm. b GDPR).</li>
        <li><strong>Zákonné povinnosti</strong> — vedení účetnictví, daňové doklady (čl. 6 odst. 1 písm. c).</li>
        <li><strong>Newsletter a marketing</strong> — na základě tvého souhlasu (čl. 6 odst. 1 písm. a), který můžeš kdykoli odvolat.</li>
      </ul>

      <h2>4. Doba uchování</h2>
      <p>
        Údaje uchováváme jen po nezbytně nutnou dobu — po dobu trvání smluvního
        vztahu a dále po dobu vyžadovanou právními předpisy (zejména účetní a
        daňové doklady po dobu 10 let).
      </p>

      <h2>5. Předání údajů</h2>
      <p>
        Údaje mohou být předány pouze zpracovatelům, kteří nám pomáhají s
        provozem (přepravce, platební brána, poskytovatel e-shopové platformy).
        Se všemi máme uzavřené zpracovatelské smlouvy a údaje nepředáváme mimo
        EU bez odpovídajících záruk.
      </p>

      <h2>6. Tvá práva</h2>
      <p>
        Máš právo na přístup ke svým údajům, jejich opravu či výmaz, omezení
        zpracování, přenositelnost, vznesení námitky a právo odvolat souhlas. Máš
        také právo podat stížnost u{" "}
        <a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer">
          Úřadu pro ochranu osobních údajů
        </a>
        . Pro uplatnění práv nás kontaktuj na{" "}
        <a href="mailto:gravixstore1@gmail.com">gravixstore1@gmail.com</a>.
      </p>
    </LegalPage>
  );
}
