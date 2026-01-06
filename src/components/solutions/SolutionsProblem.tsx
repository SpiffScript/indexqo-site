// src/components/solutions/SolutionsProblem.tsx

export const SolutionsProblem = () => {
  return (
    <section className="relative bg-stone-50/50 py-12 md:py-16">
      {/* Section label */}
      <div className="mb-12">
        <span className="block text-xs uppercase tracking-widest text-slate-500">
          The problem
        </span>
        <span className="mt-2 block h-px w-10 bg-slate-200" />
      </div>

      {/* Top grid */}
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        {/* LEFT */}
        <div className="flex gap-6">
          <span className="mt-2 h-20 w-px bg-sky-600" />
          <h2 className="max-w-xl text-4xl font-semibold leading-tight text-slate-900">
            <span className="block">Solutions fail when they</span>
            <span className="block">don’t defend against drift.</span>
          </h2>
        </div>

        {/* RIGHT */}
        <div className="space-y-6 text-slate-600">
          <p className="text-base leading-relaxed">
            A business can be doing real work and still look unclear from the
            outside. Not because the owner isn’t trying – but because the
            public footprint is shaped by disconnected decisions over time.
          </p>

          <p className="text-base leading-relaxed">
            New pages get added. Vendors change. Messaging shifts. Platforms
            evolve. Small inconsistencies compound until the signal no longer
            matches the operation. The gap creates friction: trust takes
            longer, sales cycles drag, and the business has to keep explaining
            itself.
          </p>

          <p className="text-base leading-relaxed">
            Campaigns can create spikes. Systems create continuity. If the
            structure isn’t designed to hold, momentum becomes maintenance.
          </p>
        </div>
      </div>

      {/* Soft divider */}
      <div className="mt-16 h-px w-full bg-slate-200" />
    </section>
  );
};

export default SolutionsProblem;
