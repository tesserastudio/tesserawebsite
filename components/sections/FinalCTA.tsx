"use client";

import { ContactForm } from "@/components/ui/ContactForm";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section id="contact" className="scroll-mt-32 section-padding relative overflow-hidden">
      <GlowOrb className="-left-20 top-24 h-72 w-72" color="violet" />
      <GlowOrb className="-right-10 bottom-20 h-80 w-80" color="blue" delay={1} />
      <div className="site-container relative z-10">
        <div className="overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-[#080808]/80 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <p className="eyebrow">Start the build</p>
              <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-[-0.05em] sm:text-5xl lg:text-6xl text-white">
                Contact Tessera Studio
              </h2>
              <p className="mt-6 text-xl font-semibold text-white/90">
                Your business deserves more than just a website.
              </p>
              <p className="mt-4 text-lg leading-8 text-white/[0.62]">
                Build your brand, automate growth and scale faster with Tessera Studio. Send the rough
                version of the idea; we will help shape it into something launchable.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {["Strategy", "Design", "Development"].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/[0.42]">
                      Includes
                    </p>
                    <p className="mt-2 font-semibold">{item}</p>
                  </div>
                ))}
              </div>

              <p className="mt-7 text-sm text-white/[0.46]">
                Prefer calendar first? Email contact@tesseraweb.in and ask for a discovery slot.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
