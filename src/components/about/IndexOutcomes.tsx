import React from "react";

export const IndexOutcome: React.FC = () => {
  return (
    <section className="bg-stone-50 py-16">
      {/* Section label */}
      <div className="mb-12">
        <p className="text-xs uppercase tracking-widest text-slate-500">
          THE OUTCOME
        </p>
        <div className="mt-3 h-px w-14 bg-slate-300" />
      </div>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: headline with accent */}
        <div>
          <div className="inline-flex items-start gap-6">
            {/* Accent line: same height as the headline */}
            <div className="mt-1 h-[5em] w-px bg-sky-600/70" />

            <h2 className="text-4xl font-semibold leading-tight text-slate-900">
              What changes,
              <br />
              when structure is right.
            </h2>
          </div>
        </div>

        {/* Right: body */}
        <div className="text-slate-700 leading-relaxed">
          <ul className="space-y-3">
            <li>Trust forms faster</li>
            <li>Decisions land cleaner</li>
            <li>Your presence filters for you</li>
            <li>Growth creates leverage instead of noise</li>
          </ul>

          <p className="mt-8">
            Nothing feels louder than clarity. Everything feels more certain.
          </p>

          <p className="mt-4">
            That’s not branding. That’s alignment enforced over time.
          </p>
        </div>
      </div>
    </section>
  );
};
