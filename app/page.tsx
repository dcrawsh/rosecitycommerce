import type { Metadata } from "next";
import { AuditOffer } from "@/components/AuditOffer";
import { CapabilityBuckets } from "@/components/CapabilityBuckets";
import { CaseStudyGrid } from "@/components/CaseStudyGrid";
import { CommonWins } from "@/components/CommonWins";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FinalCTA } from "@/components/FinalCTA";
import { FreeAuditSection } from "@/components/FreeAuditSection";
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

export const metadata: Metadata = {
  title: "Helping Portland businesses sell online",
  description:
    "Portland ecommerce developer for Shopify development, CRO, technical SEO, Google Ads support, and analytics cleanup.",
  keywords: [
    "Portland ecommerce developer",
    "Shopify developer Portland",
    "Portland Shopify expert",
    "Ecommerce consultant Portland"
  ]
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBand />
      <PlatformsStrip />

      <Section
        id="capabilities"
        title="Services"
        intro="Build, optimize, grow, and measure. Senior implementation for Portland businesses that need practical outcomes."
      >
        <CapabilityBuckets />
      </Section>

      <Section className="pt-0">
        <FreeAuditSection />
      </Section>

      <Section
        title="Built for Portland businesses"
        intro="I work with local companies that need ecommerce support without hiring a full in-house team."
      >
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Local retailers",
            "Coffee brands",
            "Outdoor companies",
            "Small ecommerce brands",
            "Service businesses expanding online"
          ].map((item) => (
            <article key={item} className="rounded-lg border border-border bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-charcoal-900">{item}</p>
            </article>
          ))}
        </div>
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
        title="Portland ecommerce help"
        intro="Based in Portland and working with teams in Portland, Beaverton, Hillsboro, and Vancouver, WA."
      >
        <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
          <p className="text-sm leading-relaxed text-slate-700">
            If your business is local and you want to sell online more effectively, I can support
            storefront development, conversion improvements, SEO, paid traffic efficiency, and
            analytics cleanup.
          </p>
        </div>
      </Section>

      <Section
        id="work-preview"
        title="Featured work"
        intro="Recent ecommerce work with measurable improvements in conversion, performance, and tracking quality."
      >
        <CaseStudyGrid studies={caseStudies.slice(0, 3)} />
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

      <Section className="pt-0">
        <AuditOffer />
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
