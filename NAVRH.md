# GRAVIX — vizuální návrh webu

Návrh vzhledu eshopu **GRAVIX** (gravixstore.cz). Slouží jako designová předloha — finální eshop poběží na **Shopify**, takže tady **není reálný košík ani platby**, jde čistě o vzhled a strukturu.

## Spuštění

```bash
npm install      # jen poprvé
npm run dev      # web poběží na http://localhost:3008
```

Build (kontrola, že je vše v pořádku): `npm run build`

## Co je hotové

- **Domů** (`/`) — hero, běžící pás výhod, výhody, bestsellery, kategorie, sekce o značce, newsletter
- **Produkty** (`/produkty`) — výpis s filtrem podle kategorií
- **Detail produktu** (`/produkty/[slug]`) — ukázka, jak může vypadat produktová stránka

## Co je potřeba doplnit (placeholdery)

1. **Logo** — teď je to SVG napodobenina v `components/Logo.tsx`.
   Až bude oficiální logo, dej soubor do `public/` a vykresli ho přes `next/image`.
2. **Fotky produktů** — teď se generují automaticky (gradient + značka) v
   `components/ProductVisual.tsx`. Až budou fotky, nahraď tuhle komponentu obrázkem.
3. **Produkty a texty** — vše se edituje v jednom souboru: **`lib/products.ts`**
   (název, cena, popis, parametry, kategorie). Kamoš sem dosype zbytek sortimentu.

## Styl

Tmavá prémiová monochrome — černá / grafit + metalická stříbrná, fonty Barlow Condensed (nadpisy) a Barlow (text). Design systém: `design-system/gravix/MASTER.md`.
