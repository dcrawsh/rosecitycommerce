import { adsTrackingFix } from "@/data/case-studies/ads";
import { coffeeSubscriptions } from "@/data/case-studies/coffee";
import { contractorLeadGen } from "@/data/case-studies/contractor";
import { proServicesIntake } from "@/data/case-studies/proservices";
import { retailerSpeedCRO } from "@/data/case-studies/retailer";
import { sfccSupport } from "@/data/case-studies/sfcc";
import { CaseStudyTag } from "@/data/case-studies/types";

export type { CaseStudy, CaseStudyTag } from "@/data/case-studies/types";

export const caseStudyTags: CaseStudyTag[] = [
  "Websites",
  "Shopify",
  "SFCC",
  "Automation",
  "SEO",
  "Ads",
  "Tracking",
  "CRO"
];

export const caseStudies = [
  contractorLeadGen,
  coffeeSubscriptions,
  retailerSpeedCRO,
  proServicesIntake,
  sfccSupport,
  adsTrackingFix
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
