import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Shopify, SFCC, CRO, performance, SEO, analytics/tracking, Google Ads, and lifecycle support."
};

export default function ServicesPage() {
  return (
    <>
      <Section
        title="Services"
        intro="Problem-first execution with clear outcomes, timelines, and deliverables."
      >
        <div className="space-y-5">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Section>
    </>
  );
}
