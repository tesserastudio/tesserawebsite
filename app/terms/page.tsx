import type { Metadata } from "next";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms | Tessera Studio",
  description: "Basic website use terms for visitors and prospective Tessera Studio clients."
};

export default function TermsPage() {
  return (
    <section className="section-padding pt-36 sm:pt-40">
      <div className="site-container max-w-4xl">
        <p className="eyebrow">Terms</p>
        <h1 className="mt-6 font-display text-5xl font-bold tracking-[-0.06em] sm:text-6xl">
          A few simple ground rules.
        </h1>
        <div className="mt-10 grid gap-8 text-white/[0.66]">
          <section className="glass-card rounded-[2rem] p-6">
            <h2 className="font-display text-2xl font-bold text-white">Website use</h2>
            <p className="mt-4 leading-8">
              This site is provided for information about Tessera Studio and its services. Content
              may change over time as the studio updates its work, offers and positioning.
            </p>
          </section>
          <section className="glass-card rounded-[2rem] p-6">
            <h2 className="font-display text-2xl font-bold text-white">Project inquiries</h2>
            <p className="mt-4 leading-8">
              Submitting the contact form does not create a formal client relationship. Project work
              begins only after scope, timelines, pricing and terms are agreed in writing.
            </p>
          </section>
          <section className="glass-card rounded-[2rem] p-6">
            <h2 className="font-display text-2xl font-bold text-white">Intellectual property</h2>
            <p className="mt-4 leading-8">
              Unless otherwise stated, the website design, copy and brand presentation on this site
              belong to Tessera Studio. Do not reproduce or republish substantial portions without
              permission.
            </p>
          </section>
          <section className="glass-card rounded-[2rem] p-6">
            <h2 className="font-display text-2xl font-bold text-white">Contact</h2>
            <p className="mt-4 leading-8">
              For questions about these terms, contact {company.email}.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
