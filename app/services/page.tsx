import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { services, type ServiceCategory } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Portland ecommerce development and growth services: Shopify development, CRO, SEO, Google Ads, analytics, and performance.",
  keywords: [
    "Portland ecommerce developer",
    "Shopify developer Portland",
    "Portland Shopify expert",
    "Ecommerce consultant Portland"
  ]
};

const groups: ServiceCategory[] = ["Build", "Optimize", "Grow", "Measure"];

export default function ServicesPage() {
  return (
    <Section
      title="Services"
      intro="Outcome-focused support for Portland businesses that want better ecommerce performance."
    >
      <div className="space-y-10">
        {groups.map((group) => {
          const groupItems = services.filter((service) => service.category === group);
          return (
            <section key={group}>
              <h2 className="font-sans text-2xl font-bold text-forest-900">{group}</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {groupItems.map((service) => (
                  <ServiceCard key={service.slug} service={service} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </Section>
  );
}
