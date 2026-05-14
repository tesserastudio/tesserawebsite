"use client";

import { differentiators, stats } from "@/lib/data";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/ui/Reveal";

export function WhyTessera() {
  return (
    <section className="section-padding relative">
      <div className="site-container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <p className="eyebrow">Why Tessera Studio</p>
          <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            We do not just decorate businesses. We build the system around the sale.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/[0.58]">
            Tessera means mosaic: every tile matters. Strategy, identity, website, campaigns and
            automation are arranged into one coherent growth surface.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/[0.08] bg-white/[0.035] p-5">
                <p className="font-display text-4xl font-bold tracking-[-0.04em]">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                </p>
                <p className="mt-2 text-sm text-white/[0.5]">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-4">
          {differentiators.map((item, index) => (
            <Reveal key={item} delay={index * 0.08}>
              <div className="group flex items-center gap-4 rounded-[1.5rem] border border-white/[0.08] bg-white/[0.035] p-4 transition hover:border-violet/45 hover:bg-white/[0.06]">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-violet/28 to-electric/20 font-mono text-sm text-white">
                  0{index + 1}
                </span>
                <p className="text-lg font-semibold text-white/[0.82] transition group-hover:text-white">
                  {item}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
