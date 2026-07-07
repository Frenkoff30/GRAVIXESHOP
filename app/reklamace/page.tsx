import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Reklamace a vrácení",
  description: "Jak reklamovat nebo vrátit zboží zakoupené v e-shopu GRAVIX.",
};

export default function ReturnsPage() {
  return (
    <LegalPage title="Reklamace a vrácení" updated="červenec 2026">
      <h2>Vrácení do 14 dnů</h2>
      <p>
        Jako spotřebitel máš právo odstoupit od smlouvy do{" "}
        <strong>14 dnů</strong> od převzetí zboží bez udání důvodu. Zboží nám
        zašli zpět nepoškozené, nejlépe v původním obalu. Peníze ti vrátíme do 14
        dnů od doručení vráceného zboží.
      </p>

      <h2>Reklamace</h2>
      <p>
        Na zboží se vztahuje zákonná lhůta <strong>24 měsíců</strong>. Pokud má
        výrobek vadu, kontaktuj nás a domluvíme se na řešení (oprava, výměna nebo
        vrácení peněz).
      </p>

      <h2>Jak postupovat</h2>
      <ul>
        <li>
          Napiš nám na{" "}
          <a href="mailto:gravixstore1@gmail.com">gravixstore1@gmail.com</a>{" "}
          nebo na <a href="tel:+420792419532">792 419 532</a>.
        </li>
        <li>Uveď číslo objednávky a popiš, o co jde (ideálně přilož foto).</li>
        <li>Dáme ti adresu pro zaslání a vše rychle vyřídíme.</li>
      </ul>

      <p>
        Podrobnosti najdeš také v{" "}
        <a href="/obchodni-podminky">obchodních podmínkách</a>.
      </p>
    </LegalPage>
  );
}
