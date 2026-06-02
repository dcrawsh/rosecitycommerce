import { cleanStrengthShopify } from "@/data/case-studies/cleanstrength";
import { contractorLeadGen } from "@/data/case-studies/contractor";
import { eb5gRecovery } from "@/data/case-studies/eb5g";
import { fenderPdpMediaGallery } from "@/data/case-studies/fender-gallery";
import { fenderPerformanceOptimization } from "@/data/case-studies/fender-performance";
import { fenderProductSyncPlatform } from "@/data/case-studies/fender-product-sync";
import { tacoMachineBilingualSite } from "@/data/case-studies/tacomachine";
import { upperLeftIndiePlatform } from "@/data/case-studies/upperleftindie";
import { CaseStudyTag } from "@/data/case-studies/types";

export type { CaseStudy, CaseStudyTag } from "@/data/case-studies/types";

export const caseStudyTags: CaseStudyTag[] = [
  "Websites",
  "Shopify",
  "Automation",
  "React",
  "Performance",
  "SEO",
  "WordPress",
  "Next.js",
  "Content",
  "Small Business"
];

export const caseStudies = [
  fenderPdpMediaGallery,
  fenderProductSyncPlatform,
  fenderPerformanceOptimization,
  contractorLeadGen,
  cleanStrengthShopify,
  eb5gRecovery,
  upperLeftIndiePlatform,
  tacoMachineBilingualSite
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
