import { lumen } from "@/data/case-studies/lumen";
import { northstar } from "@/data/case-studies/northstar";
import { trailhouse } from "@/data/case-studies/trailhouse";
import { CaseStudyTag } from "@/data/case-studies/types";

export type { CaseStudy, CaseStudyTag } from "@/data/case-studies/types";

export const caseStudyTags: CaseStudyTag[] = [
  "Shopify",
  "SFCC",
  "CRO",
  "SEO",
  "Ads",
  "Analytics"
];

export const caseStudies = [trailhouse, northstar, lumen];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
