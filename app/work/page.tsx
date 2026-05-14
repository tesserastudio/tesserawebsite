import Link from "next/link";
import type { Metadata } from "next";
import { caseStudies } from "@/lib/data";

export const metadata: Metadata = {
  title: "Portfolio | Tessera Studio",
  description:
    "Selected Tessera Studio work across web design, branding, digital marketing and AI automation."
};

export default function WorkPage() {
  return (
    <section className="section-padding pt-36 sm:pt-40">
      <div className="site-container">
        <div className="max-w-3xl">
          <p className="eyebrow">Portfolio</p>
          <h1 className="mt-6 font-display text-5xl font-bold tracking-[-0.06em] sm:text-6xl">
            Work designed to move the metric, not just the moodboard.
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/[0.58]">
            A focused look at the kinds of web, brand, campaign and automation systems Tessera Studio
            builds for growth-stage teams.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              className="group overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.03] transition hover:-translate-y-1 hover:border-violet/45 hover:bg-white/[0.05]"
            >
              <div className="h-56 bg-gradient-to-br from-violet/20 via-white/[0.04] to-electric/20 p-6">
                <div className="flex h-full items-end rounded-[1.5rem] border border-white/[0.08] bg-black/35 p-5">
                  <div>
                    <span className="rounded-full border border-white/[0.12] bg-white/[0.05] px-3 py-1 text-xs font-semibold text-white/[0.7]">
                      {study.category}
                    </span>
                    <p className="mt-4 font-display text-3xl font-bold tracking-[-0.04em]">
                      {study.title}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-lg font-semibold text-white">{study.metric}</p>
                <p className="mt-3 leading-7 text-white/[0.58]">{study.summary}</p>
                <div className="mt-5 flex items-center justify-between text-sm text-white/[0.46]">
                  <span>{study.timeline}</span>
                  <span>View project {"->"}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
