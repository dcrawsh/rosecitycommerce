import type { Metadata } from "next";
import { CapabilityBuckets } from "@/components/CapabilityBuckets";
import { CaseStudyGrid } from "@/components/CaseStudyGrid";
import { FinalCTA } from "@/components/FinalCTA";
import { FreeAuditSection } from "@/components/FreeAuditSection";
import { Hero } from "@/components/Hero";
import { PlatformsStrip } from "@/components/PlatformsStrip";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Section } from "@/components/Section";
import { caseStudies } from "@/data/case-studies";
import { builtForPortlandTeams } from "@/data/home";

export const metadata: Metadata = {
  title: "Websites and digital tools for Portland businesses",
  description:
    "Rose City Commerce builds websites, Shopify stores, and simple automations for Portland small and medium businesses.",
  keywords: [
    "Portland web developer",
    "Shopify developer Portland",
    "small business automation Portland"
  ]
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section
        title="Built for small Portland teams"
        intro="Home-grown support for teams that need practical technical help without agency layers."
      >
        <ul className="space-y-3">
          {builtForPortlandTeams.map((item) => (
            <li key={item} className="rounded-lg border border-border bg-white p-5 text-sm leading-relaxed text-slate-700 shadow-sm">
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="what-i-do" title="What I do" intro="Four service buckets, each focused on clear business outcomes.">
        <CapabilityBuckets />
      </Section>

      <Section id="how-it-works" title="How it works" intro="Simple process, clear scope, direct communication.">
        <ProcessSteps />
      </Section>

      <PlatformsStrip />

      <Section className="pt-0">
        <FreeAuditSection />
      </Section>

      <Section
        id="work-preview"
        title="Recent work"
        intro="Local, practical projects for teams in Portland, Beaverton, Hillsboro, and Vancouver WA."
      >
        <CaseStudyGrid studies={caseStudies.slice(0, 3)} />
      </Section>

      <Section>
        <FinalCTA />
      </Section>
    </>
  );
}
