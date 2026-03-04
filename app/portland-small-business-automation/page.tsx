import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { localPagesCopy } from "@/data/copy/local-pages";

export const metadata: Metadata = {
  title: "Portland Small Business Automation",
  description:
    "Small business automation setup in Portland: connect forms, email tools, task systems, and Slack alerts so your team saves time.",
  keywords: [
    "small business automation Portland",
    "Portland automation consultant",
    "Portland workflow automation"
  ]
};

export default function PortlandAutomationPage() {
  const copy = localPagesCopy.automation;

  return (
    <>
      <Section titleAs="h1" title={copy.title} intro={copy.intro}>
        <div className="rounded-lg border border-border bg-white p-6 shadow-sm text-sm leading-relaxed text-slate-700">
          {copy.body}
        </div>
      </Section>

      <Section title="Common automations">
        <ul className="grid gap-3 md:grid-cols-2">
          {copy.list.map((item) => (
            <li key={item} className="rounded-lg border border-border bg-white p-5 text-sm text-charcoal-900 shadow-sm">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <Button href="/#free-audit" variant="secondary">
          Request free audit
        </Button>
      </Section>
    </>
  );
}
