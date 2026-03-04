import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { aboutCopy } from "@/data/copy/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "I am a senior eCommerce developer based in Portland helping small teams with websites, Shopify, automations, and tracking.",
  keywords: ["Portland web developer", "Shopify developer Portland", "small business automation Portland"]
};

export default function AboutPage() {
  return (
    <>
      <Section titleAs="h1" title="About" intro={aboutCopy.intro}>
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-lg border border-border bg-white p-6 shadow-sm">
            <h2 className="font-sans text-2xl font-bold text-forest-900">How I work</h2>
            {aboutCopy.howIWork.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-sm leading-relaxed text-slate-700">
                {paragraph}
              </p>
            ))}
          </article>
          <article className="rounded-lg border border-border bg-white p-6 shadow-sm">
            <h2 className="font-sans text-2xl font-bold text-forest-900">Photo placeholder</h2>
            <div className="mt-3 flex h-48 items-center justify-center rounded-md border border-dashed border-border bg-paper-100 text-sm text-slate-700">
              Founder photo placeholder
            </div>
          </article>
        </div>
      </Section>

      <Section title="Values">
        <div className="grid gap-4 md:grid-cols-2">
          {aboutCopy.values.map((value) => (
            <article key={value.title} className="rounded-lg border border-border bg-white p-6 shadow-sm">
              <h3 className="font-sans text-xl font-bold text-forest-900">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{value.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-lg border border-border bg-forest-900 p-8 text-paper-50">
          <h2 className="font-sans text-3xl font-bold">Want to talk through your next project?</h2>
          <p className="mt-3 text-sm text-paper-50/90">
            Send your site and goals. I will give you a practical recommendation.
          </p>
          <div className="mt-6">
            <Button href="/#free-audit" variant="secondary">
              Request a free audit
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
