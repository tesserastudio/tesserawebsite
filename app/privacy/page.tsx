import type { Metadata } from "next";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy | Tessera Studio",
  description: "How Tessera Studio collects, uses and protects project inquiry information."
};

export default function PrivacyPage() {
  return (
    <section className="section-padding pt-36 sm:pt-40">
      <div className="site-container max-w-4xl">
        <p className="eyebrow">Privacy policy</p>
        <h1 className="mt-6 font-display text-5xl font-bold tracking-[-0.06em] sm:text-6xl">
          We keep data collection practical and minimal.
        </h1>
        <div className="mt-10 grid gap-8 text-white/[0.66]">
          <section className="glass-card rounded-[2rem] p-6">
            <h2 className="font-display text-2xl font-bold text-white">What we collect</h2>
            <p className="mt-4 leading-8">
              When you use the contact form, we may collect your name, email address, company,
              selected service, budget range and project notes.
            </p>
          </section>
          <section className="glass-card rounded-[2rem] p-6">
            <h2 className="font-display text-2xl font-bold text-white">How we use it</h2>
            <p className="mt-4 leading-8">
              We use inquiry information to respond to project requests, assess fit, prepare
              proposals and improve how the site handles inbound leads.
            </p>
          </section>
          <section className="glass-card rounded-[2rem] p-6">
            <h2 className="font-display text-2xl font-bold text-white">Storage and sharing</h2>
            <p className="mt-4 leading-8">
              Information submitted through the site may be stored in internal systems or forwarded
              to approved workflow tools used by Tessera Studio. We do not sell your information.
            </p>
          </section>
          <section className="glass-card rounded-[2rem] p-6">
            <h2 className="font-display text-2xl font-bold text-white">Contact</h2>
            <p className="mt-4 leading-8">
              Questions about privacy can be sent to {company.email}. We will update this page if
              the way we handle information changes materially.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
