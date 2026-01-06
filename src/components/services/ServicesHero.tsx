// src/components/services/ServicesHero.tsx
import React from "react";
import { CtaButton } from "../ui/CtaButton";

export const ServicesHero: React.FC = () => {
  return (
    <section className="relative min-h-[75vh] lg:min-h-[85vh] overflow-hidden rounded-none border border-white/10 bg-black flex items-end">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/services/services-operations-workspace.jpg"
          alt="Small business workshop with multiple active work areas"
          className="h-full w-full object-cover"
        />

        {/* Base overlay for legibility */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Left-weighted gradient for copy */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.85) 5%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.1) 90%)",
          }}
        />
      </div>

      {/* THE FIX:
          1. Removed 'w-full' which was forcing it to stay pinned left.
          2. Added 'max-w-7xl' to define the same "track" as your other heroes.
          3. Added 'mx-auto' to center that track on the screen.
      */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14 pt-24 sm:px-10 sm:pb-16 sm:pt-28 lg:px-14 lg:pb-20 lg:pt-32">
        <div className="max-w-2xl">
          {/* Kicker */}
          <div className="mb-6 border-l-2 border-white/30 pl-4 text-sm uppercase tracking-wide text-white/60">
            Services
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Outcome-based work.
            <br />
            Executed with one discipline.
          </h1>

          {/* Subhead */}
          <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
            This page outlines where structure, language, and visibility shape
            expectation – before a conversation ever begins.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <CtaButton href="/contact" variant="secondary">
              Start a conversation
            </CtaButton>
            <CtaButton href="#services" variant="primary">
              View services
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
};
