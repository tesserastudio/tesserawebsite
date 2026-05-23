import type { Metadata } from "next";
import Link from "next/link";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Branding Services for Businesses | Tessera Studio",
  description: "Establish a premium brand identity that commands authority and trust. We design distinctive logo marks, typography, color palettes, and social systems in Chittoor.",
  alternates: {
    canonical: "https://tesseraweb.in/branding-services"
  }
};

export default function BrandingServicesPage() {
  return (
    <section className="relative min-h-screen overflow-hidden pb-20 pt-36 sm:pt-40">
      {/* Background glows */}
      <div className="absolute left-1/2 top-0 h-[36rem] w-[72rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet/20 via-electric/15 to-transparent blur-3xl" />
      <GlowOrb className="-left-20 top-1/4 h-80 w-80" color="violet" delay={0.5} />
      <GlowOrb className="-right-10 bottom-24 h-96 w-96" color="blue" delay={1.3} />

      <div className="site-container relative z-10">
        {/* Back Link */}
        <Link href="/" className="font-mono text-xs uppercase tracking-[0.2em] text-white/[0.46] transition hover:text-white">
          ← Back to home
        </Link>

        {/* Hero Section */}
        <div className="mt-8 max-w-4xl">
          <p className="eyebrow">Distinctive Visual Systems & Authority</p>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
            Premium Branding Services for <span className="gradient-text">Ambitious Businesses</span>
          </h1>
          <p className="mt-6 text-xl leading-8 text-white/[0.68] sm:text-2xl">
            Generic styling doesn&apos;t convert. We construct highly distinctive logo marks, customized color systems, premium typography, and launch toolkits designed to make your brand impossible to ignore.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="rounded-full bg-white px-8 py-4 text-center font-semibold text-ink transition hover:bg-[#f5f1ff]">
              Build your premium brand
            </Link>
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="rounded-full border border-white/[0.1] bg-white/[0.04] px-8 py-4 text-center font-semibold text-white transition hover:bg-white/[0.08]">
              Chat with our creative director
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
                  Why Premium Visual Identity Drives Enterprise Value
                </h2>
                <p className="leading-8 text-white/[0.62]">
                  Branding is not just a cosmetic asset or decorative element—it is the direct anchor of customer trust, pricing power, and market authority. When a prospective client interacts with your business card, social feeds, or web platforms, they form a subconscious judgment about your quality of work within 50 milliseconds.
                </p>
                <p className="leading-8 text-white/[0.62]">
                  If your typography looks unrefined and your assets lack visual discipline, buyers immediately perceive high risk and expect bargain-basement pricing. At <strong>Tessera Studio</strong>, we reverse this paradigm. We structure expressive, consistent, and meticulously crafted brand identity systems. We give your local business in <strong>Chittoor</strong> or startup in <strong>Andhra Pradesh</strong> the design polish of a global brand, commanding attention and earning instant credibility.
                </p>
              </div>
            </Reveal>

            {/* Section 2: Branding Elements */}
            <Reveal>
              <div className="space-y-6">
                <h2 className="font-display text-3xl font-bold tracking-tight text-white">
                  Visual Assets We Strategize and Design
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                    <p className="font-bold text-white mb-2">◈ Logo Systems & Sub-marks</p>
                    <p className="text-sm leading-6 text-white/[0.56]">
                      Memorable, geometric primary logo systems, responsive layouts for smartphone screens, favicon files, and unique stamp sub-marks.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                    <p className="font-bold text-white mb-2">🎨 Expressive Color Palettes</p>
                    <p className="text-sm leading-6 text-white/[0.56]">
                      Curated color systems utilizing HSL tailored colors (electric violet, deep ink, steel blue) that establish distinct psychological trust signals.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                    <p className="font-bold text-white mb-2">✍ Typography Guidelines</p>
                    <p className="text-sm leading-6 text-white/[0.56]">
                      Clean, editorial typography scale rules integrating geometric displays (Syne, DM Sans) for premium titles and highly readable layouts for body blocks.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                    <p className="font-bold text-white mb-2">📸 Social Creative Toolkits</p>
                    <p className="text-sm leading-6 text-white/[0.56]">
                      Polished, conversion-oriented Canva or Figma template files ensuring your Instagram and LinkedIn feeds remain unified and distinct.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Section 3: Branding Benefits */}
            <Reveal>
              <div className="space-y-4">
                <h2 className="font-display text-3xl font-bold tracking-tight text-white">
                  Key Benefits of Premium Brand Identity
                </h2>
                <p className="leading-8 text-white/[0.62]">
                  A cohesive, premium brand framework serves as a massive business accelerator, aligning your internal team and converting cold traffic effortlessly:
                </p>
                <ul className="grid gap-4 mt-6 sm:grid-cols-2">
                  <li className="flex gap-3 text-sm text-white/[0.72]">
                    <span className="text-violet">✔</span>
                    <span><strong>Command Pricing Power:</strong> Premium aesthetics justify higher pricing points, lowering pricing objections instantly.</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/[0.72]">
                    <span className="text-violet">✔</span>
                    <span><strong>Build Instant Trust:</strong> Clean, uncompromised visual systems eliminate buyer skepticism, elevating authority.</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/[0.72]">
                    <span className="text-violet">✔</span>
                    <span><strong>100% Cohesive Layout:</strong> Maintain complete brand consistency across websites, business profiles, ads, and flyers.</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/[0.72]">
                    <span className="text-violet">✔</span>
                    <span><strong>Frictionless Scale:</strong> Hand your internal team clear rules and templates, accelerating content output.</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Section 4: Design Process */}
            <Reveal>
              <div className="space-y-4">
                <h2 className="font-display text-3xl font-bold tracking-tight text-white">
                  Our Identity Design Process
                </h2>
                <div className="space-y-6 mt-6">
                  {[
                    { step: "01", name: "Visual Discovery & Moodboards", desc: "We align on aesthetics, competitive positioning, and examine styling directions." },
                    { step: "02", name: "Logo & Asset Concepts", desc: "We sketch, iterate, and refine distinct geometric shapes to find your ideal primary logo mark." },
                    { step: "03", name: "Systemization & Typography", desc: "We pair your logo with robust primary colors, typography scales, and geometric patterns." },
                    { step: "04", name: "Asset Handoff & Launch Kit", desc: "We export all asset components in WebP, PNG, and SVG vector formats, delivering comprehensive brand guidelines." }
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
                  Frequently Asked Questions (Branding)
                </h2>
                <div className="divide-y divide-white/[0.08] mt-6">
                  {[
                    { q: "What deliverables do I get in the brand identity system?", a: "You receive a primary logo, sub-marks, primary colors, typography rules, custom geometric tile pattern layouts, vector files, social templates, and a complete PDF stylebook." },
                    { q: "Do you redesign existing company logos?", a: "Yes, we handle complete brand modernizations, keeping the recognizable core heritage of your brand while significantly elevating visual precision." },
                    { q: "Will I have full rights to my branding files?", a: "Absolutely. Once the project is complete and finalized, you receive 100% intellectual property ownership of all design deliverables." }
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
                  <p className="font-semibold text-white mt-1">Logo, Color Scale, Typography, Stylebook</p>
                </div>
                <div className="rounded-2xl bg-white/[0.03] p-4 border border-white/[0.04]">
                  <p className="text-white/[0.46] text-xs">Primary Tools</p>
                  <p className="font-semibold text-white mt-1">Figma, Adobe Creative Suite</p>
                </div>
                <div className="rounded-2xl bg-white/[0.03] p-4 border border-white/[0.04]">
                  <p className="text-white/[0.46] text-xs">Assets Exported</p>
                  <p className="font-semibold text-white mt-1">SVG, SVG Web, WebP, PNG, PDF Stylebook</p>
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
