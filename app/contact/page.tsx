import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ui/ContactForm";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { Reveal } from "@/components/ui/Reveal";
import { company, socialLinks } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Tessera Studio | Premium Websites & AI Automation",
  description: "Get in touch with Tessera Studio. Start your premium website development, AI automation, branding, or lead-generation system project today.",
  alternates: {
    canonical: "https://tesseraweb.in/contact"
  }
};

export default function ContactPage() {
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

        {/* Content Layout */}
        <div className="mt-8 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          
          {/* Contact Details & Info */}
          <Reveal>
            <div className="space-y-8">
              <div>
                <p className="eyebrow">Start the build</p>
                <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-[-0.05em] text-white sm:text-6xl">
                  Contact Tessera Studio
                </h1>
                <p className="mt-6 text-lg leading-8 text-white/[0.58]">
                  Have a project in mind? Whether you want to build a high-performance business website, launch an interactive lead qualification funnel, or automate your CRM follow-ups with AI receptionists—send over the rough concept and we&apos;ll shape it into something launchable.
                </p>
              </div>

              {/* Business Info Grid */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
                  <p className="text-xs uppercase tracking-wider font-mono text-white/[0.42]">Location</p>
                  <p className="mt-2 text-sm font-semibold text-white/90">Whitefield, Bengaluru, India</p>
                  <p className="text-xs text-white/[0.46] mt-1">Serving clients worldwide</p>
                </div>
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5">
                  <p className="text-xs uppercase tracking-wider font-mono text-white/[0.42]">Email Us</p>
                  <a href={`mailto:${company.email}`} className="mt-2 block text-sm font-semibold text-violet hover:underline">
                    {company.email}
                  </a>
                  <p className="text-xs text-white/[0.46] mt-1">Typical reply: under 24 hours</p>
                </div>
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 sm:col-span-2">
                  <p className="text-xs uppercase tracking-wider font-mono text-white/[0.42]">Direct Discussion</p>
                  <a 
                    href="https://wa.me/919876543210" 
                    target="_blank" 
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition duration-300"
                  >
                    <span>💬 Chat instantly on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Navigation help */}
              <div className="pt-6 border-t border-white/[0.08]">
                <p className="text-xs font-mono tracking-wider uppercase text-white/[0.42]">Explore Services</p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {[
                    { name: "Website Development", href: "/website-development-bangalore" },
                    { name: "AI Automation", href: "/ai-automation-services" },
                    { name: "Branding", href: "/branding-services" },
                    { name: "Lead Generation", href: "/lead-generation-systems" }
                  ].map((s) => (
                    <Link 
                      key={s.href} 
                      href={s.href} 
                      className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-xs font-semibold text-white/70 hover:text-white hover:border-violet/40 transition duration-300"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Contact Form Container */}
          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-white/[0.08] bg-[#090909]/60 p-6 backdrop-blur-xl sm:p-10">
              <h2 className="font-display text-2xl font-bold text-white mb-6">Send an Inquiry</h2>
              <ContactForm />
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
