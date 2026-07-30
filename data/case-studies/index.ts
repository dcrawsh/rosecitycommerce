import { cleanStrengthShopify } from "@/data/case-studies/cleanstrength";
import { contractorLeadGen } from "@/data/case-studies/contractor";
import { eb5gRecovery } from "@/data/case-studies/eb5g";
import { fenderPdpMediaGallery } from "@/data/case-studies/fender-gallery";
import { fenderPlayOnboardingExperimentation } from "@/data/case-studies/fender-play-onboarding";
import { fenderPerformanceOptimization } from "@/data/case-studies/fender-performance";
import { fenderProductSyncPlatform } from "@/data/case-studies/fender-product-sync";
import { softArcadeGames } from "@/data/case-studies/soft-arcade-games";
import { tacoMachineBilingualSite } from "@/data/case-studies/tacomachine";
import { upperLeftIndiePlatform } from "@/data/case-studies/upperleftindie";
import { CaseStudyTag } from "@/data/case-studies/types";

export type { CaseStudy, CaseStudyTag } from "@/data/case-studies/types";

export const caseStudyTags: CaseStudyTag[] = [
  "Shopify Plus",
  "Ecommerce",
  "Architecture",
  "GraphQL",
  "AWS Lambda",
  "Performance",
  "Core Web Vitals",
  "Subscriptions",
  "Experimentation",
  "Automation",
  "React",
  "Next.js"
];

export const caseStudies = [
  fenderProductSyncPlatform,
  fenderPerformanceOptimization,
  cleanStrengthShopify,
  fenderPdpMediaGallery,
  fenderPlayOnboardingExperimentation,
  softArcadeGames,
  contractorLeadGen,
  eb5gRecovery,
  tacoMachineBilingualSite,
  upperLeftIndiePlatform
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
