// src/components/about/AboutFAQ.tsx
import React from "react";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "scope-what-we-do",
    question: "What does IndexQo actually do?",
    answer:
      "IndexQo clarifies how your business is presented, understood, and evaluated before contact. That includes structural web design, messaging systems, visibility foundations, and operational brand assets. The goal is alignment — so customers arrive informed, not guessing.",
  },
  {
    id: "scope-out-of-scope",
    question: "What is intentionally out of scope?",
    answer:
      "IndexQo does not function as a high-volume marketing agency or content factory. We don’t run ad campaigns, chase trends, or produce work disconnected from operations. If clarity can’t be maintained, the work stops being effective.",
  },
  {
    id: "process-start",
    question: "How does an engagement typically start?",
    answer:
      "Engagements begin with a structured audit to surface gaps, assumptions, and misalignment. This establishes a shared baseline before any decisions are made or assets are touched. Clarity comes first — execution follows.",
  },
  {
    id: "process-first-phase",
    question: "What does the first phase focus on?",
    answer:
      "The first phase prioritizes structure, interpretation, and expectation control. We resolve ambiguity across messaging, navigation, and presence before expanding outward. This prevents rework and downstream friction.",
  },
  {
    id: "process-decisions",
    question: "How are decisions made and carried forward?",
    answer:
      "Decisions are documented, referenced, and enforced as the work progresses. Nothing lives only in conversation or preference. This keeps alignment intact as complexity increases.",
  },
  {
    id: "expectations-involvement",
    question: "What level of involvement is expected from the client?",
    answer:
      "Clients are expected to participate in key decisions and provide directional clarity. IndexQo handles structure and execution, but ownership remains shared. This work functions best with engaged leadership.",
  },
  {
    id: "expectations-timeline",
    question: "How should timelines and pacing be understood?",
    answer:
      "Timelines are shaped by scope, clarity, and decision velocity. Progress is steady, but never rushed at the expense of alignment. The objective is durability, not speed alone.",
  },
  {
    id: "expectations-pricing",
    question: "How are pricing and commitment approached?",
    answer:
      "Pricing reflects scope, complexity, and level of stewardship required. Engagements are structured intentionally, not packaged generically. The focus is long-term clarity, not short-term output.",
  },
];

export const AboutFaq: React.FC = () => {
  return (
    <section className="w-full py-24 bg-stone-50/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">

          {/* Left Column: Contextual Label */}
          <div className="lg:col-span-4 lg:sticky lg:top-12 h-fit">
            <div className="relative pl-8">
              <span className="absolute left-0 top-2 h-14 w-px bg-sky-600" />
              <div className="text-xs tracking-widest uppercase text-slate-500">
                Governance
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
                Working Model
              </h2>
              <p className="mt-4 text-lg leading-7 text-slate-600">
                How engagement is structured once alignment is clear.
              </p>
            </div>
          </div>

          {/* Right Column: Exclusive Accordion */}
          <div className="lg:col-span-8">
            <div className="border-t border-slate-200">
              {FAQ_ITEMS.map((item) => (
                <details
                  key={item.id}
                  name="working-model-faq" // Shared name enables the "accordion" behavior
                  className="group border-b border-slate-200"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between py-6 transition-all hover:bg-white/40">
                    {/* Text turns blue when the group is open */}
                    <span className="text-lg font-medium tracking-tight text-slate-900 pr-8 transition-colors duration-300 group-open:text-sky-600">
                      {item.question}
                    </span>

                    {/* +/- Icon turns blue when open */}
                    <div className="relative flex h-5 w-5 flex-none items-center justify-center text-slate-400 transition-colors duration-300 group-open:text-sky-600">
                      {/* Vertical bar: rotates and fades out */}
                      <div className="h-4 w-0.5 bg-current transition-all duration-300 group-open:rotate-90 group-open:opacity-0" />
                      {/* Horizontal bar: stays to form the 'minus' */}
                      <div className="absolute h-0.5 w-4 bg-current" />
                    </div>
                  </summary>

                  <div className="pb-8 pr-12">
                    <p className="text-base leading-7 text-slate-600 max-w-2xl">
                      {item.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutFaq;
