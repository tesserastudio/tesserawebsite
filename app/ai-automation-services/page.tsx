import type { Metadata } from "next";
import Link from "next/link";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "AI Automation Services for Businesses | Tessera Studio",
  description: "Leverage premium AI automation systems to cut down manual follow-up loads. We build custom AI receptionists, WhatsApp follow-ups, and CRM workflows in Chittoor and India.",
  alternates: {
    canonical: "https://tesseraweb.in/ai-automation-services"
  }
};

export default function AiAutomationPage() {
  return (
    <section className="relative min-h-screen overflow-hidden pb-20 pt-36 sm:pt-40">
      {/* Background glows */}
      <div className="absolute left-1/2 top-0 h-[36rem] w-[72rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet/20 via-electric/15 to-transparent blur-3xl" />
      <GlowOrb className="-left-20 top-1/4 h-80 w-80" color="violet" delay={0.3} />
      <GlowOrb className="-right-10 bottom-24 h-96 w-96" color="blue" delay={1.2} />

      <div className="site-container relative z-10">
        {/* Back Link */}
        <Link href="/" className="font-mono text-xs uppercase tracking-[0.2em] text-white/[0.46] transition hover:text-white">
          ← Back to home
        </Link>

        {/* Hero Section */}
        <div className="mt-8 max-w-4xl">
          <p className="eyebrow">Scale Operations & Remove Friction</p>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
            AI Automation Services for <span className="gradient-text">Modern Businesses</span>
          </h1>
          <p className="mt-6 text-xl leading-8 text-white/[0.68] sm:text-2xl">
            Stop losing leads to slow response times. We build automated AI receptionists, WhatsApp lead follow-up systems, and CRM integrations that qualify prospects and schedule consultations 24/7 without manual effort.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="rounded-full bg-white px-8 py-4 text-center font-semibold text-ink transition hover:bg-[#f5f1ff]">
              Automate your lead follow-up
            </Link>
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="rounded-full border border-white/[0.1] bg-white/[0.04] px-8 py-4 text-center font-semibold text-white transition hover:bg-white/[0.08]">
              Request a free AI audit
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
                  Why AI-Driven Automation is Essential to Scale
                </h2>
                <p className="leading-8 text-white/[0.62]">
                  Most businesses don&apos;t actually have a lead generation problem—they have a lead response problem. Statistics show that responding to an online inquiry within 5 minutes increases conversion odds by up to 391%. Yet, standard operational teams struggle to maintain this pace, especially outside office hours or during busy weekend schedules. 
                </p>
                <p className="leading-8 text-white/[0.62]">
                  At <strong>Tessera Studio</strong>, we solve this bottleneck by building custom, localized AI receptionists and WhatsApp-based follow-up ecosystems. By connecting automation logic directly to your CRM, email, and booking calendars, we ensure that every single inbound contact is qualified, engaged, and logged within 90 seconds—day or night.
                </p>
              </div>
            </Reveal>

            {/* Section 2: Core Solutions */}
            <Reveal>
              <div className="space-y-6">
                <h2 className="font-display text-3xl font-bold tracking-tight text-white">
                  Core AI Automation Frameworks We Build
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                    <p className="font-bold text-white mb-2">🤖 Always-On AI Receptionists</p>
                    <p className="text-sm leading-6 text-white/[0.56]">
                      Intelligent chat agents configured to answer FAQs, qualify inbound requirements, capture contact data, and transfer hot leads to your sales representatives.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                    <p className="font-bold text-white mb-2">💬 WhatsApp Qualification Funnels</p>
                    <p className="text-sm leading-6 text-white/[0.56]">
                      Direct WhatsApp automations triggering immediate replies upon form submission, gathering consultation preferences, and scheduling slots automatically.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                    <p className="font-bold text-white mb-2">🔄 CRM & Lead Management Pipelines</p>
                    <p className="text-sm leading-6 text-white/[0.56]">
                      Clean, zero-manual data synchronization routing leads from ads or landing pages directly to HubSpot, Zoho, or Google Sheets with instant status tags.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                    <p className="font-bold text-white mb-2">⚙ Operations & Business Flows</p>
                    <p className="text-sm leading-6 text-white/[0.56]">
                      Automated invoicing, document assembly, alert notifications, and internal updates that reduce administrative tasks for your internal staff.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Section 3: Operational Benefits */}
            <Reveal>
              <div className="space-y-4">
                <h2 className="font-display text-3xl font-bold tracking-tight text-white">
                  Operational Benefits of AI Automation
                </h2>
                <p className="leading-8 text-white/[0.62]">
                  By handing repetitive tasks, database logging, and instant qualifying to automation systems, you reclaim your most valuable asset: time.
                </p>
                <ul className="grid gap-4 mt-6 sm:grid-cols-2">
                  <li className="flex gap-3 text-sm text-white/[0.72]">
                    <span className="text-violet">✔</span>
                    <span><strong>58%+ Manual Workload Cut:</strong> Let your human staff focus on final negotiations and service, not database data entry.</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/[0.72]">
                    <span className="text-violet">✔</span>
                    <span><strong>Instant 24/7 Response:</strong> Qualify and secure consult bookings at 11 PM or during holidays without lag.</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/[0.72]">
                    <span className="text-violet">✔</span>
                    <span><strong>Highly Consistent Tone:</strong> Your AI follows exact business guidelines and product pricing specifications perfectly.</span>
                  </li>
                  <li className="flex gap-3 text-sm text-white/[0.72]">
                    <span className="text-violet">✔</span>
                    <span><strong>Absolute Scale Capability:</strong> System processes 10 or 10,000 incoming leads concurrently without lag or error.</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Section 4: Process */}
            <Reveal>
              <div className="space-y-4">
                <h2 className="font-display text-3xl font-bold tracking-tight text-white">
                  How We Implement AI Systems
                </h2>
                <div className="space-y-6 mt-6">
                  {[
                    { step: "01", name: "Audit & Analysis", desc: "We review your current response pipelines, CRM data entry patterns, and operational bottlenecks." },
                    { step: "02", name: "Architecture & Rules", desc: "We map out visual workflows, qualification criteria, and human escalation thresholds." },
                    { step: "03", name: "Integration & Code", desc: "We program API connections, deploy AI logic models, and wire up database triggers." },
                    { step: "04", name: "QA & Staff Training", desc: "We thoroughly run simulated tests, calibrate thresholds, and train your staff on hot-lead handoff protocols." }
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
                  Frequently Asked Questions (AI Automation)
                </h2>
                <div className="divide-y divide-white/[0.08] mt-6">
                  {[
                    { q: "Is AI automation hard to integrate with my existing CRM?", a: "Not at all. We build direct integration modules for tools like Zoho, HubSpot, Salesforce, or simple setups using Make/Zapier, keeping transitions completely smooth." },
                    { q: "Does the AI sound robotic?", a: "We spend substantial time on conversational design and prompt mapping to ensure the AI's language feels warm, polite, and completely aligned with human standards." },
                    { q: "Do you build WhatsApp automations?", a: "Yes, we utilize official Meta APIs to configure secure, scale-ready WhatsApp automation flows, ensuring zero risk of account blocks." }
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
                  <p className="font-semibold text-white mt-1">OpenAI API, Make, Zapier, Twilio, Node.js</p>
                </div>
                <div className="rounded-2xl bg-white/[0.03] p-4 border border-white/[0.04]">
                  <p className="text-white/[0.46] text-xs">Workload Reduction</p>
                  <p className="font-semibold text-white mt-1">Up to 58% admin workload cut</p>
                </div>
                <div className="rounded-2xl bg-white/[0.03] p-4 border border-white/[0.04]">
                  <p className="text-white/[0.46] text-xs">Integration Scope</p>
                  <p className="font-semibold text-white mt-1">CRM, WhatsApp, Booking Calendars, Email</p>
                </div>
              </div>
            </div>

            {/* Related Services Links */}
            <div className="rounded-[2rem] border border-white/[0.08] bg-[#090909]/60 p-6 backdrop-blur-xl">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/[0.42] mb-5">Explore Other Services</p>
              <div className="grid gap-3">
                {[
                  { name: "Website Development", href: "/website-development-chittoor" },
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
