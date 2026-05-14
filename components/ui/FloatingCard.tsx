"use client";

import { type ReactNode, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type FloatingCardProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  amplitude?: number;
};

export function FloatingCard({
  children,
  className,
  delay = 0,
  amplitude = 12
}: FloatingCardProps) {
  const [floating, setFloating] = useState(false);

  return (
    <motion.div
      // Entry animation: fade + rise into place
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={
        floating
          ? // Looping float — only y, no opacity/scale conflict
            { opacity: 1, scale: 1, y: [0, -amplitude, 0] }
          : // Entry settle
            { opacity: 1, y: 0, scale: 1 }
      }
      transition={
        floating
          ? {
              opacity: { duration: 0 },
              scale: { duration: 0 },
              y: {
                duration: 4.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop"
              }
            }
          : {
              duration: 0.65,
              delay,
              ease: [0.22, 1, 0.36, 1]
            }
      }
      onAnimationComplete={() => {
        if (!floating) setFloating(true);
      }}
      style={{ willChange: "transform" }}
      className={cn("glass-card rounded-3xl", className)}
    >
      {children}
    </motion.div>
  );
}
