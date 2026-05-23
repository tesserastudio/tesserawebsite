"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

function ServiceIcon({ type }: { type: string }) {
  const common = "h-10 w-10 text-white";

  if (type === "diamond") {
    return (
      <svg className={common} viewBox="0 0 48 48" fill="none" aria-hidden>
        <path d="M24 4L44 24L24 44L4 24L24 4Z" stroke="currentColor" strokeWidth="2" />
        <path d="M14 24L24 4L34 24L24 44L14 24Z" stroke="#7B5EA7" strokeWidth="2" />
      </svg>
    );
  }

  if (type === "target") {
    return (
      <svg className={common} viewBox="0 0 48 48" fill="none" aria-hidden>
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="24" r="9" stroke="#3B82F6" strokeWidth="2" />
        <path d="M24 24L39 9" stroke="#7B5EA7" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "network") {
    return (
      <svg className={common} viewBox="0 0 48 48" fill="none" aria-hidden>
        <circle cx="12" cy="14" r="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="36" cy="14" r="5" stroke="#3B82F6" strokeWidth="2" />
        <circle cx="24" cy="34" r="5" stroke="#7B5EA7" strokeWidth="2" />
        <path d="M17 16L31 16M15 18L21 30M33 18L27 30" stroke="currentColor" strokeOpacity=".55" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect x="6" y="10" width="36" height="28" rx="5" stroke="currentColor" strokeWidth="2" />
      <path d="M6 18H42" stroke="#7B5EA7" strokeWidth="2" />
      <path d="M15 28H27M15 33H34" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function Services() {
  return (
    <section id="services" className="scroll-mt-32 section-padding relative">
      <div className="site-container">
        <Reveal>
          <SectionHeading
            eyebrow="What We Build"
            title={
              <>
                Services that connect <span className="gradient-text">brand, web and growth</span>
              </>
            }
            description="Every offer is designed as part of one system: sharpen the brand, convert the website, automate the follow-up and scale the demand engine."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="tile-corner glass-card group h-full rounded-[2rem] p-6 transition duration-300 hover:border-violet/50 hover:shadow-glow flex flex-col justify-between"
              >
                <div>
                  <div className="relative z-10 flex items-start justify-between gap-5">
                    <div className="grid h-16 w-16 place-items-center rounded-3xl border border-white/[0.08] bg-white/[0.045]">
                      <ServiceIcon type={service.icon} />
                    </div>
                    {service.badge ? (
                      <span className="rounded-full border border-violet/40 bg-violet/15 px-3 py-1 font-mono text-xs text-violet">
                        {service.badge}
                      </span>
                    ) : null}
                  </div>

                  <div className="relative z-10 mt-7">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/[0.42]">
                      {service.eyebrow}
                    </p>
                    <h2 className="mt-3 font-display text-2xl font-bold tracking-[-0.03em] text-white">
                      {service.title}
                    </h2>
                    <p className="mt-4 leading-7 text-white/[0.58]">{service.description}</p>
                  </div>

                  <ul className="relative z-10 mt-7 grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-white/[0.68]">
                        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet to-electric" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative z-10 mt-8 pt-4 border-t border-white/[0.05]">
                  <Link
                    href={service.href || "/"}
                    className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-violet transition hover:text-white group-hover:translate-x-1 duration-300"
                  >
                    Learn about our {service.title.split(" ")[0].toLowerCase()} services
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
