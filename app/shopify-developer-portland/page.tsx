import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Shopify Developer Portland",
  description:
    "Shopify developer in Portland helping local businesses improve ecommerce performance, conversion, and analytics.",
  keywords: [
    "Shopify developer Portland",
    "Portland ecommerce developer",
    "Shopify expert Portland",
    "Portland Shopify expert",
    "Ecommerce consultant Portland"
  ]
};

export default function ShopifyDeveloperPortlandPage() {
  return (
    <>
      <Section
        title="Shopify developer Portland"
        intro="Rose City Commerce helps Portland businesses build, optimize, and scale ecommerce storefronts with clear measurement."
      >
        <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
          <p className="text-sm leading-relaxed text-slate-700">
            If you need a senior technical partner instead of a generic agency model, I can support
            Shopify builds, CRO, technical SEO, paid landing improvements, and analytics tracking.
          </p>
        </div>
      </Section>

      <Section title="Services">
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Shopify storefront development and integrations",
            "Conversion optimization and checkout improvements",
            "Technical SEO fixes for ecommerce templates",
            "Google Ads landing alignment and tracking",
            "GA4 + GTM setup and analytics cleanup",
            "Speed and Core Web Vitals improvements"
          ].map((service) => (
            <article key={service} className="rounded-lg border border-border bg-white p-5 shadow-sm">
              <p className="text-sm font-medium text-charcoal-900">{service}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Benefits">
        <ul className="grid gap-3 md:grid-cols-2">
          {[
            "Higher conversion from existing traffic",
            "Faster storefront performance on mobile",
            "Cleaner analytics for better decisions",
            "More efficient paid traffic spend"
          ].map((benefit) => (
            <li key={benefit} className="rounded-lg border border-border bg-white p-5 text-sm text-charcoal-900 shadow-sm">
              {benefit}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Why hire a local developer">
        <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
          <p className="text-sm leading-relaxed text-slate-700">
            Working with a local Portland ecommerce developer means faster communication, better
            context on your market, and practical collaboration with your existing team and vendors.
            I also support businesses in Beaverton, Hillsboro, and Vancouver, WA.
          </p>
          <div className="mt-5">
            <Button href="/contact" variant="secondary">
              Get a quote
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
