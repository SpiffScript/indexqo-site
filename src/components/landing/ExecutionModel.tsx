import React from "react";

export const ExecutionModel: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Intro */}
      <div className="space-y-4">
        <p className="text-lg leading-relaxed text-slate-700">
          You don’t fix misrepresentation with campaigns. You fix it by replacing
          drift with structure.
        </p>

        <p className="text-lg leading-relaxed text-slate-600">
          Structural Operations is how IndexQo turns doctrine into something
          durable – systems that hold up as the business grows, people change,
          and signals multiply.
        </p>
      </div>

      {/* Operating principles */}
      <div className="space-y-6">
        <h3 className="text-3xl font-semibold uppercase tracking-wide text-slate-900">
          Operating principles
        </h3>

        <div className="space-y-2 text-lg text-slate-700">
          <p>We don’t optimize for activity; we solve for signal integrity.</p>
          <p>If it cannot be governed, it does not ship.</p>
          <p>If it cannot be defended, it will not scale.</p>
          <p>Infrastructure over aesthetics.</p>
          <p>Contradiction is the primary enemy. </p>
            <p className="pt-4 text-xl text-center font-semibold text-slate-900 italic tracking-tight">
            Clarity is the only solution.
          </p>
        </div>

        <div className="pt-2 pl-12 md:pl-20 text-left leading-relaxed border-l-2 border-slate-100">
          <p className="text-lg text-slate-600">
            Every system we touch must reinforce the same reality,
          </p>
          <p className="text-xl font-semibold text-slate-900 italic tracking-tight py-1">
            internally and externally,
          </p>
          <p className="text-lg text-slate-600">
            without explanation, interpretation, or theatrics.
          </p>
        </div>
      </div>
      {/* Soft divider */}
      <div className="mt-12 h-px w-full bg-slate-200" />
    </div>
  );
};

export default ExecutionModel;
