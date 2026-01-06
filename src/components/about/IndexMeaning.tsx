import React from "react";

export const IndexMeaning: React.FC = () => {
  return (
    <section className="bg-stone-50 py-16">
      {/* Section label */}
      <div className="mb-12">
        <p className="text-xs uppercase tracking-widest text-slate-500">
          WHAT “INDEX” MEANS
        </p>
        <div className="mt-3 h-px w-14 bg-slate-300" />
      </div>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: headline with blue accent */}
        <div className="inline-flex items-start gap-6">
            {/* Accent line: same height as the headline */}
            <div className="mt-1 h-[5em] w-px bg-sky-600/70" />
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-slate-900">
              Why structure determines
              <br />
              how a business is understood.
            </h2>
        </div>

        {/* Right: body */}
        <div className="space-y-5 text-slate-700 leading-relaxed">
          <p>
            <span className="text-xl font-medium text-slate-900 italic">
              Every business already operates inside an index.
            </span>
          </p>

          <p>
            Search engines, platforms, partners, and customers don’t see a
            business directly. They interpret signals – structure, consistency,
            language, standards, and behavior over time.
          </p>

          <p>That interpretation becomes reality.</p>

          <p>
            An index isn’t marketing. It’s how systems decide what something is,
            how reliable it is, and how it should be treated.
          </p>

          <p>
            When structure is sound, interpretation is accurate. When structure
            degrades, meaning distorts – quietly and progressively.
          </p>

          <p>IndexQo exists to protect that layer.</p>
        </div>
      </div>
    </section>
  );
};
