// src/components/solutions/SolutionsHero.tsx

import React from "react";
import { Container } from "../ui/Container";
import { CtaButton } from "../ui/CtaButton";

export const SolutionsHero: React.FC = () => {
  return (
    <section className="bg-stone-50 border-b border-slate-200">
      <Container className="pt-20 pb-14 md:pt-28 md:pb-18">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <div className="text-[11px] uppercase tracking-[0.24em] text-sky-700">
            Solutions
          </div>

          {/* Headline */}
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.05]">
            Solutions aren’t campaigns.
            <span className="block mt-3 text-slate-500 font-semibold">
              They’re systems that keep the signal coherent.
            </span>
          </h1>

          {/* Accent rule */}
          <div className="mt-7 h-[1px] w-16 bg-sky-600" />

          {/* Body */}
          <p className="mt-7 text-base md:text-lg text-slate-700 leading-relaxed max-w-3xl">
            IndexQo is built to prevent drift – not to create bursts of output.
            We establish what’s true, correct what’s misaligned, and keep your
            messaging consistent across the places that shape trust: website,
            Google, social, listings, and internal touchpoints.
          </p>

          <p className="mt-4 text-base md:text-lg text-slate-700 leading-relaxed max-w-3xl">
            The goal is simple: meaning that compounds, not messages that drift –
            and a brand that remains true as the business evolves.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <CtaButton variant="primary" href="/contact">
              Start with the signal
            </CtaButton>

            <CtaButton variant="outline" href="/services">
              Review services
            </CtaButton>
          </div>

          {/* Micro reassurance */}
          <div className="mt-6 text-xs text-slate-500">
            Clear next steps. Typically within one business day.
          </div>
        </div>
      </Container>
    </section>
  );
};
