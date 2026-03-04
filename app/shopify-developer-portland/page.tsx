import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { localPagesCopy } from "@/data/copy/local-pages";

export const metadata: Metadata = {
  title: "Shopify Developer Portland",
  description:
    "Shopify developer in Portland for builds, migrations, conversion improvements, and ongoing technical support.",
  keywords: ["Shopify developer Portland", "Portland Shopify expert", "Portland ecommerce developer"]
};

export default function ShopifyDeveloperPortlandPage() {
  const copy = localPagesCopy.shopifyPortland;

  return (
    <>
      <Section titleAs="h1" title={copy.title} intro={copy.intro}>
        <div className="rounded-lg border border-border bg-white p-6 shadow-sm text-sm leading-relaxed text-slate-700">
          {copy.body}
        </div>
      </Section>

      <Section title="Typical Shopify support">
        <div className="grid gap-4 md:grid-cols-2">
          {copy.list.map((service) => (
            <article key={service} className="rounded-lg border border-border bg-white p-5 shadow-sm">
              <p className="text-sm font-medium text-charcoal-900">{service}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <Button href="/#free-audit" variant="secondary">
          Request free audit
        </Button>
      </Section>
    </>
  );
}
