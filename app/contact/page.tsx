import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact a Portland ecommerce developer for Shopify help, SEO, Google Ads support, CRO, and analytics cleanup.",
  keywords: [
    "Shopify developer Portland",
    "Portland ecommerce developer",
    "Ecommerce consultant Portland"
  ]
};

export default function ContactPage() {
  return (
    <Section
      title="Contact"
      intro="Tell me about your business, platform, and goals. I will recommend the best next step."
    >
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <ContactForm />
        <aside className="rounded-lg border border-border bg-white p-6 shadow-sm">
          <h2 className="font-sans text-xl font-bold text-forest-900">Book a call</h2>
          <p className="mt-2 text-sm text-slate-700">
            Prefer to talk first? Schedule a short intro call to review priorities.
          </p>
          <a
            className="mt-4 inline-flex items-center rounded-md bg-copper-500 px-4 py-2 text-sm font-semibold text-paper-50"
            href={siteConfig.bookingUrl}
          >
            Book a call
          </a>
          <p className="mt-5 text-sm text-slate-700">
            Email: <a className="underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </p>
        </aside>
      </div>
    </Section>
  );
}
