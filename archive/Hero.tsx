import React from "react";
import { CtaButton } from "../ui/CtaButton";
import { Container } from "../ui/Container";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-stone-50">
      <Container className="py-24 md:py-32">
        <div className="max-w-3xl">
          {/* Kicker */}
          <div className="mb-6 border-l border-slate-300 pl-4 text-sm uppercase tracking-wide text-slate-500">
            External Reality Defense
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900">
            Small businesses aren’t invisible.
            <br />
            They’re misrepresented.
          </h1>

          {/* Body */}
          <p className="mt-8 text-lg leading-relaxed text-slate-700 max-w-2xl">
            We correct the signal surrounding your business — aligning what you
            actually do with what the outside world sees.
            <br />
            <br />
            That means less distortion, fewer mismatched expectations, and
            better-fit customers from the first interaction onward.
          </p>

          {/* CTAs */}
          <div className="mt-12 flex flex-wrap gap-4">
            <CtaButton variant="primary">Brand Audit</CtaButton>
            <CtaButton variant="secondary">View the standards</CtaButton>
          </div>
        </div>
      </Container>
    </section>
  );
};
