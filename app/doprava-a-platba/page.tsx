import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Doprava a platba",
  description: "Možnosti dopravy a platby v e-shopu GRAVIX.",
};

export default function ShippingPage() {
  return (
    <LegalPage title="Doprava a platba" updated="červenec 2026">
      <p>
        Objednávky expedujeme <strong>do 24 hodin</strong> v pracovní dny. Při
        nákupu nad <strong>1 000 Kč</strong> máš dopravu po celé ČR{" "}
        <strong>zdarma</strong>.
      </p>

      <h2>Doprava</h2>
      <ul>
        <li>Zásilkovna (výdejní místo) — <strong>69 Kč</strong></li>
        <li>Kurýr na adresu — <strong>99 Kč</strong></li>
        <li>Doprava zdarma při objednávce nad 1 000 Kč</li>
      </ul>

      <h2>Platba</h2>
      <ul>
        <li>Platební kartou online</li>
        <li>Bankovním převodem</li>
        <li>Dobírkou (poplatek <strong>30 Kč</strong>)</li>
      </ul>

      <h2>Dodací lhůta</h2>
      <p>
        U produktů skladem probíhá expedice do 24 hodin, doručení obvykle 1–2
        pracovní dny. Produkty označené jako <strong>„Připravujeme"</strong>{" "}
        zatím nejsou dostupné k objednání — jakmile naskladníme, dáme vědět na{" "}
        <a
          href="https://www.instagram.com/gravixstore.cz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagramu
        </a>
        .
      </p>

      <p>
        Máš dotaz k objednávce? Napiš na{" "}
        <a href="mailto:gravixstore1@gmail.com">gravixstore1@gmail.com</a> nebo
        zavolej na <a href="tel:+420792419532">792 419 532</a>.
      </p>
    </LegalPage>
  );
}
