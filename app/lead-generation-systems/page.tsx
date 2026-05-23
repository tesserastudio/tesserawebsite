import type { Metadata } from "next";
import Link from "next/link";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Lead Generation Systems for Businesses | Tessera Studio",
  description: "Build premium lead-generation systems, landing pages, and qualified acquisition funnels in Chittoor and Andhra Pradesh. Turn traffic into predictable revenue.",
  alternates: {
    canonical: "https://tesseraweb.in/lead-generation-systems"
  }
};

export default function LeadGenerationSystemsPage() {
  return (
    <section className="relative min-h-screen overflow-hidden pb-20 pt-36 sm:pt-40">
      {/* Background glows */}
      <div className="absolute left-1/2 top-0 h-[36rem] w-[72rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet/20 via-electric/15 to-transparent blur-3xl" />
      <GlowOrb className="-left-20 top-1/4 h-80 w-80" color="violet" delay={0.4} />
      <GlowOrb className="-right-10 bottom-24 h-96 w-96" color="blue" delay={1.4} />

      <div className="site-container relative z-10">
        {/* Back Link */}
        <Link href="/" className="font-mono text-xs uppercase tracking-[0.2em] text-white/[0.46] transition hover:text-white">
          ← Back to home
        </Link>

        {/* Hero Section */}
        <div className="mt-8 max-w-4xl">
          <p className="eyebrow">Predictable Inquiries & High Conversion</p>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
            Lead Generation Systems for <span className="gradient-text">Growing Brands</span>
          </h1>
          <p className="mt-6 text-xl leading-8 text-white/[0.68] sm:text-2xl">
            Stop relying on random website traffic. We design conversion-focused landing pages, strategic lead capture layouts, and official WhatsApp enquiry flows that turn cold clicks into qualified sales opportunities.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="rounded-full bg-white px-8 py-4 text-center font-semibold text-ink transition hover:bg-[#f5f1ff]">
              Build your acquisition system
            </Link>
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="rounded-full border border-white/[0.1] bg-white/[0.04] px-8 py-4 text-center font-semibold text-white transition hover:bg-white/[0.08]">
              Get a free landing page audit
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
                  Why Standard Websites Fail to Convert Traffic
                </h2>
                <p className="leading-8 text-white/[0.62]">
                  The vast majority of business websites operating online function merely as glorified digital brochures. They display information, show generic images, and link to a passive &apos;Contact Us&apos; page with long, tedious forms. This approach asks far too much interpretative work from a cold visitor. Under ordinary circumstances, it yields average conversion rates of less than 1.5%.
                </p>
                <p className="leading-8 text-white/[0.62]">
                  At <strong>Tessera Studio</strong>, we construct highly structured lead generation ecosystems. We look at your business acquisition cycle and design clean, high-performance landing pages, custom interactive qualification selectors, and low-friction <strong>WhatsApp enquiry flows</strong>. By removing navigation noise and focusing every element on a single clear conversion target, we typically double typical industry sign-up ratios.
                </p>
              </div>
            </Reveal>

            {/* Section 2: Core Offerings */}
            <Reveal>
              <div className="space-y-6">
                <h2 className="font-display text-3xl font-bold tracking-tight text-white">
                  Acquisition Tools We Design & Deploy
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                    <p className="font-bold text-white mb-2">🎯 Conversion Landing Pages</p>
                    <p className="text-sm leading-6 text-white/[0.56]">
                      High-fidelity, distraction-free landing page architectures displaying structured messaging, key social proofs, and absolute call-to-actions that drive sign-ups.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                    <p className="font-bold text-white mb-2">💬 WhatsApp Enquiry Architecture</p>
                    <p className="text-sm leading-6 text-white/[0.56]">
                      Direct location or service WhatsApp triggers pre-filling custom inquiry text, lowering the barrier for prospects to strike up a discussion.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                    <p className="font-bold text-white mb-2">📋 Smart Multi-Step Inquiries</p>
                    <p className="text-sm leading-6 text-white/[0.56]">
                      Interactive step questionnaires qualifying lead capacity, intent, budget thresholds, and contact data, weeding out low-intent lookers.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                    <p className="font-bold text-white mb-2">📈 Analytics & Pixel Frameworks</p>
                    <p className="text-sm leading-6 text-white/[0.56]">
                      Flawless setup of Meta Pixel, Google Analytics, and custom conversion actions, ensuring your ad spend tracks direct sales outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Section 3: Benefits */}
            <Reveal>
              <div className="space-y-4">
                <h2 className="font-display text-3xl font-bold tracking-tight text-white">
                  Benefits of a Dedicated Lead Capture System
                </h2>
                <p className="leading-8 text-white/[0.62]">
                  A custom acquisition pipeline stops the guessing game and gives your sales team qualified, consistent data to follow up on:
                </p>
                <ul className="grid gap-4 mt-6 sm:grid-cols-2">
                  <li className="flex gap-3 text-sm text-white/[0.72]">
                    <span className="text-violet">✔</span>
                    <span><strong>Predictable Inquiry Flow:</strong> Translate ad spend or local searches into a steady stream of booking notifications.</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/[0.72]">
                    <span className="text-violet">✔</span>
                    <span><strong>Substantially Better Lead Mix:</strong> Multi-step screening filters out unqualified contacts, saving time.</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/[0.72]">
                    <span className="text-violet">✔</span>
                    <span><strong>Perfect Copywriting Harmony:</strong> Clear visual hierarchies and outcome-focused text that builds immediate desire.</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/[0.72]">
                    <span className="text-violet">✔</span>
                    <span><strong>Fully Measurable ROI:</strong> Track exactly which channel, ad, or keyword generated a customer contact.</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Section 4: Acquisition Process */}
            <Reveal>
              <div className="space-y-4">
                <h2 className="font-display text-3xl font-bold tracking-tight text-white">
                  How We Engineer Your Funnel
                </h2>
                <div className="space-y-6 mt-6">
                  {[
                    { step: "01", name: "Audience & Offer Alignment", desc: "We study your customer pain points and formulate a high-converting lead magnet or booking offer." },
                    { step: "02", name: "Structural Layout & Copy", desc: "We write clean, persuasive, structured copywriting and wireframe the visual conversion path." },
                    { step: "03", name: "Code Development", desc: "We translate approved concepts into Next.js React code, loading instantly under 1.5 seconds." },
                    { step: "04", name: "API Hookup & Launch", desc: "We link forms directly to CRM pipelines, configure Meta Pixel tracking events, and push the campaign live." }
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

            {/* Section 5: FAQs */}
            <Reveal>
              <div className="space-y-4">
                <h2 className="font-display text-3xl font-bold tracking-tight text-white">
                  Frequently Asked Questions (Lead Gen)
                </h2>
                <div className="divide-y divide-white/[0.08] mt-6">
                  {[
                    { q: "What is the difference between a landing page and a website?", a: "A standard website has multiple pages and links, encouraging browsing. A landing page has zero navigation links and a single dedicated focus (e.g. booked consult), converting clicks at a substantially higher rate." },
                    { q: "Do you run Meta or Google Ads for us?", a: "We design and develop the entire high-converting landing page system, tracking systems, and lead flows. We can also provide strategic copy directions and partner with ad specialists to run campaigns." },
                    { q: "How do I receive leads?", a: "Leads are routed instantly to your email, locked in a Google Sheet, or fed directly into your HubSpot/Zoho CRM database, complete with instant SMS or WhatsApp notifications." }
                  ].map((faq, i) => (
                    <div key={i} className="py-4 first:pt-0">
                      <p className="font-bold text-white">{faq.q}</p>
                      <p className="text-sm text-white/[0.56] mt-2 leading-6">{faq.a}</p>
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
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/[0.42] mb-5">Service Snapshot</p>
              <div className="space-y-4 text-sm">
                <div className="rounded-2xl bg-white/[0.03] p-4 border border-white/[0.04]">
                  <p className="text-white/[0.46] text-xs">Primary Focus</p>
                  <p className="font-semibold text-white mt-1">Landing Pages, WhatsApp Funnels, Tracking</p>
                </div>
                <div className="rounded-2xl bg-white/[0.03] p-4 border border-white/[0.04]">
                  <p className="text-white/[0.46] text-xs">Average Conversion Lift</p>
                  <p className="font-semibold text-white mt-1">Typically 1.8x to 3x higher ratios</p>
                </div>
                <div className="rounded-2xl bg-white/[0.03] p-4 border border-white/[0.04]">
                  <p className="text-white/[0.46] text-xs">Primary Tech Stack</p>
                  <p className="font-semibold text-white mt-1">Next.js, Meta Conversion API, Twilio, GA4</p>
                </div>
              </div>
            </div>

            {/* Related Services Links */}
            <div className="rounded-[2rem] border border-white/[0.08] bg-[#090909]/60 p-6 backdrop-blur-xl">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/[0.42] mb-5">Explore Other Services</p>
              <div className="grid gap-3">
                {[
                  { name: "Website Development", href: "/website-development-chittoor" },
                  { name: "AI Automation Services", href: "/ai-automation-services" },
                  { name: "Branding Services", href: "/branding-services" }
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
