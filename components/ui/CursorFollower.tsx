"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorFollower() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const x = useMotionValue(-120);
  const y = useMotionValue(-120);
  const springX = useSpring(x, { stiffness: 280, damping: 32, mass: 0.7 });
  const springY = useSpring(y, { stiffness: 280, damping: 32, mass: 0.7 });
  const size = isHovering ? 58 : 34;

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      setIsVisible(true);
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const handleOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      setIsHovering(Boolean(target?.closest("a, button, input, textarea, select, [data-cursor='button']")));
    };

    const handleLeave = () => setIsVisible(false);

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerover", handleOver);
    document.documentElement.addEventListener("pointerleave", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerover", handleOver);
      document.documentElement.removeEventListener("pointerleave", handleLeave);
    };
  }, [x, y]);

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden rounded-full border border-white/30 mix-blend-difference lg:block"
        style={{
          x: springX,
          y: springY,
          width: size,
          height: size,
          marginLeft: -size / 2,
          marginTop: -size / 2,
          opacity: isVisible ? 1 : 0
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[91] hidden h-2 w-2 rounded-full bg-white lg:block"
        style={{
          x,
          y,
          marginLeft: -4,
          marginTop: -4,
          opacity: isVisible ? 1 : 0
        }}
      />
    </>
  );
}
