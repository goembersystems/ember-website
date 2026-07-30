"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const FAQS = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most focused websites and automations ship in 2–8 weeks. Larger dashboards and custom software usually take 8–16 weeks, depending on scope and integrations.",
  },
  {
    question: "Do you work with contractors and local service businesses?",
    answer:
      "Yes. A large part of our work is helping contractors and service teams capture leads, automate follow-up, and replace spreadsheet-heavy workflows with reliable systems.",
  },
  {
    question: "What’s included in the free consultation?",
    answer:
      "We’ll review your goals, map bottlenecks, recommend an approach, and give you a clear next-step plan — whether or not you move forward with Ember Systems.",
  },
  {
    question: "Can you improve an existing website or tool?",
    answer:
      "Absolutely. We redesign, rebuild, or extend existing products when that’s faster and smarter than starting from scratch.",
  },
  {
    question: "How do pricing and estimates work?",
    answer:
      "Use the project estimator for a transparent starting range. Final pricing depends on scope, complexity, and integrations — we’ll confirm everything before build work begins.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="scroll-mt-24 py-20 sm:py-28" id="faq">
      <Reveal>
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-orange-300">
            FAQ
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Answers before we start building.
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-400">
            Clear expectations up front — so your project feels calm, focused,
            and well-run from day one.
          </p>
        </div>
      </Reveal>

      <div className="space-y-3">
        {FAQS.map((item, index) => {
          const open = openIndex === index;
          return (
            <Reveal delayMs={index * 60} key={item.question}>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                <button
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-white/[0.03] sm:px-6 sm:py-5"
                  onClick={() => setOpenIndex(open ? null : index)}
                  type="button"
                >
                  <span className="text-sm font-semibold text-white sm:text-base">
                    {item.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-orange-300 transition ${
                      open ? "rotate-45 bg-orange-400/10" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-7 text-zinc-400 sm:px-6 sm:pb-6">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
