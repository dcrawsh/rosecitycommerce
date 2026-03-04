import type { Metadata } from "next";
import Link from "next/link";
import { CaseStudyGrid } from "@/components/CaseStudyGrid";
import { Section } from "@/components/Section";
import { caseStudies, caseStudyTags, type CaseStudyTag } from "@/data/case-studies";
import { cn } from "@/components/utils";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Local and practical web, ecommerce, automation, and tracking projects for Portland-area businesses.",
  keywords: ["Portland web developer", "Shopify developer Portland", "small business automation Portland"]
};

export default async function WorkPage({
  searchParams
}: {
  searchParams: Promise<{ tag?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const selectedTag = resolvedSearchParams.tag as CaseStudyTag | undefined;
  const filtered =
    selectedTag && caseStudyTags.includes(selectedTag)
      ? caseStudies.filter((study) => study.tags.includes(selectedTag))
      : caseStudies;

  return (
    <Section
      titleAs="h1"
      title="Work"
      intro="Six sample case studies showing practical outcomes for small and medium teams in Portland and nearby cities."
    >
      <div className="mb-6 flex flex-wrap gap-2">
        <Link
          href="/work"
          className={cn(
            "rounded-full border px-3 py-1 text-sm font-semibold",
            !selectedTag
              ? "border-copper-500 bg-copper-500 text-paper-50"
              : "border-border bg-white text-charcoal-900"
          )}
        >
          All
        </Link>
        {caseStudyTags.map((tag) => (
          <Link
            key={tag}
            href={`/work?tag=${encodeURIComponent(tag)}`}
            className={cn(
              "rounded-full border px-3 py-1 text-sm font-semibold",
              selectedTag === tag
                ? "border-copper-500 bg-copper-500 text-paper-50"
                : "border-border bg-white text-charcoal-900"
            )}
          >
            {tag}
          </Link>
        ))}
      </div>
      <CaseStudyGrid studies={filtered} />
      {filtered.length === 0 ? <p className="mt-6 text-sm text-slate-700">No studies for that filter yet.</p> : null}
    </Section>
  );
}
