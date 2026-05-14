"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
};

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth < 1024;

    // If reduced motion is preferred, skip the canvas entirely
    if (reducedMotion) return;

    let animationFrame = 0;
    let particles: Particle[] = [];
    // Frame throttling: skip every other frame on mobile/tablet for 2x perf gain
    let frameCount = 0;
    const frameSkip = isMobile ? 2 : isTablet ? 2 : 1;

    const createParticles = () => {
      // Fewer particles on mobile and tablet to cut O(n²) connection cost
      const count = isMobile ? 18 : isTablet ? 28 : 60;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        radius: Math.random() * 1.4 + 0.5,
        alpha: Math.random() * 0.4 + 0.2
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      createParticles();
    };

    // Shorter connection distance on mobile saves the most cycles
    const connectionDistance = isMobile ? 0 : isTablet ? 80 : 110;

    const draw = () => {
      animationFrame = requestAnimationFrame(draw);
      frameCount++;
      if (frameCount % frameSkip !== 0) return;

      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      context.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        context.beginPath();
        context.fillStyle = `rgba(185, 177, 255, ${p.alpha})`;
        context.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        context.fill();

        // Skip connection lines on mobile entirely (biggest perf win)
        if (connectionDistance === 0) continue;

        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx = p.x - other.x;
          const dy = p.y - other.y;
          // Avoid sqrt — compare squared distances first
          const distSq = dx * dx + dy * dy;
          const maxSq = connectionDistance * connectionDistance;
          if (distSq < maxSq) {
            const dist = Math.sqrt(distSq);
            context.strokeStyle = `rgba(123, 94, 167, ${0.14 * (1 - dist / connectionDistance)})`;
            context.lineWidth = 0.8;
            context.beginPath();
            context.moveTo(p.x, p.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        }
      }
    };

    resize();
    draw();

    const handleResize = () => resize();
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 h-full w-full opacity-60 [mask-image:radial-gradient(circle_at_center,black,transparent_76%)]"
    />
  );
}
