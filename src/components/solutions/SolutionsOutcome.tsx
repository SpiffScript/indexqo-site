// src/components/solutions/SolutionsOutcome.tsx

import React from "react";

export const SolutionsOutcome: React.FC = () => {
  return (
    <section className="bg-stone-50 py-16 md:py-20">
      {/* Added mx-auto to maintain center alignment for this constrained block */}
      <div className="max-w-7xl mx-auto">
        <div className="mt-10 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-start">
          {/* LEFT */}
          <div className="relative lg:pl-10">
            {/* Vertical rule */}
            <div className="absolute left-0 top-9 h-21 w-px bg-sky-600 hidden lg:block" />

            {/* Section label */}
            <p className="text-xs uppercase tracking-widest text-slate-500">
              What this creates
            </p>

            <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 leading-tight">
              Stability is the outcome.
              <span className="block text-slate-600 font-normal">
                Alignment is the reason.
              </span>
            </h2>
          </div>

          {/* RIGHT */}
          <div className="max-w-2xl space-y-8 text-base leading-relaxed text-slate-600">
            <p>
              IndexQo exists to protect alignment as a business evolves. When
              that alignment holds, everything downstream gets quieter –
              trust, clarity, and continuity stop needing constant effort.
            </p>

            <p>
              Your public footprint stops contradicting itself. Changes no
              longer require re-explaining who you are. Growth doesn’t
              introduce confusion or reset trust every time something shifts.
            </p>

            <p>
              This is what stability looks like: the outside stays coherent
              because it is anchored to what’s true inside the business – not
              to tactics, trends, or short-term output.
            </p>
          </div>
        </div>

        <div className="mt-16 h-px w-full bg-slate-200" />
      </div>
    </section>
  );
};

export default SolutionsOutcome;
