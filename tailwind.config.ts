import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        graphite: "#111111",
        card: "#141414",
        violet: "#7B5EA7",
        electric: "#3B82F6",
        muted: "#A1A1AA"
      },
      fontFamily: {
        display: ["Syne", "Space Grotesk", "ui-sans-serif", "sans-serif"],
        sans: ["Space Grotesk", "DM Sans", "ui-sans-serif", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      boxShadow: {
        glow: "0 0 80px rgba(123, 94, 167, 0.28)",
        "blue-glow": "0 0 90px rgba(59, 130, 246, 0.22)"
      },
      backgroundImage: {
        "tile-grid":
          "linear-gradient(rgba(255,255,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.045) 1px, transparent 1px)",
        "radial-violet":
          "radial-gradient(circle at 50% 50%, rgba(123,94,167,.32), transparent 55%)"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.08)" }
        }
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        shimmer: "shimmer 2.6s ease-in-out infinite",
        pulseGlow: "pulseGlow 8s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
