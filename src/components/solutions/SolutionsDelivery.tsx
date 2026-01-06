// src/components/solutions/SolutionsDelivery.tsx

import React from "react";

type Phase = {
  label: string;
  title: string;
  intent: string;
  outcomes: string[];
  guardrail: string;
};

const phases: Phase[] = [
  {
    label: "Phase 01",
    title: "Baseline",
    intent:
      "Establish a shared reality. We remove assumption, surface contradictions, and define what “aligned” actually means for your business before anything moves.",
    outcomes: [
      "A single source of truth for the public footprint",
      "Clear priority list: what matters, what’s noise, what’s missing",
      "Decision criteria for every change that follows",
    ],
    guardrail:
      "If the baseline is skipped, changes become opinion-driven and drift returns quickly.",
  },
  {
    label: "Phase 02",
    title: "Rebuild",
    intent:
      "Re-align the system. We correct what’s misrepresenting you and rebuild the surface area so the outside matches the operation – structure first, then language, then design.",
    outcomes: [
      "A coherent public narrative across pages and surfaces",
      "Reduced contradiction between channels",
      "A footprint that can scale without rework every quarter",
    ],
    guardrail:
      "If rebuild is rushed, you get output – without continuity – and the same confusion reappears later.",
  },
  {
    label: "Phase 03",
    title: "Stewardship",
    intent:
      "Hold the alignment over time. The business evolves; the footprint must evolve with it – without resetting trust or creating new fragmentation.",
    outcomes: [
      "Changes happen without breaking coherence",
      "Ongoing drift detection and correction",
      "Continuity through growth, hires, vendors, and platform shifts",
    ],
    guardrail:
      "Without stewardship, alignment decays slowly – and the cost shows up as friction, not a single failure event.",
  },
];

export const SolutionsDelivery: React.FC = () => {
  return (
  <section className="bg-stone-50">
    <div className="max-w-5xl mx-auto">
      <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
        {/* LEFT */}
        <div className="relative lg:pl-10">
          {/* Vertical rule */}
          <div className="absolute left-0 top-10 h-32 w-px bg-sky-600 hidden lg:block" />

          {/* Section label */}
          <p className="text-xs uppercase tracking-widest text-slate-500">
            Delivery
          </p>

          {/* Headline */}
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 leading-tight">
            The work is phased on purpose.
            <span className="block text-slate-600 font-normal">
              Each stage protects the next.
            </span>
          </h2>
        </div>

          <div className="max-w-2xl space-y-6 text-base leading-relaxed text-slate-600">
            <p>
              The system is built for durability, not output spikes. Its purpose is to maintain
              alignment—so your external presence holds steady as the business grows, shifts, and recalibrates.
            </p>
            <p>
              These phases are structural containers. The specific work inside
              them depends on what’s true for the business today – but the
              sequence stays intact so coherence doesn’t get rebuilt from
              scratch every time something changes.
            </p>
          </div>
        </div>

        {/* Phases */}
        <div className="mt-14 space-y-10">
          {phases.map((p) => (
            <div
              key={p.label}
              className="bg-white border border-slate-200 p-8"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-widest text-sky-600">
                  {p.label}
                </span>
                <span className="h-px flex-1 bg-slate-200" />
              </div>

              <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
                {/* Left */}
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-slate-600">
                    {p.intent}
                  </p>

                  <p className="mt-6 text-sm font-medium text-slate-900">
                    Guardrail
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {p.guardrail}
                  </p>
                </div>

                {/* Right */}
                <div>
                  <p className="text-sm font-medium text-slate-900">
                    What this produces
                  </p>
                  <ul className="mt-4 space-y-3 text-sm text-slate-700">
                    {p.outcomes.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 bg-slate-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
          <div className="mt-16 flex justify-end items-center gap-4 group">
            <div className="h-px w-12 bg-slate-200 transition-colors group-hover:bg-sky-600" />
            <a
              href="/next-steps"
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              Continue to Next Steps →
            </a>
          </div>
        <div className="mt-16" />
      </div>
    </section>
  );
};

export default SolutionsDelivery;
