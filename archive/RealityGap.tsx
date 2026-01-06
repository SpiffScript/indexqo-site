import React from "react";

export const RealityGap: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-slate-900 text-stone-50 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">

        {/* Left: framing */}
        <div>
          <h2 className="text-3xl md:text-4xl font-medium mb-8 tracking-tight text-stone-50">
            The Reality Gap
          </h2>

          <p className="text-stone-400 text-lg leading-relaxed mb-6">
            Most small businesses are competent but poorly represented. They do
            good work, employ real people, and carry real risk. Yet their
            public-facing presence feels neglected, inconsistent, or immature.
          </p>

          <p className="text-stone-400 text-lg leading-relaxed">
            Presentation becomes a constant “we’ll get to that later” problem.
            Later never comes. IndexQo solves this permanently by treating
            branding as an operational discipline, not a creative exercise.
          </p>
        </div>

        {/* Right: principles */}
        <div className="flex flex-col justify-center space-y-12">
          <div className="border-l border-slate-700 pl-6">
            <h3 className="text-xl font-medium mb-2 text-stone-50">
              Restraint
            </h3>
            <p className="text-stone-400">
              Nothing is decorative for its own sake. White space reduces noise.
              Hierarchy guides attention.
            </p>
          </div>

          <div className="border-l border-slate-700 pl-6">
            <h3 className="text-xl font-medium mb-2 text-stone-50">
              Directness
            </h3>
            <p className="text-stone-400">
              Language is human and factual. We do not use cleverness to hide
              lack of substance.
            </p>
          </div>

          <div className="border-l border-slate-700 pl-6">
            <h3 className="text-xl font-medium mb-2 text-stone-50">
              Stewardship
            </h3>
            <p className="text-stone-400">
              We maintain the standard over time so the business never slides
              back into neglect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
