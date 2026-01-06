import React from "react";
import { CtaButton } from "../ui/CtaButton";
import { Container } from "../ui/Container";

export const HeroClarity: React.FC = () => {
  return (
    <section className="relative min-h-[75vh] lg:min-h-[85vh] overflow-hidden rounded-none border border-white/10 bg-black flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/landing/clarity-system-interchange.jpg"
          alt="Abstract highway interchange representing clarity, structure, and strategic direction in modern business systems."
          className="h-full w-full object-cover"
        />
        {/* Overlay for legibility */}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <Container className="relative z-10 w-full px-6 py-16 pt-24 sm:px-10 sm:py-20 sm:pt-28 lg:px-14 lg:py-24 lg:pt-32">
        <div className="max-w-3xl">
          {/* Kicker */}
          <div className="mb-6 border-l border-white/30 pl-4 text-sm uppercase tracking-wide text-white/60">
            Marketplace Reality
          </div>

          {/* Headline */}
          <h1 className="flex flex-col gap-2 sm:gap-3 font-semibold tracking-tight text-white">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="text-blue-400">Clarity</span> is the most
            </span>
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              underpriced advantage
            </span>
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              in business.
            </span>
          </h1>

          {/* Body */}
          <p className="mt-8 text-lg sm:text-xl font-semibold leading-relaxed text-white/80 max-w-2xl">
            You don&apos;t need to be everywhere.
            <br />
            You need to be{" "}
            <span className="font-semibold text-blue-400">undeniable</span> where you are.
          </p>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="mt-6 flex flex-wrap gap-4">
              <CtaButton
                variant="secondary"
                href="/contact"
              >
                Brand Audit
              </CtaButton>

              <CtaButton
                variant="primary"
                href="/signal"
              >
                The Signal
              </CtaButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
