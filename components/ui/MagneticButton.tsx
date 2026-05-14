"use client";

import { type ReactNode, useRef } from "react";
import {
  motion,
  type HTMLMotionProps,
  useMotionValue,
  useReducedMotion,
  useSpring
} from "framer-motion";
import { cn } from "@/lib/utils";

type MagneticButtonProps = Omit<HTMLMotionProps<"a">, "children"> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

const variants = {
  primary:
    "button-shine border-transparent bg-white text-ink shadow-glow hover:bg-[#f5f1ff]",
  secondary:
    "border-white/10 bg-white/[0.04] text-white hover:border-violet/70 hover:bg-violet/15",
  ghost: "border-transparent bg-transparent text-white/75 hover:text-white"
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base"
};

export function MagneticButton({
  children,
  className,
  variant = "primary",
  size = "md",
  href = "#contact",
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.45 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.45 });

  return (
    <motion.a
      ref={ref}
      href={href}
      data-cursor="button"
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        if (reducedMotion) return;
        const bounds = ref.current?.getBoundingClientRect();
        if (!bounds) return;
        x.set((event.clientX - bounds.left - bounds.width / 2) * 0.18);
        y.set((event.clientY - bounds.top - bounds.height / 2) * 0.18);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full border font-semibold transition duration-300 will-change-transform",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}
