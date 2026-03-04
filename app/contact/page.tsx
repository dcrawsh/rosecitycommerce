import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { siteConfig } from "@/config/site";
import { contactCopy } from "@/data/copy/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Rose City Commerce for websites, ecommerce, automation, and tracking help.",
  keywords: ["Portland web developer", "Shopify developer Portland", "small business automation Portland"]
};

export default function ContactPage() {
  return (
    <Section titleAs="h1" title="Contact" intro={contactCopy.intro}>
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <ContactForm />
        <aside className="rounded-lg border border-border bg-white p-6 shadow-sm">
          <h2 className="font-sans text-xl font-bold text-forest-900">Book a call</h2>
          <p className="mt-2 text-sm text-slate-700">
            Prefer to talk first? Book a short intro call.
          </p>
          <a
            className="mt-4 inline-flex items-center rounded-md bg-copper-500 px-4 py-2 text-sm font-semibold text-paper-50"
            href={siteConfig.bookingUrl}
          >
            Book a call
          </a>

          <div className="mt-6 rounded-md bg-paper-100 p-4 text-sm text-slate-700">
            <p className="font-semibold text-forest-900">What helps me scope quickly:</p>
            <ul className="mt-2 space-y-2">
              {contactCopy.scopeTips.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3">Response time: usually within 2 business days.</p>
          </div>

          <p className="mt-4 text-sm text-slate-700">
            Email: <a className="underline" href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>
          </p>
        </aside>
      </div>
    </Section>
  );
}
