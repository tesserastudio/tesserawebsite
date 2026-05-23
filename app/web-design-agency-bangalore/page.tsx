import type { Metadata } from "next";
import Link from "next/link";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Web Design Agency in Bangalore | Tessera Studio",
  description: "Tessera Studio is a Bangalore-based website design and development agency helping businesses build premium websites, brand identities, and AI automation systems.",
  alternates: {
    canonical: "https://tesseraweb.in/web-design-agency-bangalore"
  }
};

const capabilities = [
  {
    icon: "🎨",
    title: "Brand-First Web Design",
    desc: "We craft custom user interfaces and digital brand systems that look elegant, work smoothly, and project immediate trust. Zero lazy templates."
  },
  {
    icon: "⚡",
    title: "High-Performance Dev",
    desc: "Every design is coded cleanly using Next.js/Tailwind for sub-second speeds, absolute responsive stability, and robust technical SEO layouts."
  },
  {
    icon: "🤖",
    title: "AI & CRM Automations",
    desc: "AI voice/text receptionists, WhatsApp lead pathways, and smart CRM follow-ups built directly into your primary website architecture."
  },
  {
    icon: "📐",
    title: "Strategic Brand Identity",
    desc: "Unified logo systems, modern font pairings, cohesive product colors, and visual guidelines that align your customer experiences perfectly."
  }
];

export default function BangaloreWebDesignPage() {
  return (
    <>
      <section className="relative min-h-[75vh] overflow-hidden pb-24 pt-40">
        <div className="absolute left-1/2 top-0 h-[32rem] w-[72rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet/20 via-electric/15 to-transparent blur-3xl" />
        <GlowOrb className="left-20 top-40 h-72 w-72" color="violet" />
        <GlowOrb className="right-20 bottom-20 h-56 w-56" color="blue" delay={1.2} />

        <div className="site-container relative z-10 text-center">
          <Reveal>
            <p className="eyebrow">Creative Direction &amp; Digital Engineering</p>
            <h1 className="mt-7 font-display text-5xl font-bold leading-[0.96] tracking-[-0.065em] text-white sm:text-6xl lg:text-7xl">
              <span className="gradient-text">Web Design Agency in Bangalore</span>
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/[0.65] sm:text-xl">
              Tessera Studio is a Bangalore-based website design and development agency. We build premium digital assets, high-converting lead-generation experiences, AI automations, and visual brand identity systems for growing brands across India.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact" className="rounded-full bg-white px-8 py-4 text-center font-semibold text-ink transition hover:bg-[#f5f1ff] w-full sm:w-auto">
                Get a free strategy audit
              </Link>
              <Link href="/#portfolio" className="rounded-full border border-white/[0.1] bg-white/[0.04] px-8 py-4 text-center font-semibold text-white transition hover:bg-white/[0.08] w-full sm:w-auto">
                View our work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding border-t border-white/[0.04] bg-[#090909]/20">
        <div className="site-container">
          <Reveal>
            <div className="text-center">
              <p className="eyebrow">Visual Excellence</p>
              <h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
                Premium Web Design &amp; Copywriting
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/[0.55] sm:text-lg">
                We bridge the gap between creative design and production code, delivering interfaces that actively scale your sales pipelines.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {capabilities.map((cap, i) => (
              <Reveal key={cap.title} delay={i * 0.08}>
                <div className="group rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-sm transition duration-300 hover:border-violet/25 hover:bg-violet/5">
                  <span className="text-3xl">{cap.icon}</span>
                  <h3 className="mt-4 text-lg font-bold text-white">{cap.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/[0.55]">{cap.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Handoff CTA */}
      <section className="section-padding relative overflow-hidden border-t border-white/[0.04]">
        <div className="absolute inset-0 bg-gradient-to-br from-violet/10 via-transparent to-electric/8" />
        <GlowOrb className="left-1/4 top-1/2 h-96 w-96 -translate-y-1/2" color="violet" delay={0.3} />

        <div className="site-container relative z-10 text-center">
          <Reveal>
            <p className="eyebrow">Ready to collaborate?</p>
            <h2 className="mt-6 font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Elevate Your Brand Authority
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/[0.62]">
              Let&apos;s audit your current digital asset performance and build a premium Next.js platform custom-coded for your brand goals.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact" className="rounded-full bg-white px-8 py-4 text-center font-semibold text-ink transition hover:bg-[#f5f1ff] w-full sm:w-auto">
                Schedule a discovery call
              </Link>
              <Link href="/website-development-bangalore" className="rounded-full border border-white/[0.1] bg-white/[0.04] px-8 py-4 text-center font-semibold text-white transition hover:bg-white/[0.08] w-full sm:w-auto">
                Explore Website Dev
              </Link>
            </div>
            <p className="mt-8 text-sm text-white/[0.38]">
              Based in Whitefield, Bangalore · Serving ambitious businesses across India
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
