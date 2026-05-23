import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

export const metadata: Metadata = {
  title: "Web Design Agency in Chittoor | Tessera Studio",
  description: "Tessera Studio is a Bangalore-based digital studio founded by a Chittoor native, helping Chittoor businesses build premium websites, branding, automation, and lead-generation systems.",
  keywords: [
    "web design agency in Chittoor",
    "website development company in Chittoor",
    "web design company in Chittoor",
    "website designers in Chittoor",
    "website development agency in Chittoor",
    "AI automation services in Chittoor",
    "branding agency in Chittoor",
    "lead generation website design"
  ],
  alternates: {
    canonical: "https://tesseraweb.in/web-design-agency-chittoor"
  },
  openGraph: {
    title: "Web Design Agency in Chittoor | Tessera Studio",
    description: "Tessera Studio is a Bangalore-based digital studio founded by a Chittoor native, helping Chittoor businesses build premium websites, branding, automation, and lead-generation systems.",
    url: "https://tesseraweb.in/web-design-agency-chittoor",
    siteName: "Tessera Studio",
    locale: "en_IN",
    type: "website"
  }
};

const services = [
  {
    icon: "🌐",
    title: "Business Website Design",
    desc: "Custom-designed, mobile-optimised business websites that load fast, rank well, and convert visitors into enquiries. No templates. No shortcuts."
  },
  {
    icon: "📱",
    title: "Landing Pages & Funnels",
    desc: "High-converting landing pages built specifically to capture leads and drive WhatsApp enquiries, form submissions, and bookings."
  },
  {
    icon: "🤖",
    title: "AI Automation Systems",
    desc: "AI receptionists, WhatsApp automation, CRM integrations, and lead follow-up workflows that reduce manual effort and scale your pipeline."
  },
  {
    icon: "🎨",
    title: "Branding & Identity Design",
    desc: "Complete brand identity systems — logo, colour palette, typography, and brand guidelines — that make your business instantly recognisable and trustworthy."
  },
  {
    icon: "🔍",
    title: "SEO & Local Search",
    desc: "Search-engine-optimised website structure, semantic HTML, local schema markup, and content strategy to help you rank in Chittoor and beyond."
  },
  {
    icon: "📊",
    title: "Lead Generation Design",
    desc: "Conversion-first website strategy combining design, copy, and CTA architecture to generate consistent, qualified leads for your business."
  }
];

const industries = [
  "Real Estate & Property",
  "Clinics & Healthcare",
  "Colleges & Coaching Centres",
  "Cafés & Restaurants",
  "Retail & E-commerce",
  "Construction & Infrastructure",
  "Service-Based Businesses",
  "Startups & New Ventures"
];

const process = [
  { step: "01", title: "Discovery Call", desc: "We understand your business, goals, audience, and competitors." },
  { step: "02", title: "Strategy & Design", desc: "We plan the website architecture, design the brand experience, and create mockups." },
  { step: "03", title: "Development", desc: "We build your site with clean code, fast load speeds, and full mobile optimisation." },
  { step: "04", title: "Launch & Support", desc: "We go live, submit to Google, and remain available for ongoing support and updates." }
];

const faqs = [
  {
    q: "Why should I hire a web design agency in Chittoor?",
    a: "Working with a local web design agency in Chittoor means you get a team that understands your local market, your competitors, and the audience you are trying to reach. Tessera Studio combines world-class design standards with deep local context."
  },
  {
    q: "How long does it take to build a website?",
    a: "Most business websites are completed within 2–4 weeks. Complex projects with multiple pages, integrations, or e-commerce features may take longer. We provide a clear timeline during the discovery call."
  },
  {
    q: "Do you only work with businesses in Chittoor?",
    a: "No — we work with businesses across Andhra Pradesh, Telangana, Tamil Nadu, and anywhere in India. However, we are based in Chittoor and take particular pride in supporting local businesses in the region."
  },
  {
    q: "Will my website be optimised for search engines?",
    a: "Yes. Every website we build follows SEO best practices including fast load times, semantic HTML, proper heading structure, meta tags, local schema markup, and mobile responsiveness."
  },
  {
    q: "Can you redesign my existing website?",
    a: "Absolutely. We offer full website redesigns for businesses that have outdated sites or sites that are not converting visitors into leads. We retain your existing content where possible while transforming the design and performance."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a
    }
  }))
};

const servicePageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Design Agency in Chittoor",
  serviceType: "Web Design and Website Development",
  provider: {
    "@type": "ProfessionalService",
    name: "Tessera Studio",
    url: "https://tesseraweb.in",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chittoor",
      addressRegion: "Andhra Pradesh",
      addressCountry: "IN"
    }
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Chittoor, Andhra Pradesh, India"
  },
  description:
    "Tessera Studio is a web design agency in Chittoor offering premium website design, website development, AI automation, branding, and lead generation services.",
  url: "https://tesseraweb.in/web-design-agency-in-chittoor"
};

export default function WebDesignAgencyChittoor() {
  return (
    <>
      <Script
        id="faq-schema-landing"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="service-schema-landing"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicePageSchema) }}
      />

      {/* Hero */}
      <section className="relative min-h-[75vh] overflow-hidden pb-24 pt-40">
        <div className="absolute left-1/2 top-0 h-[32rem] w-[72rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet/20 via-electric/15 to-transparent blur-3xl" />
        <GlowOrb className="left-20 top-40 h-72 w-72" color="violet" />
        <GlowOrb className="right-20 bottom-20 h-56 w-56" color="blue" delay={1.2} />

        <div className="site-container relative z-10 text-center">
          <Reveal>
            <p className="eyebrow">Creative Direction &amp; Digital Engineering</p>
            <h1 className="mt-7 font-display text-5xl font-bold leading-[0.96] tracking-[-0.065em] text-white sm:text-6xl lg:text-7xl">
              Web Design for Businesses in <span className="gradient-text">Chittoor</span>
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/[0.65] sm:text-xl">
              Tessera Studio is a Bangalore-based digital studio with roots in Chittoor. We help businesses in Chittoor build premium websites, stronger brand presence, and better digital systems for enquiries and growth.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/[0.45]">
              Custom-designed. Conversion-optimised. Search-engine-ready. Every website we deliver is built to help your business grow.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <MagneticButton href="/contact" size="lg">
                Get a free website quote
              </MagneticButton>
              <MagneticButton href="/#portfolio" variant="secondary" size="lg">
                View our work
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding border-t border-white/[0.04]">
        <div className="site-container">
          <Reveal>
            <div className="text-center">
              <p className="eyebrow">What We Deliver</p>
              <h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
                Web Design &amp; Digital Services in Chittoor
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/[0.55] sm:text-lg">
                From your first website to a full-scale digital system — we design and build everything your business needs to compete and grow online.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((svc, i) => (
              <Reveal key={svc.title} delay={i * 0.07}>
                <div className="group h-full rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-sm transition duration-300 hover:border-violet/25 hover:bg-violet/5">
                  <span className="text-3xl">{svc.icon}</span>
                  <h3 className="mt-4 text-lg font-bold text-white">{svc.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/[0.55]">{svc.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding relative overflow-hidden border-t border-white/[0.04] bg-[#070707]/40">
        <GlowOrb className="right-10 top-1/3 h-64 w-64" color="violet" delay={0.4} />
        <div className="site-container relative z-10">
          <Reveal>
            <div className="text-center">
              <p className="eyebrow">Industries We Serve</p>
              <h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
                Website Design for Every Business in Chittoor
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/[0.55]">
                We have built websites for businesses across these industries and understand what each type of business needs from its digital presence.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {industries.map((industry, i) => (
              <Reveal key={industry} delay={i * 0.05}>
                <span className="rounded-full border border-white/[0.1] bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-white/[0.72] backdrop-blur-sm transition hover:border-violet/30 hover:text-white">
                  {industry}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding border-t border-white/[0.04]">
        <div className="site-container">
          <Reveal>
            <div className="text-center">
              <p className="eyebrow">Our Process</p>
              <h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
                How We Build Your Website
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.1}>
                <div className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-sm">
                  <span className="font-mono text-3xl font-bold text-violet/40">{step.step}</span>
                  <h3 className="mt-4 text-base font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/[0.52]">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding border-t border-white/[0.04] bg-[#080808]/40">
        <div className="site-container max-w-4xl">
          <Reveal>
            <div className="text-center">
              <p className="eyebrow">FAQ</p>
              <h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-base leading-7 text-white/[0.52]">
                Common questions about working with a web design agency in Chittoor.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 space-y-4">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 backdrop-blur-sm">
                  <h3 className="text-base font-bold text-white sm:text-lg">{faq.q}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/[0.55] sm:text-base">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden border-t border-white/[0.04]">
        <div className="absolute inset-0 bg-gradient-to-br from-violet/10 via-transparent to-electric/8" />
        <GlowOrb className="left-1/4 top-1/2 h-96 w-96 -translate-y-1/2" color="violet" delay={0.3} />

        <div className="site-container relative z-10 text-center">
          <Reveal>
            <p className="eyebrow">Ready to grow online?</p>
            <h2 className="mt-6 font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Work with a Web Design Agency in Chittoor
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/[0.62]">
              Whether you need a brand new website, a redesign, or a complete digital system — Tessera Studio is here to help. Get in touch today and we will get back to you within 24 hours.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <MagneticButton href="/contact" size="lg">
                Start your project today
              </MagneticButton>
              <MagneticButton href="/#services" variant="secondary" size="lg">
                Explore our services
              </MagneticButton>
            </div>
            <p className="mt-8 text-sm text-white/[0.38]">
              Serving businesses across Bangalore, Chittoor, Andhra Pradesh, and India.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
