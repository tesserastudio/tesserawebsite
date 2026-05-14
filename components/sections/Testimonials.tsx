"use client";

import { testimonials } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section className="section-padding">
      <div className="site-container">
        <Reveal>
          <SectionHeading
            eyebrow="Client words"
            title={
              <>
                Warm feedback from <span className="gradient-text">sharp operators.</span>
              </>
            }
            description="Teams come to Tessera Studio when they want a tighter story, a sharper website and a growth system that actually earns its keep."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.1}>
              <article className="glass-card h-full rounded-[2rem] p-6 transition hover:-translate-y-2 hover:border-violet/45">
                <div className="flex gap-1 text-amber-300" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <span key={star}>*</span>
                  ))}
                </div>
                <blockquote className="mt-7 text-xl font-medium leading-9 text-white/[0.82]">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-violet to-electric font-bold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-white/[0.48]">{testimonial.company}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
