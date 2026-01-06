// src/components/solutions/SolutionsModel.tsx

import React from "react";

type Phase = {
  label: string;
  title: string;
  body: string;
};

const phases: Phase[] = [
  {
    label: "PHASE 01",
    title: "Baseline",
    body:
      "We establish what’s true – across your site, listings, messaging, and visibility signals. Not to critique. To get alignment on reality before anything is changed.",
  },
  {
    label: "PHASE 02",
    title: "Rebuild",
    body:
      "We correct what’s misaligned and rebuild the surface area that carries your signal. Structure first. Then language. Then design. Everything supports the same meaning.",
  },
  {
    label: "PHASE 03",
    title: "Stewardship",
    body:
      "We keep the system from regressing. As your business evolves, your public footprint stays coherent – so trust doesn’t get slower every time you grow.",
  },
];

export const SolutionsModel: React.FC = () => {
  return (
    <section className="bg-stone-50">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <p className="text-xs uppercase tracking-widest text-slate-500">
          The model
        </p>
        <div className="mt-3 h-px w-10 bg-slate-200" />

        {/* Headline + lead */}
        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 leading-tight">
            A simple sequence.
            <span className="block text-slate-600 font-normal">
              Built to hold over time.
            </span>
          </h2>

          <div className="space-y-6 text-base leading-relaxed text-slate-600">
            <p>
              IndexQo is delivered as a system – not a burst of output. Each
              phase protects the next. Skipping steps is how drift returns.
            </p>
            <p>
              This sequence stays the same whether you’re rebuilding from
              scratch or tightening a footprint that already works. The goal
              is continuity: the outside stays aligned with the operation as
              the operation changes.
            </p>
          </div>
        </div>

        {/* Phases */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {phases.map((p) => (
            <div
              key={p.label}
              className="
                group
                h-full
                border border-slate-200
                bg-white
                p-8
                transition-all duration-200
                hover:-translate-y-1
                hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]
              "
            >
              {/* Top label + rule (matches NextSteps card behavior) */}
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono font-semibold tracking-widest text-sky-600">
                  {p.label}
                </span>
                <span className="h-px flex-1 bg-slate-200 transition-colors duration-200 group-hover:bg-sky-500" />
              </div>

              <h3 className="mt-6 text-lg font-semibold tracking-tight text-slate-900">
                {p.title}
              </h3>

              <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsModel;
