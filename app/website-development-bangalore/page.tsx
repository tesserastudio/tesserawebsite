import type { Metadata } from "next";
import Link from "next/link";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Website Development Studio in Bangalore | Tessera Studio",
  description: "Tessera Studio is a Bangalore-based website development and AI automation studio helping businesses build premium websites and lead-generation systems.",
  alternates: {
    canonical: "https://tesseraweb.in/website-development-bangalore"
  }
};

export default function BangaloreWebsiteDevelopmentPage() {
  return (
    <section className="relative min-h-screen overflow-hidden pb-20 pt-36 sm:pt-40">
      {/* Background glow orbs */}
      <div className="absolute left-1/2 top-0 h-[36rem] w-[72rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet/20 via-electric/15 to-transparent blur-3xl" />
      <GlowOrb className="-left-20 top-1/4 h-80 w-80" color="violet" delay={0.4} />
      <GlowOrb className="-right-10 bottom-24 h-96 w-96" color="blue" delay={1.1} />

      <div className="site-container relative z-10">
        {/* Back Link */}
        <Link href="/" className="font-mono text-xs uppercase tracking-[0.2em] text-white/[0.46] transition hover:text-white">
          ← Back to home
        </Link>

        {/* Hero Section */}
        <div className="mt-8 max-w-4xl">
          <p className="eyebrow">Bangalore&apos;s Premium Digital Partner</p>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
            Website Development Studio in <span className="gradient-text">Bangalore</span>
          </h1>
          <p className="mt-6 text-xl leading-8 text-white/[0.68] sm:text-2xl">
            We build high-performance business websites, conversion funnels, and intelligent AI automation systems designed to help modern brands look exceptionally premium and generate consistent growth.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="rounded-full bg-white px-8 py-4 text-center font-semibold text-ink transition hover:bg-[#f5f1ff]">
              Start your website project
            </Link>
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="rounded-full border border-white/[0.1] bg-white/[0.04] px-8 py-4 text-center font-semibold text-white transition hover:bg-white/[0.08]">
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* 2-Column Content Layout */}
        <div className="mt-20 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          
          {/* Main Copy */}
          <div className="space-y-12">
            
            {/* Section 1: Introduction */}
            <Reveal>
              <div className="space-y-4">
                <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Engineering Premium Websites for Ambitious Brands
                </h2>
                <p className="leading-8 text-white/[0.62]">
                  Bangalore is the innovation capital of India, and your digital presence must reflect that standard. Whether you run a high-growth SaaS startup in HSR Layout, a venture capital firm, a healthcare provider, or a premium service business, your website is the primary trust signal for your brand. 
                </p>
                <p className="leading-8 text-white/[0.62]">
                  We combine premium aesthetics, advanced front-end engineering (using React and Next.js), and scientific conversion logic. The result is a lightning-fast digital asset optimized for maximum search engine performance, absolute reliability, and seamless user experiences.
                </p>
              </div>
            </Reveal>

            {/* Section 2: Industry Solutions */}
            <Reveal>
              <div className="space-y-6">
                <h2 className="font-display text-3xl font-bold tracking-tight text-white">
                  Tailored Systems Built for Bangalore&apos;s Modern Industries
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                    <p className="font-bold text-white mb-2">🚀 Startups &amp; SaaS</p>
                    <p className="text-sm leading-6 text-white/[0.56]">
                      Conversion-focused launch landing pages, custom interactive demo sections, high-performing lead workflows, and seamless integrations with modern CRM and automation software.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                    <p className="font-bold text-white mb-2">🏢 Corporate &amp; Real Estate</p>
                    <p className="text-sm leading-6 text-white/[0.56]">
                      Premium brand portfolios, editorial property layout discovery tools, dynamic interactive maps, and high-security customer portals built with modern frameworks.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                    <p className="font-bold text-white mb-2">🩺 Healthcare &amp; Clinics</p>
                    <p className="text-sm leading-6 text-white/[0.56]">
                      Polished medical group sites, clear practitioner layouts, patient booking and service catalogs, and instant WhatsApp inquiry paths.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                    <p className="font-bold text-white mb-2">💼 High-End Service Agencies</p>
                    <p className="text-sm leading-6 text-white/[0.56]">
                      Stunning interactive portfolio showcases, clear service breakdowns, structured case studies, and integrated booking tools that capture premium business leads.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Section 3: Key Benefits */}
            <Reveal>
              <div className="space-y-4">
                <h2 className="font-display text-3xl font-bold tracking-tight text-white">
                  Why Modern Brands Partner with Tessera Studio
                </h2>
                <p className="leading-8 text-white/[0.62]">
                  We eliminate the complexity of website creation, handling strategy, copywriting, optimization, and development under a single premium workspace. Here is our baseline standard for every project:
                </p>
                <ul className="grid gap-4 mt-6 sm:grid-cols-2">
                  <li className="flex gap-3 text-sm text-white/[0.72]">
                    <span className="text-violet">✔</span>
                    <span><strong>World-Class Visual Design:</strong> Sleek glassmorphism, responsive micro-interactions, and modern typographic hierarchy.</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/[0.72]">
                    <span className="text-violet">✔</span>
                    <span><strong>Advanced Speed Tuning:</strong> Server-side rendering (SSR), strict core web vitals compliance, and lightning-fast loading.</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/[0.72]">
                    <span className="text-violet">✔</span>
                    <span><strong>AI Automation Native:</strong> Direct integration with WhatsApp automation, automated email sequences, and CRM platforms.</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/[0.72]">
                    <span className="text-violet">✔</span>
                    <span><strong>Robust Local &amp; Tech SEO:</strong> Built-in semantic layouts, canonical headers, and structured LocalBusiness schemas.</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Section 4: Process */}
            <Reveal>
              <div className="space-y-4">
                <h2 className="font-display text-3xl font-bold tracking-tight text-white">
                  Our Execution Roadmap
                </h2>
                <div className="space-y-6 mt-6">
                  {[
                    { step: "01", name: "Deep Discovery & Audit", desc: "We align on your business targets, marketing funnels, and current conversion blockers." },
                    { step: "02", name: "Interactive Prototyping", desc: "We design premium mockups showing exactly how your desktop and mobile assets will look and behave." },
                    { step: "03", name: "Next.js Engineering", desc: "We construct the interface with clean, production-grade Next.js/Tailwind code with smooth web animations." },
                    { step: "04", name: "QA & Global Launch", desc: "We complete indexing checks, verify schema structured data, optimize images, and deploy to a high-speed CDN." }
                  ].map((p) => (
                    <div key={p.step} className="flex gap-4 items-start">
                      <span className="grid h-10 w-10 place-items-center shrink-0 rounded-xl bg-violet/20 font-mono text-sm font-bold text-violet">
                        {p.step}
                      </span>
                      <div>
                        <p className="font-bold text-white">{p.name}</p>
                        <p className="text-sm text-white/[0.56] mt-1">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

          </div>

          {/* Sidebar Snapshot */}
          <div className="sticky top-28 space-y-6">
            
            {/* Snapshot Card */}
            <div className="rounded-[2rem] border border-white/[0.08] bg-[#090909]/60 p-6 backdrop-blur-xl">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/[0.42] mb-5">Studio Snapshot</p>
              <div className="space-y-4 text-sm">
                <div className="rounded-2xl bg-white/[0.03] p-4 border border-white/[0.04]">
                  <p className="text-white/[0.46] text-xs">Primary Tech Stack</p>
                  <p className="font-semibold text-white mt-1">Next.js, React, Tailwind, Framer Motion</p>
                </div>
                <div className="rounded-2xl bg-white/[0.03] p-4 border border-white/[0.04]">
                  <p className="text-white/[0.46] text-xs">Service Radius</p>
                  <p className="font-semibold text-white mt-1">Bangalore, Chittoor, and Pan-India</p>
                </div>
                <div className="rounded-2xl bg-white/[0.03] p-4 border border-white/[0.04]">
                  <p className="text-white/[0.46] text-xs">Specializations</p>
                  <p className="font-semibold text-white mt-1">Web Dev, AI Automations, Brand Systems</p>
                </div>
              </div>
            </div>

            {/* Related Links */}
            <div className="rounded-[2rem] border border-white/[0.08] bg-[#090909]/60 p-6 backdrop-blur-xl">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/[0.42] mb-5">Explore Other Services</p>
              <div className="grid gap-3">
                {[
                  { name: "AI Automation Services", href: "/ai-automation-services" },
                  { name: "Branding Services", href: "/branding-services" },
                  { name: "Lead Generation Systems", href: "/lead-generation-systems" }
                ].map((s) => (
                  <Link 
                    key={s.href} 
                    href={s.href} 
                    className="flex items-center justify-between rounded-xl bg-white/[0.02] p-3 border border-white/[0.04] text-xs font-semibold text-white/70 hover:text-white hover:border-violet/40 transition duration-300"
                  >
                    <span>{s.name}</span>
                    <span>→</span>
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
