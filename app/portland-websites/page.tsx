import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { localPagesCopy } from "@/data/copy/local-pages";

export const metadata: Metadata = {
  title: "Portland Websites",
  description:
    "Portland web developer for small businesses that need fast websites, lead forms, scheduling, and clear local SEO foundations.",
  keywords: ["Portland web developer", "Portland small business websites", "websites for Portland businesses"]
};

export default function PortlandWebsitesPage() {
  const copy = localPagesCopy.portlandWebsites;

  return (
    <>
      <Section titleAs="h1" title={copy.title} intro={copy.intro}>
        <div className="rounded-lg border border-border bg-white p-6 shadow-sm text-sm leading-relaxed text-slate-700">
          {copy.body}
        </div>
      </Section>

      <Section title="What is included">
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
