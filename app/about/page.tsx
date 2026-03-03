import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "About",
  description: "Founder story, values, and eCommerce delivery approach."
};

const values = [
  {
    title: "Speed with quality",
    description: "Move quickly, but with clear architecture and maintainable implementation."
  },
  {
    title: "Clarity over noise",
    description: "Simple explanations, direct priorities, and transparent tradeoffs."
  },
  {
    title: "Measurable outcomes",
    description: "Work ties back to conversion, speed, revenue efficiency, and data confidence."
  },
  {
    title: "Clean handoff",
    description: "Documentation and code quality that supports your team long after launch."
  }
];

const tools = [
  "Shopify",
  "SFCC",
  "Next.js",
  "GA4",
  "GTM",
  "Segment",
  "Klaviyo",
  "Google Ads",
  "Looker Studio"
];

export default function AboutPage() {
  return (
    <>
      <Section
        title="About"
        intro="I’m a senior eCommerce developer who understands marketing and measurement. My focus is practical execution that improves conversion, speed, and growth efficiency."
      >
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-lg border border-border bg-white p-6 shadow-sm">
            <h2 className="font-sans text-2xl font-bold text-forest-900">Founder story</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Rose City Commerce started to bridge a gap: brands often have storefront engineering,
              marketing teams, and vendors operating in silos. I help unify those streams so the
              site performs better and the data supports smarter growth decisions.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              I integrate with your current team, ship real work, and keep strategy grounded in
              implementation.
            </p>
          </article>
          <article className="rounded-lg border border-border bg-white p-6 shadow-sm">
            <h2 className="font-sans text-2xl font-bold text-forest-900">Tools and stack</h2>
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
          <h2 className="font-sans text-3xl font-bold">Need a senior partner who can own build + growth?</h2>
          <p className="mt-3 text-sm text-paper-50/90">
            Bring your current stack and constraints. We’ll focus on the highest-impact next step.
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
