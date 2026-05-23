import type { Metadata } from "next";
import Link from "next/link";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Website Development in Chittoor | Tessera Studio",
  description: "Tessera Studio is a Bangalore-based digital studio founded by a Chittoor native, helping Chittoor businesses build premium websites, branding, automation, and lead-generation systems.",
  alternates: {
    canonical: "https://tesseraweb.in/website-development-chittoor"
  }
};

export default function WebsiteDevelopmentPage() {
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
          <p className="eyebrow">High Performance & Premium Design</p>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
            Website Development for Businesses in <span className="gradient-text">Chittoor</span>
          </h1>
          <p className="mt-6 text-xl leading-8 text-white/[0.68] sm:text-2xl">
            Tessera Studio is a Bangalore-based digital studio with roots in Chittoor. We help businesses in Chittoor build premium websites, stronger brand presence, and better digital systems for enquiries and growth.
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
          
          {/* Main Copy (800-1200 words equivalent detail) */}
          <div className="space-y-12">
            
            {/* Section 1: Introduction */}
            <Reveal>
              <div className="space-y-4">
                <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Why Professional Web Design Matters for Local Brands
                </h2>
                <p className="leading-8 text-white/[0.62]">
                  In today&apos;s fast-paced digital ecosystem, your website is the virtual front door to your business. Whether you are running a clinic in <strong>Chittoor</strong>, a high-growth real estate brokerage in <strong>Tirupati</strong>, a premier educational college, or an upscale café, your target audience in <strong>Andhra Pradesh</strong> expects a clean, reliable, and premium browsing experience. 
                </p>
                <p className="leading-8 text-white/[0.62]">
                  A slow, generic website with broken layouts and poor mobile responsiveness does more than hurt your SEO—it actively drives high-intent customers into the arms of your competitors. At <strong>Tessera Studio</strong>, we solve this by blending modern front-end engineering, conversion rate optimization, and stunning aesthetic styling. The result is a lightning-fast website that loads in under 2 seconds, ranks high on Google, and looks incredibly high-end.
                </p>
              </div>
            </Reveal>

            {/* Section 2: Industry Solutions */}
            <Reveal>
              <div className="space-y-6">
                <h2 className="font-display text-3xl font-bold tracking-tight text-white">
                  Custom Website Solutions Built for Your Industry
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                    <p className="font-bold text-white mb-2">🏢 Real Estate Websites</p>
                    <p className="text-sm leading-6 text-white/[0.56]">
                      High-end showcase pages for luxury residential villas, layouts with crisp dynamic brochures, high-converting location maps, and interactive inquiry panels designed to capture serious property buyers in South India.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                    <p className="font-bold text-white mb-2">🎓 College & Educational Sites</p>
                    <p className="text-sm leading-6 text-white/[0.56]">
                      Polished, easy-to-navigate academic websites displaying curriculum structures, event galleries, staff directories, and simple digital application or enrollment pipelines for colleges and institutes.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                    <p className="font-bold text-white mb-2">🩺 Clinic & Healthcare Portals</p>
                    <p className="text-sm leading-6 text-white/[0.56]">
                      Clean, patient-centric web designs with direct doctor profiles, service listings, simple online booking forms, patient testimonials, and integrated clinic WhatsApp contact triggers.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                    <p className="font-bold text-white mb-2">☕ Café & Restaurant Platforms</p>
                    <p className="text-sm leading-6 text-white/[0.56]">
                      Social-first, mobile-optimized digital menus, table reservation frameworks, location maps, opening hours, and direct social media integrations that keep tables full.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Section 3: Key Benefits */}
            <Reveal>
              <div className="space-y-4">
                <h2 className="font-display text-3xl font-bold tracking-tight text-white">
                  The Benefits of Working with Tessera Studio
                </h2>
                <p className="leading-8 text-white/[0.62]">
                  We operate as a premium strategic partner, taking the burden of technical execution, copywriting, speed tuning, and indexing off your shoulders. Here is what we deliver on every single build:
                </p>
                <ul className="grid gap-4 mt-6 sm:grid-cols-2">
                  <li className="flex gap-3 text-sm text-white/[0.72]">
                    <span className="text-violet">✔</span>
                    <span><strong>Apple-Tier Aesthetics:</strong> Sleek glassmorphism, tailored gradients, and premium typography that sets your brand apart.</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/[0.72]">
                    <span className="text-violet">✔</span>
                    <span><strong>100% Mobile Responsive:</strong> Looks gorgeous and works perfectly on every smartphone screen.</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/[0.72]">
                    <span className="text-violet">✔</span>
                    <span><strong>Built-In SEO Best Practices:</strong> Structured headings, optimized meta tags, local schema markup, and automatic XML sitemaps.</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/[0.72]">
                    <span className="text-violet">✔</span>
                    <span><strong>Blazing Speed Performance:</strong> Compressed images, clean code, and zero layouts shifts for maximum search engine rankings.</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Section 4: Process */}
            <Reveal>
              <div className="space-y-4">
                <h2 className="font-display text-3xl font-bold tracking-tight text-white">
                  Our Structured Web Development Process
                </h2>
                <div className="space-y-6 mt-6">
                  {[
                    { step: "01", name: "Strategic Discovery", desc: "We sit down with you to outline your business goals, target audience, and ideal lead flow triggers." },
                    { step: "02", name: "Design Concept", desc: "We build high-fidelity interactive wireframes and premium mockup concepts so you see exactly how the site feels." },
                    { step: "03", name: "Production & Coding", desc: "We translate the approved mockups into clean, semantic React/Next.js code, complete with fluid, physics-based scroll animations." },
                    { step: "04", name: "Deployment & Optimization", desc: "We configure sitemaps, schemas, canonical tags, secure SSL, and push your site live on premium CDN hosting." }
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
                  Frequently Asked Questions (Web Dev)
                </h2>
                <div className="divide-y divide-white/[0.08] mt-6">
                  {[
                    { q: "How long does it take to build a website?", a: "A standard premium website project takes between 2 to 4 weeks depending on the number of pages, content availability, and integrations." },
                    { q: "Will my website rank on Google in Chittoor?", a: "Yes, we integrate complete local SEO configurations (schemas, H1-H3 setups, meta descriptions, image alts) so local prospects find you instantly." },
                    { q: "Can I manage the website content easily?", a: "Absolutely. We build with clean, editable structures or connect user-friendly headless CMS systems so you can make simple text/image edits without coding." }
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
                  <p className="text-white/[0.46] text-xs">Primary Tech Stack</p>
                  <p className="font-semibold text-white mt-1">Next.js, React, Tailwind, Framer Motion</p>
                </div>
                <div className="rounded-2xl bg-white/[0.03] p-4 border border-white/[0.04]">
                  <p className="text-white/[0.46] text-xs">Avergage Delivery</p>
                  <p className="font-semibold text-white mt-1">14 to 28 Days</p>
                </div>
                <div className="rounded-2xl bg-white/[0.03] p-4 border border-white/[0.04]">
                  <p className="text-white/[0.46] text-xs">Local Relevance</p>
                  <p className="font-semibold text-white mt-1">Chittoor, Tirupati, South India</p>
                </div>
              </div>
            </div>

            {/* Related Services Links */}
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
