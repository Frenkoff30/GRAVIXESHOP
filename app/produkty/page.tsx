import type { Metadata } from "next";
import { Suspense } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductsBrowser } from "@/components/ProductsBrowser";
import { getCatalog } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Produkty",
  description:
    "Shakery a nosní pásky GRAVIX. Prémiové fitness vybavení skladem s expedicí do 24 hodin.",
};

export default async function ProduktyPage() {
  const products = await getCatalog();
  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-0 h-72 bg-radial-glow" />
      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-12 sm:px-8 sm:pt-16">
        <SectionHeading eyebrow="Katalog" title="Všechny produkty">
          Vybavení navržené pro výkon. Vyber si kategorii a najdi přesně to, co
          tvůj trénink potřebuje.
        </SectionHeading>

        <Suspense fallback={<div className="mt-10 h-12" />}>
          <ProductsBrowser products={products} />
        </Suspense>
      </div>
    </div>
  );
}
