"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import Script from "next/script";

const faqs = [
  {
    q: "What does Tessera Studio do and where are you based?",
    a: "Tessera Studio is a Bangalore-based digital studio founded by a Chittoor native. We build premium, high-performance websites, AI automation systems, branding identity architectures, and digital lead-generation experiences for growing businesses across India."
  },
  {
    q: "What services do you offer?",
    a: "We offer custom website design and development, AI automation workflows (including AI receptionists, CRM integrations, and automated lead follow-up), visual brand identity design (logos, guidelines, and social assets), and strategic lead-generation platforms."
  },
  {
    q: "Do you partner with businesses in other cities like Chittoor?",
    a: "Yes. We work with ambitious brands across India, including Bengaluru, Chittoor, Andhra Pradesh, and Karnataka. While our primary base is in Bangalore, we leverage our roots to partner closely with regional businesses in Andhra Pradesh who want to establish a premium, competitive online presence."
  },
  {
    q: "How much does a project with Tessera Studio cost?",
    a: "Pricing is tailored based on your specific goals — such as design complexity, custom integrations, the number of pages, and required automation logic. We provide transparent, itemized proposals after a discovery call. Contact us to get started."
  },
  {
    q: "What is AI automation and how does it benefit my business?",
    a: "AI automation streamlines manual front-office and follow-up workflows. We build custom AI receptionists, WhatsApp enquiry flows, and automated CRM pipelines that capture leads 24/7, qualify them instantly, and hand them off to your team, saving hours of manual labor."
  },
  {
    q: "Can you help elevate our existing brand identity?",
    a: "Absolutely. We build complete, unified brand identity systems from the ground up — designing premium logos, modern typography systems, harmonized color palettes, and comprehensive brand guidelines that build deep customer trust across every digital touchpoint."
  }
];

function FAQItem({ q, a, index, activeIndex, setActiveIndex }: { q: string; a: string; index: number; activeIndex: number | null; setActiveIndex: (i: number | null) => void }) {
  const isOpen = activeIndex === index;

  return (
    <article className="border-b border-white/[0.08] py-5">
      <button
        type="button"
        onClick={() => setActiveIndex(isOpen ? null : index)}
        className="flex w-full items-center justify-between text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-white/90 transition hover:text-white sm:text-lg">
          {q}
        </span>
        <span className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/[0.12] text-xs text-white/[0.42] transition duration-300">
          <motion.span
            animate={{ rotate: isOpen ? 135 : 0 }}
            transition={{ duration: 0.25 }}
          >
            ＋
          </motion.span>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="mt-4 leading-8 text-white/[0.56] text-sm sm:text-base pr-6">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  // Generate FAQPage JSON-LD schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section className="section-padding relative">
      <Script
        id="faq-schema-markup"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="site-container max-w-4xl">
        <Reveal>
          <div className="text-center">
            <p className="eyebrow">Clear Answers</p>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-5 text-base leading-8 text-white/[0.58] sm:text-lg">
              Got a question about working with Tessera Studio? Here is what most businesses ask.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 rounded-[2rem] border border-white/[0.08] bg-[#090909]/40 p-6 backdrop-blur-md sm:p-10">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              q={faq.q}
              a={faq.a}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
