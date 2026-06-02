"use client";

import { motion } from "framer-motion";
import { ParticleField } from "@/components/3d/ParticleField";
import { FloatingCard } from "@/components/ui/FloatingCard";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { usePathname } from "next/navigation";

const headline = "We build brands, websites & growth systems that scale businesses.";

function AvatarStack() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex -space-x-3">
        {["AM", "NR", "DS", "KP"].map((initials, index) => (
          <span
            key={initials}
            className="grid h-10 w-10 place-items-center rounded-full border border-ink bg-gradient-to-br from-violet to-electric text-xs font-bold"
            style={{ transform: `translateX(${index * -2}px)` }}
          >
            {initials}
          </span>
        ))}
      </div>
      <p className="text-sm text-white/[0.58]">
        Trusted by <span className="font-semibold text-white">15+ brands</span>
      </p>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto h-[600px] sm:h-[540px] w-full max-w-[560px] lg:h-[650px]">
      <ParticleField />
      <GlowOrb className="left-10 top-20 h-52 w-52" color="violet" />
      <GlowOrb className="bottom-12 right-6 h-64 w-64" color="blue" delay={1.2} />

      <div className="absolute inset-2 sm:inset-6 rounded-[2.5rem] border border-white/[0.08] bg-white/[0.025] shadow-2xl shadow-black/30 backdrop-blur-sm" />

      <FloatingCard className="absolute left-4 sm:left-0 sm:-left-4 md:left-0 top-6 sm:top-16 w-[calc(100%-2rem)] sm:w-[18rem] p-4 sm:p-5" delay={0.4}>
        <div className="flex items-center justify-between">
          <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-white/[0.42]">Revenue</p>
          <span className="rounded-full bg-emerald-400/15 px-2 py-1 text-[10px] sm:text-xs text-emerald-300">
            +34%
          </span>
        </div>
        <p className="mt-2 sm:mt-3 font-display text-2xl sm:text-3xl font-bold">$128.4k</p>
        <div className="mt-3 sm:mt-5 flex h-16 sm:h-24 items-end gap-2">
          {[42, 58, 48, 72, 65, 88, 100].map((height, index) => (
            <span
              key={index}
              className="flex-1 rounded-t-lg bg-gradient-to-t from-violet to-electric"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </FloatingCard>

      <FloatingCard className="absolute right-4 sm:right-0 sm:-right-4 md:right-0 top-40 sm:top-44 w-[calc(100%-4rem)] sm:w-[16rem] p-4 sm:p-5" delay={0.9} amplitude={10}>
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 sm:h-10 sm:w-10 place-items-center rounded-xl sm:rounded-2xl bg-violet/20 text-violet">
            <span className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-violet shadow-glow" />
          </span>
          <div>
            <p className="text-sm sm:text-base font-semibold">Lead captured</p>
            <p className="text-xs sm:text-sm text-white/[0.48]">Booked consult</p>
          </div>
        </div>
      </FloatingCard>

      <FloatingCard className="absolute top-[16rem] sm:top-auto sm:bottom-28 left-4 sm:left-2 sm:left-6 w-[calc(100%-4rem)] sm:w-[18rem] p-4 sm:p-5" delay={1.15}>
        <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-white/[0.42]">
          Brand System
        </p>
        <div className="mt-3 sm:mt-4 grid grid-cols-4 gap-2 sm:gap-3">
          {["#7B5EA7", "#3B82F6", "#FFFFFF", "#141414"].map((color) => (
            <span key={color} className="h-8 sm:h-12 rounded-xl sm:rounded-2xl border border-white/[0.08]" style={{ background: color }} />
          ))}
        </div>
        <div className="mt-3 sm:mt-4 h-2 sm:h-3 w-3/4 rounded-full bg-white/20" />
        <div className="mt-2 h-2 sm:h-3 w-1/2 rounded-full bg-white/10" />
      </FloatingCard>

      <FloatingCard className="absolute bottom-6 sm:bottom-8 right-4 sm:right-2 sm:right-4 w-[calc(100%-2rem)] sm:w-[17rem] p-4 sm:p-5" delay={1.45} amplitude={8}>
        <div className="flex items-center justify-between">
          <p className="text-sm sm:text-base font-semibold">AI Workflow</p>
          <span className="rounded-full border border-electric/30 px-2 py-0.5 sm:py-1 font-mono text-[9px] sm:text-[10px] uppercase text-electric">
            Live
          </span>
        </div>
        <div className="mt-4 sm:mt-5 grid gap-2 sm:gap-3">
          {["New inquiry", "AI qualification", "CRM follow-up"].map((node, index) => (
            <div key={node} className="flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl bg-white/[0.045] p-2 sm:p-3">
              <span className="grid h-6 w-6 sm:h-7 sm:w-7 place-items-center rounded-full bg-white/[0.08] font-mono text-[10px] sm:text-xs">
                {index + 1}
              </span>
              <span className="text-xs sm:text-sm text-white/[0.72]">{node}</span>
            </div>
          ))}
        </div>
      </FloatingCard>
    </div>
  );
}

export function Hero() {
  const pathname = usePathname();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden pb-20 pt-36 sm:pt-40">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[36rem] w-[72rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-violet/20 via-electric/15 to-transparent blur-3xl z-[-1]" />

      <div className="site-container relative z-10 grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="eyebrow"
          >
            Growth Studio for Modern Businesses
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-4xl font-display text-5xl font-bold leading-[0.96] tracking-[-0.065em] text-white sm:text-6xl lg:text-7xl xl:text-[5.7rem]"
          >
            <span className="gradient-text">{headline}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-white/[0.62] sm:text-xl"
          >
            Tessera Studio blends premium design, growth marketing and AI automation into one clean system, so your business looks sharper and scales faster.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.18 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <MagneticButton
              href="/#portfolio"
              size="lg"
              onClick={(e) => handleNavClick(e as any, "/#portfolio")}
            >
              View Projects
            </MagneticButton>
            <MagneticButton
              href="/#contact"
              variant="secondary"
              size="lg"
              onClick={(e) => handleNavClick(e as any, "/#contact")}
            >
              Book a Call
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
            className="mt-10"
          >
            <AvatarStack />
          </motion.div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
