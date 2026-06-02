"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";
import Link from "next/link";
import slvPortfolioImg from "@/assets/slv_portfolio_tsi.png";
import ltPortfolioImg from "@/assets/lt_portfolio_tsi_1.png";
import chettiarsImg from "@/assets/Chettiar Landing Page.png";

/* ─── Project Data ──────────────────────────────────────────── */
const projects = [
  {
    id: 1,
    name: "Sri Lakshmi Vallabha Constructions",
    slug: "sri-lakshmi-vallabha-constructions",
    industry: "Real Estate & Construction",
    tagline: "Real-estate construction website designed to improve trust, showcase projects and drive brochure enquiries.",
    gradient: "from-[#1a1a2e] via-[#16213e] to-[#0f3460]",
    accent: "from-violet/40 to-electric/20",
    tags: ["Web Design", "Development", "Lead Funnel"],
    tag: "Web Design",
    icon: "🏛️",
    image: slvPortfolioImg,
    link: "/work/sri-lakshmi-vallabha-constructions",
  },
  {
    id: 2,
    name: "Chettiar Sweet Stall",
    slug: "chettiar-sweet-stall",
    industry: "Traditional Food Brand",
    tagline: "Traditional sweets brand reimagined with modern branding and a premium digital presence.",
    gradient: "from-[#0a1628] via-[#0e1f3d] to-[#071020]",
    accent: "from-electric/40 to-sky-500/20",
    tags: ["Web Design", "Branding"],
    tag: "Web Design",
    icon: "⬡",
    image: chettiarsImg,
    link: "/work/chettiar-sweet-stall",
  },
  {
    id: 3,
    name: "LaunchTable",
    slug: "launchtable",
    industry: "Startup / Community",
    tagline: "Community-first digital campaigns crafted to build awareness, attract builders and drive founder engagement.",
    gradient: "from-[#1a0e0e] via-[#2d1515] to-[#1a0a0a]",
    accent: "from-rose-500/30 to-orange-500/20",
    tags: ["Community Marketing", "Paid Social", "Founder Community"],
    tag: "Community Marketing",
    icon: "◎",
    image: ltPortfolioImg,
    link: "/work/launchtable",
  },
];

/* ─── Portfolio Card ────────────────────────────────────────── */
function PortfolioCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <Reveal delay={index * 0.06}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="group relative h-full"
      >
        {/* Card */}
        <div
          className={`relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-gradient-to-br ${project.gradient} transition-all duration-500 group-hover:border-white/[0.16] group-hover:shadow-2xl group-hover:shadow-black/40`}
        >
          {/* Glow accent */}
          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
          />

          {/* Thumbnail */}
          <div className="relative h-52 w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
            <Image
              src={project.image}
              alt={`${project.name} - ${project.industry} project by Tessera Studio`}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />

            {/* Tags row */}
            <div className="absolute left-4 top-4 z-20 flex flex-wrap gap-1.5">
              {(project.tags ?? [project.tag]).slice(0, 2).map((t) => (
                <span key={t} className="rounded-full border border-white/[0.12] bg-black/40 px-3 py-1 text-[11px] font-semibold text-white/80 backdrop-blur-xl">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="relative z-10 p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-[11px] font-medium uppercase tracking-widest text-white/40 mb-1">
                  {project.industry}
                </p>
                <h3 className="font-display text-lg font-bold tracking-tight text-white leading-snug">
                  {project.name}
                </h3>
                <p className="mt-1.5 text-sm text-white/50 leading-relaxed line-clamp-2">
                  {project.tagline}
                </p>
              </div>
              {/* Arrow CTA */}
              <Link href={project.link} aria-label={`View ${project.name} project details`}>
                <motion.div
                  className="flex-shrink-0 flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.05] text-white/50 transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/[0.1] group-hover:text-white"
                  whileHover={{ scale: 1.1 }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

/* ─── Section ───────────────────────────────────────────────── */
export function Portfolio() {
  const brands = [
    "Sri Lakshmi Vallabha Constructions",
    "Chettiar Sweet Stall",
    "LaunchTable",
    "Oak & Grain",
  ];
  // Repeat exactly twice to match the 8-item structure of the Hero ticker (MarqueeTrust)
  const baseBrands = [...brands, ...brands];
  const loopBrands = [...baseBrands, ...baseBrands];

  return (
    <section id="portfolio" className="scroll-mt-32 section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-x-0 top-1/3 h-[500px] bg-radial-violet opacity-40 blur-3xl pointer-events-none z-[-1]" />

      <div className="site-container relative z-10">
        {/* Heading */}
        <Reveal>
          <SectionHeading
            eyebrow="Selected work"
            title={
              <>
                Our <span className="gradient-text">Portfolio</span>
              </>
            }
            description="A snapshot of the brands and systems we've built — spanning web, identity, marketing and AI."
          />
        </Reveal>

        {/* 3-card grid — equal widths on desktop */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <PortfolioCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>

      {/* Brand marquee — exact MarqueeTrust style, moved outside site-container for full width edge-to-edge layout */}
      <div className="relative mt-16 overflow-hidden border-y border-white/[0.08] bg-white/[0.025] py-5">
        {/* Fade edges — matches MarqueeTrust exactly */}
        <div className="absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-ink to-transparent" />
        <div className="absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-ink to-transparent" />
        {/* Scrolling track — doubled for seamless loop with GPU hardware acceleration */}
        <div
          className="flex w-max animate-marquee gap-4"
          style={{
            willChange: "transform",
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
            transform: "translate3d(0, 0, 0)",
          }}
        >
          {loopBrands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center gap-4 whitespace-nowrap rounded-full border border-white/[0.08] bg-white/[0.035] px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-white/[0.46]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-violet" />
              {brand}
            </div>
          ))}
        </div>
      </div>

      <div className="site-container relative z-10">
        {/* Bottom CTA strip */}
        <Reveal delay={0.35}>
          <div className="mt-12 flex items-center justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 rounded-full border border-white/[0.12] bg-white/[0.04] px-6 py-3 text-sm font-medium text-white/70 backdrop-blur transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
            >
              Start your project
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


