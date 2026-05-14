"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  return (
    <section id="process" className="section-padding relative overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-violet/10 to-transparent" />
      <div className="site-container relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title={
              <>
                A clean path from <span className="gradient-text">idea to scale.</span>
              </>
            }
            description="A fast, structured workflow keeps the premium parts premium and the launch parts calm. Nice little luxury, that."
          />
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-8 right-8 top-8 hidden h-px bg-white/[0.08] lg:block" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-8 right-8 top-8 hidden h-px origin-left bg-gradient-to-r from-violet to-electric lg:block"
          />

          <div className="grid gap-5 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08}>
                <article className="group relative h-full rounded-[1.75rem] border border-white/[0.08] bg-white/[0.035] p-5 transition hover:-translate-y-2 hover:border-violet/45 hover:bg-white/[0.06]">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl border border-white/[0.1] bg-ink font-mono text-sm font-bold text-white shadow-glow transition group-hover:scale-110">
                    0{index + 1}
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-bold tracking-[-0.03em]">{step.title}</h3>
                  <p className="mt-3 leading-7 text-white/[0.56]">{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
