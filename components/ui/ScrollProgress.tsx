"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 28, mass: 0.35 });

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 z-[95] h-1 w-full origin-left bg-gradient-to-r from-violet via-white to-electric"
      style={{ scaleX }}
    />
  );
}
