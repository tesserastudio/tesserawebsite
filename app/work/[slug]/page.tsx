import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudyBySlug } from "@/lib/data";

type CaseStudyPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: CaseStudyPageProps): Metadata {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    return {
      title: "Project Not Found | Tessera Studio"
    };
  }

  return {
    title: `${study.title} | Tessera Studio`,
    description: study.summary
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    notFound();
  }

  return (
    <section className="section-padding pt-36 sm:pt-40">
      <div className="site-container">
        <Link href="/work" className="font-mono text-xs uppercase tracking-[0.2em] text-white/[0.46] transition hover:text-white">
          Back to portfolio
        </Link>

        <div className="mt-6 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="eyebrow">{study.category}</p>
            <h1 className="mt-6 font-display text-5xl font-bold tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              {study.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/[0.6]">{study.overview}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {study.services.map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-white/[0.1] bg-white/[0.04] px-4 py-2 text-sm text-white/[0.68]"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-[2rem] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/[0.42]">Project snapshot</p>
            <div className="mt-5 grid gap-4">
              <div className="rounded-3xl border border-white/[0.08] bg-white/[0.035] p-4">
                <p className="text-sm text-white/[0.46]">Client</p>
                <p className="mt-2 text-lg font-semibold">{study.client}</p>
              </div>
              <div className="rounded-3xl border border-white/[0.08] bg-white/[0.035] p-4">
                <p className="text-sm text-white/[0.46]">Timeline</p>
                <p className="mt-2 text-lg font-semibold">{study.timeline}</p>
              </div>
              <div className="rounded-3xl border border-white/[0.08] bg-white/[0.035] p-4">
                <p className="text-sm text-white/[0.46]">Headline result</p>
                <p className="mt-2 text-lg font-semibold">{study.metric}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-gradient-to-br from-violet/18 via-white/[0.04] to-electric/18 p-6 sm:p-8">
          <div className="rounded-[2rem] border border-white/[0.08] bg-black/35 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-3">
              {study.stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl border border-white/[0.08] bg-white/[0.04] p-5">
                  <p className="font-display text-3xl font-bold tracking-[-0.04em]">{stat.value}</p>
                  <p className="mt-2 text-sm text-white/[0.48]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <article className="glass-card rounded-[2rem] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/[0.42]">Challenge</p>
            <p className="mt-5 leading-8 text-white/[0.68]">{study.challenge}</p>
          </article>
          <article className="glass-card rounded-[2rem] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/[0.42]">Approach</p>
            <p className="mt-5 leading-8 text-white/[0.68]">{study.solution}</p>
          </article>
          <article className="glass-card rounded-[2rem] p-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/[0.42]">Outcome</p>
            <p className="mt-5 leading-8 text-white/[0.68]">{study.outcome}</p>
          </article>
        </div>

        <div className="mt-16 rounded-[2rem] border border-white/[0.08] bg-white/[0.03] p-6 sm:p-8">
          <p className="eyebrow">Next move</p>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
            Want this level of clarity for your own brand?
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-white/[0.58]">
            Tessera Studio combines strategy, front-end polish and growth thinking so the final system
            looks premium and performs like it means it.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="rounded-full bg-white px-6 py-3 font-semibold text-ink transition hover:bg-[#f5f1ff]"
            >
              Start your project
            </Link>
            <Link
              href="/work"
              className="rounded-full border border-white/[0.1] px-6 py-3 font-semibold text-white transition hover:bg-white/[0.05]"
            >
              Browse more work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
