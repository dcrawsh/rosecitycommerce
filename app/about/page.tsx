import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { aboutCopy } from "@/data/copy/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Rose City Commerce is a small Portland web and ecommerce studio building Shopify storefronts, websites, integrations, and practical digital systems.",
  keywords: ["Portland web developer", "Shopify developer Portland", "small business automation Portland"]
};

export default function AboutPage() {
  return (
    <>
      <Section compactTop titleAs="h1" title={aboutCopy.headline} intro={aboutCopy.intro}>
        <div className="mb-5 max-w-3xl space-y-3 text-sm leading-relaxed text-slate-700">
          {aboutCopy.background.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-lg border border-border bg-white p-6 shadow-sm">
            <h2 className="font-sans text-2xl font-bold text-forest-900">How we work</h2>
            {aboutCopy.howIWork.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-sm leading-relaxed text-slate-700">
                {paragraph}
              </p>
            ))}
          </article>
          <article className="rounded-lg border border-border bg-white p-6 shadow-sm">
            <h2 className="font-sans text-2xl font-bold text-forest-900">Core focus areas</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-700">
              {aboutCopy.focusAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </article>
        </div>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {aboutCopy.whoYouWorkWith.map((item) => (
            <article key={item.title} className="rounded-lg border border-border bg-paper-100 p-6 shadow-sm">
              <h2 className="font-sans text-xl font-bold text-forest-900">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{item.description}</p>
            </article>
          ))}
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
          <h2 className="font-sans text-3xl font-bold">Want to talk through a project?</h2>
          <p className="mt-3 text-sm text-paper-50/90">
            Send us your site, goals, or current pain points and we’ll give you a practical recommendation.
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
