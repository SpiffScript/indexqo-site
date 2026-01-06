import React from "react";

export const WhyStructure: React.FC = () => {
  return (
    <section className="bg-stone-50 py-16">
      {/* Section label */}
      <div className="mb-12">
        <p className="text-xs uppercase tracking-widest text-slate-500">
          WHY STRUCTURE COMES FIRST
        </p>
        <div className="mt-3 h-px w-14 bg-slate-300" />
      </div>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: headline with blue accent */}
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-slate-900">
            Drift is the real threat.
          </h2>
          <div className="h-px w-[25%] bg-sky-600/70" />
        </div>

        {/* Right: body */}
        <div className="space-y-5 text-slate-700 leading-relaxed">
          <p>Most misrepresentation doesn’t come from bad intent. It comes from drift.</p>

          <p>
            New tools. New vendors. New hires. Shortcuts accumulate. Standards
            blur. Signals fragment.
          </p>

          <p>Eventually, execution outpaces coherence.</p>

          <p>
            IndexQo intervenes at the structural level — where clarity is
            established, governed, and defended — so growth compounds instead of
            eroding meaning.
          </p>
        </div>
      </div>

      {/* Bridge + divider (placeholder copy) */}
      <div className="mt-14 pt-10">
        <p className="text-center text-sm text-slate-500">
          The market doesn’t see intent. It sees what holds.
        </p>
      </div>
    </section>
  );
};
