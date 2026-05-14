import { industries } from "@/lib/data";

export function MarqueeTrust() {
  const loop = [...industries, ...industries];

  return (
    <section className="relative overflow-hidden border-y border-white/[0.08] bg-white/[0.025] py-5">
      <div className="absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-ink to-transparent" />
      <div className="absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-ink to-transparent" />
      <div className="flex w-max animate-marquee gap-4">
        {loop.map((industry, index) => (
          <div
            key={`${industry}-${index}`}
            className="flex items-center gap-4 whitespace-nowrap rounded-full border border-white/[0.08] bg-white/[0.035] px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-white/[0.46]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-violet" />
            {industry}
          </div>
        ))}
      </div>
    </section>
  );
}
