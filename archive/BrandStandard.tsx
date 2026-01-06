import React from "react";
import { Container } from "../ui/Container";
import { CtaButton } from "../ui/CtaButton";

export const BrandStandard: React.FC = () => {
  return (
    <section className="bg-white py-32 lg:py-48">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

          {/* THE TRACK: Keeping the eye on the left alignment */}
          <div className="lg:col-span-8 lg:col-start-2">

            {/* The "Wisdom" Statement */}
            <h2 className="text-4xl md:text-6xl font-serif font-medium text-stone-900 leading-[1.15] mb-12 italic">
              Presentation is the easiest thing to postpone, and<br className="hidden md:block" />
              the hardest to recover.
            </h2>

            {/* The "Body" Text: Narrower for better readability */}
            <div className="max-w-xl">
              <p className="text-xl md:text-2xl text-stone-600 leading-relaxed font-light mb-12">
                IndexQo helps small businesses align their public face with their operational
                reality. Not a marketing agency. Not an internal hire. A steady hand to fix
                the drift.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <CtaButton variant="primary" href="/contact" className="px-10 py-4">
                  Check for Drift
                </CtaButton>
                <CtaButton variant="secondary" href="#principles">
                  Read Our Principles
                </CtaButton>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
