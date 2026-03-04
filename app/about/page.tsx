import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Senior ecommerce engineer helping Portland brands grow online with Shopify, Salesforce Commerce Cloud, CRO, analytics, and performance work.",
  keywords: [
    "Portland ecommerce developer",
    "Shopify developer Portland",
    "Portland Shopify expert",
    "Ecommerce consultant Portland"
  ]
};

const values = [
  {
    title: "Speed with quality",
    description: "Move quickly, with clear architecture and maintainable implementation."
  },
  {
    title: "Clarity over noise",
    description: "Simple explanations, direct priorities, and transparent tradeoffs."
  },
  {
    title: "Measurable outcomes",
    description: "Every project ties back to conversion, speed, and tracking confidence."
  },
  {
    title: "Clean handoff",
    description: "Your team gets usable documentation and production-ready code."
  }
];

const tools = ["Shopify", "Salesforce Commerce Cloud", "CRO", "GA4", "GTM", "Performance", "Technical SEO", "Google Ads"];

export default function AboutPage() {
  return (
    <>
      <Section
        title="About"
        intro="I’m a senior ecommerce engineer helping Portland brands grow online. I build fast storefronts, improve conversion, and make analytics trustworthy."
      >
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-lg border border-border bg-white p-6 shadow-sm">
            <h2 className="font-sans text-2xl font-bold text-forest-900">Founder story</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Rose City Commerce supports Portland small and medium businesses that need strong
              ecommerce execution without agency overhead. I work directly with founders, marketers,
              and internal teams to ship improvements that increase online sales.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Focus areas include Shopify development, Salesforce Commerce Cloud enhancements, CRO,
              technical SEO, analytics/tracking cleanup, and performance optimization.
            </p>
          </article>
          <article className="rounded-lg border border-border bg-white p-6 shadow-sm">
            <h2 className="font-sans text-2xl font-bold text-forest-900">Core stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span key={tool} className="rounded-full bg-paper-100 px-3 py-1 text-sm font-semibold text-charcoal-900">
                  {tool}
                </span>
              ))}
            </div>
          </article>
        </div>
      </Section>

      <Section title="Values">
        <div className="grid gap-4 md:grid-cols-2">
          {values.map((value) => (
            <article key={value.title} className="rounded-lg border border-border bg-white p-6 shadow-sm">
              <h3 className="font-sans text-xl font-bold text-forest-900">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">{value.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-lg border border-border bg-forest-900 p-8 text-paper-50">
          <h2 className="font-sans text-3xl font-bold">Need local ecommerce help in Portland?</h2>
          <p className="mt-3 text-sm text-paper-50/90">
            Bring your current stack and constraints. We will focus on the highest-impact next step.
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="secondary">
              Start a conversation
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
