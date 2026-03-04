import Link from "next/link";
import Image from "next/image";
import { CaseStudy } from "@/data/case-studies";

export function CaseStudyGrid({ studies }: { studies: CaseStudy[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {studies.map((study) => (
        <article key={study.slug} className="overflow-hidden rounded-lg border border-border bg-white shadow-sm">
          <Image
            alt={`${study.client} case study placeholder preview`}
            className="h-44 w-full border-b border-border object-cover"
            height={320}
            src={study.image}
            width={640}
          />
          <div className="p-5">
            <div className="mb-2 flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-paper-100 px-2 py-1 text-xs font-semibold text-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="font-sans text-xl font-bold text-forest-900">{study.title}</h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-700">
              {study.businessType}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">{study.excerpt}</p>
            <Link
              className="mt-4 inline-flex text-sm font-semibold text-copper-600 underline-offset-4 hover:underline"
              href={`/work/${study.slug}`}
            >
              View case study
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
