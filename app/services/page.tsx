import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { servicePackages } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites, ecommerce, automations, and growth measurement support for Portland small businesses.",
  keywords: [
    "Portland web developer",
    "Shopify developer Portland",
    "small business automation Portland"
  ]
};

export default function ServicesPage() {
  return (
    <Section
      titleAs="h1"
      title="Services"
      intro="Four practical ways I help small and medium Portland teams launch faster, sell more, and run smoother."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {servicePackages.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </Section>
  );
}
