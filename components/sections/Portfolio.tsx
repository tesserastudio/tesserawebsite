"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";
import Link from "next/link";

/* ─── Project Data ──────────────────────────────────────────── */
const projects = [
  {
    id: 1,
    name: "Urban Nest Realty",
    slug: "urban-nest-realty",
    industry: "Real Estate",
    tagline: "Premium property showcase designed to convert high-intent buyers in Andhra Pradesh with a seamless WhatsApp enquiry flow.",
    gradient: "from-[#1a1a2e] via-[#16213e] to-[#0f3460]",
    accent: "from-violet/40 to-electric/20",
    tag: "Web Design",
    icon: "🏛️",
    featured: true,
    image: "/images/portfolio/tessera-studio-website-development-chittoor.png",
    link: "/work/urban-nest-realty",
  },
  {
    id: 2,
    name: "Bloom Table Café",
    slug: "bloom-table-campaign",
    industry: "Restaurant & F&B",
    tagline: "Social-first campaign system and localized cafe website built to drive repeat weekday traffic in South India.",
    gradient: "from-[#1a0e0e] via-[#2d1515] to-[#1a0a0a]",
    accent: "from-rose-500/30 to-orange-500/20",
    tag: "Digital Marketing",
    icon: "☕",
    featured: false,
    image: "/images/portfolio/tessera-studio-cafe-marketing-chittoor.png",
    link: "/work/bloom-table-campaign",
  },
  {
    id: 3,
    name: "Lattice Atelier",
    slug: "lattice-brand-system",
    industry: "Branding",
    tagline: "Expressive visual identity design and responsive logo marks built to establish a premium brand from day one.",
    gradient: "from-[#0d0d1a] via-[#12122a] to-[#0a0a1f]",
    accent: "from-violet/50 to-fuchsia-500/30",
    tag: "Brand Identity",
    icon: "◈",
    featured: false,
    image: "/images/portfolio/tessera-studio-brand-identity-system.png",
    link: "/work/lattice-brand-system",
  },
  {
    id: 4,
    name: "OrbitStack",
    slug: "orbitstack-launch",
    industry: "Startup / SaaS",
    tagline: "Conversion-optimized startup landing page driving 41% demo conversion lift with highly interactive UI flows.",
    gradient: "from-[#0a1628] via-[#0e1f3d] to-[#071020]",
    accent: "from-electric/40 to-sky-500/20",
    tag: "Web + Branding",
    icon: "⬡",
    featured: true,
    image: "/images/portfolio/tessera-studio-saas-branding-and-design.png",
    link: "/work/orbitstack-launch",
  },
  {
    id: 5,
    name: "Northline AI Receptionist",
    slug: "always-on-ai-receptionist",
    industry: "AI Automation",
    tagline: "Automated clinic follow-up and 24/7 lead qualification system reducing manual follow-up load by 58%.",
    gradient: "from-[#0a1a0a] via-[#0d1f0d] to-[#071207]",
    accent: "from-emerald-500/30 to-electric/20",
    tag: "AI Automation",
    icon: "◎",
    featured: false,
    image: "/images/portfolio/tessera-studio-ai-automation-services.png",
    link: "/work/always-on-ai-receptionist",
  },
];

/* ─── Portfolio Card ────────────────────────────────────────── */
function PortfolioCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const isFeatured = project.featured;

  return (
    <Reveal delay={index * 0.06} className={isFeatured ? "lg:col-span-2" : "lg:col-span-1"}>
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
              alt={`${project.name} - ${project.industry} system by Tessera Studio`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Category pill */}
            <span className="absolute left-4 top-4 z-20 rounded-full border border-white/[0.12] bg-black/40 px-3 py-1 text-[11px] font-semibold text-white/80 backdrop-blur-xl">
              {project.tag}
            </span>
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
              <Link href={project.link}>
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
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="portfolio" className="scroll-mt-32 section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-x-0 top-1/3 h-[500px] bg-radial-violet opacity-40 blur-3xl pointer-events-none" />

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

        {/* Featured row — 2 cards side by side */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {featured.map((p, i) => (
            <PortfolioCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* Remaining 3 cards */}
        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <PortfolioCard key={p.id} project={p} index={i + featured.length} />
          ))}
        </div>

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
