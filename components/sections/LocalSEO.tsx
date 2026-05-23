"use client";

import { Reveal } from "@/components/ui/Reveal";
import { GlowOrb } from "@/components/ui/GlowOrb";
import Link from "next/link";

const industries = [
  { icon: "🏠", label: "Real Estate" },
  { icon: "🏥", label: "Clinics & Healthcare" },
  { icon: "🎓", label: "Colleges & Coaching" },
  { icon: "☕", label: "Cafés & Restaurants" },
  { icon: "🏗️", label: "Construction & Infra" },
  { icon: "🛍️", label: "Retail & E-commerce" },
  { icon: "💼", label: "Service Businesses" },
  { icon: "🚀", label: "Startups" },
];

const localServices = [
  { category: "Web Design & Dev", items: ["Business websites", "Landing pages", "E-commerce experiences", "Portfolio & personal sites"] },
  { category: "Industry Solutions", items: ["Real estate showcase sites", "College & education portals", "Clinic & healthcare websites", "Café & restaurant systems"] },
  { category: "AI & Automations", items: ["AI receptionist systems", "WhatsApp lead flows", "CRM & lead management workflows", "Business process automation"] },
  { category: "Branding Systems", items: ["Logo design suites", "Brand identity guides", "Social creative structures", "Content & narrative models"] }
];

export function LocalSEO() {
  return (
    <section className="section-padding relative overflow-hidden border-t border-white/[0.04] bg-[#080808]/40">
      <GlowOrb className="right-10 top-1/4 h-80 w-80" color="violet" delay={0.6} />
      
      <div className="site-container relative z-10">
        {/* Main content grid */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Reveal>
            <p className="eyebrow">Capabilities & Systems</p>
            <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-[-0.05em] sm:text-5xl lg:text-6xl text-white">
              Growth-Focused Systems for Modern Businesses
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/[0.76]">
              <strong>Tessera Studio</strong> is a digital studio specializing in premium website design, high-performance web development, AI automation workflows, and strategic lead-generation systems. We work with ambitious businesses who want to elevate their brand credibility, streamline their operations, and scale with predictable growth.
            </p>
            <p className="mt-4 text-base leading-7 text-white/[0.56]">
              Every digital asset we build is meticulously crafted for speed, search visibility, and conversion performance — custom-designed to match your brand&apos;s unique narrative and outperform competitors.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link 
                href="#services"
                className="rounded-full border border-violet/30 bg-violet/10 px-5 py-2.5 text-sm font-semibold text-violet transition hover:bg-violet/20 hover:text-white"
              >
                Explore Our Services →
              </Link>
              <Link 
                href="/contact"
                className="rounded-full border border-white/[0.1] bg-white/[0.02] px-5 py-2.5 text-sm font-semibold text-white/80 transition hover:bg-white/[0.05] hover:text-white"
              >
                Start a project
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-xl sm:p-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-white/[0.42] mb-6">What we offer local brands</h3>
              <div className="grid gap-6 sm:grid-cols-2">
                {localServices.map((group) => (
                  <div key={group.category} className="space-y-3">
                    <p className="text-sm font-bold text-white/[0.88] tracking-tight">{group.category}</p>
                    <ul className="grid gap-2">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-xs text-white/[0.52]">
                          <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-violet" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Industries We Serve */}
        <Reveal delay={0.2}>
          <div className="mt-20">
            <p className="eyebrow text-center">Who We Partner With</p>
            <h3 className="mt-4 text-center font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Industries We Work With
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-7 text-white/[0.52] sm:text-base">
              Whether you run a high-growth startup, a healthcare provider, a real estate group, or a specialized service brand — we design digital tools built for your specific audience and growth goals.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {industries.map((ind) => (
                <div
                  key={ind.label}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-5 text-center backdrop-blur-sm transition hover:border-violet/30 hover:bg-violet/5"
                >
                  <span className="text-3xl">{ind.icon}</span>
                  <span className="text-sm font-semibold text-white/[0.72] transition group-hover:text-white">{ind.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
