"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type GlowOrbProps = {
  className?: string;
  color?: "violet" | "blue" | "white";
  delay?: number;
};

const colors = {
  violet: "bg-violet/45",
  blue: "bg-electric/35",
  white: "bg-white/20"
};

export function GlowOrb({ className, color = "violet", delay = 0 }: GlowOrbProps) {
  return (
    <motion.div
      aria-hidden
      // Only animate opacity — GPU-composited, no layout, no paint
      // Removed x/y/scale motion to eliminate jank on mobile
      initial={{ opacity: 0.35 }}
      animate={{ opacity: [0.35, 0.65, 0.35] }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
      style={{ willChange: "opacity" }}
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl",
        colors[color],
        className
      )}
    />
  );
}
