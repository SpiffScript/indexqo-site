import React from "react";

export const WhatIndexQoDoes: React.FC = () => {
  return (
    <section className="bg-stone-50 max-w-5xl mx-auto py-16">
      {/* Section label */}
      <div className="mb-12">
        <p className="text-xs uppercase tracking-widest text-slate-500">
          WHAT INDEXQO DOES
        </p>
        <div className="mt-3 h-px w-14 bg-slate-300" />
      </div>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: headline with blue accent */}
          <div className="inline-flex items-start gap-6">
            {/* Accent line: same height as the headline */}
            <div className="mt-1 h-[5em] w-px bg-sky-600/70" />
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-slate-900">
              Infrastructure,
              <br />
              not expression.
            </h2>
          </div>


        {/* Right: body */}
        <div className="space-y-5 text-slate-700 leading-relaxed">
          <p>
            IndexQo treats brand and digital presence as infrastructure — not
            expression.
          </p>

          <p>
            We don’t create attention. We don’t manufacture interest. We don’t
            optimize for activity.
          </p>

          <p>
            We enforce a single standard so that what a business is internally is
            what the outside world consistently understands.
          </p>

          <p>
            That includes how it’s indexed by machines, recognized by humans,
            interpreted by partners, and trusted by customers — without
            explanation, persuasion, or theatrics.
          </p>
        </div>
      </div>

      {/* Bridge + divider (placeholder copy) */}
      <div className="pt-12">
        <p className="text-center text-xl md:text-2xl font-semibold text-slate-900">
          Systems don’t reward effort. They reward coherence.
        </p>
      </div>
      <div className="mt-16 h-px w-full bg-slate-200" />
    </section>
  );
};
