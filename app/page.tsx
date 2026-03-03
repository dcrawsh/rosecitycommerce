import { AuditOffer } from "@/components/AuditOffer";
import { CapabilityBuckets } from "@/components/CapabilityBuckets";
import { CaseStudyGrid } from "@/components/CaseStudyGrid";
import { CommonWins } from "@/components/CommonWins";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import { Hero } from "@/components/Hero";
import { PlatformsStrip } from "@/components/PlatformsStrip";
import { PricingTable } from "@/components/PricingTable";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Section } from "@/components/Section";
import { TestimonialCard } from "@/components/TestimonialCard";
import { TrustBand } from "@/components/TrustBand";
import { WhoItsFor } from "@/components/WhoItsFor";
import { caseStudies } from "@/data/case-studies";
import { testimonials } from "@/data/testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBand />
      <PlatformsStrip />

      <Section
        id="capabilities"
        title="What I do"
        intro="Build + optimize + measure + scale. Senior-level implementation that works with your existing team, vendors, and roadmap."
      >
        <CapabilityBuckets />
      </Section>

      <Section className="pt-0" title="Common wins">
        <CommonWins />
      </Section>

      <Section
        id="process"
        title="Process"
        intro="Simple execution model built for speed and accountability."
      >
        <ProcessSteps />
      </Section>

      <Section
        id="work-preview"
        title="Featured work"
        intro="Case studies focused on measurable performance, conversion, and efficiency outcomes."
      >
        <CaseStudyGrid studies={caseStudies.slice(0, 3)} />
      </Section>

      <Section className="pt-0">
        <AuditOffer />
      </Section>

      <Section
        id="pricing"
        title="Packages"
        intro="Practical engagement options to match stage, urgency, and team capacity."
      >
        <PricingTable />
      </Section>

      <Section title="Testimonials">
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.quote} {...testimonial} />
          ))}
        </div>
      </Section>

      <Section title="FAQ">
        <FAQAccordion />
      </Section>

      <Section title="Qualification">
        <WhoItsFor />
      </Section>

      <Section>
        <FinalCTA />
      </Section>
    </>
  );
}
