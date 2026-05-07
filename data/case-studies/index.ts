import { adsTrackingFix } from "@/data/case-studies/ads";
import { cleanStrengthShopify } from "@/data/case-studies/cleanstrength";
import { coffeeSubscriptions } from "@/data/case-studies/coffee";
import { contractorLeadGen } from "@/data/case-studies/contractor";
import { eb5gRecovery } from "@/data/case-studies/eb5g";
import { proServicesIntake } from "@/data/case-studies/proservices";
import { retailerSpeedCRO } from "@/data/case-studies/retailer";
import { sfccSupport } from "@/data/case-studies/sfcc";
import { tacoMachineBilingualSite } from "@/data/case-studies/tacomachine";
import { upperLeftIndiePlatform } from "@/data/case-studies/upperleftindie";
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
  "CRO",
  "Merchandising",
  "Subscriptions",
  "Ecommerce Operations",
  "WordPress",
  "WP-CLI",
  "Debugging",
  "Infrastructure",
  "Maintenance",
  "Next.js",
  "Content",
  "Music",
  "Editorial",
  "Branding",
  "Localization",
  "Small Business",
  "Responsive Design"
];

export const caseStudies = [
  contractorLeadGen,
  cleanStrengthShopify,
  eb5gRecovery,
  upperLeftIndiePlatform,
  tacoMachineBilingualSite,
  coffeeSubscriptions,
  retailerSpeedCRO,
  proServicesIntake,
  sfccSupport,
  adsTrackingFix
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
