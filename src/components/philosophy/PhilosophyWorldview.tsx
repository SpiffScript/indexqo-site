import React from "react";
import { Container } from "../ui/Container";

export const PhilosophyWorldview: React.FC = () => {
  return (
    <section className="bg-stone-50 py-16 lg:py-28 border-t border-slate-200">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Layer 1: The Hook */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-[1.1]">
              The reality small <br />
              businesses operate in.
            </h2>
            <div className="mt-8 h-px w-24 bg-sky-600" />
          </div>

          {/* Layer 2: The Logic (Full Text) */}
          <div className="lg:col-span-7 lg:pl-12 space-y-8">
            <p className="text-lg text-slate-600 leading-relaxed">
              Small businesses don’t operate in theory. They operate in{" "}
              <span className="text-black font-medium">tradeoffs</span>. Time is
              limited. Attention is divided. Decisions are made under pressure,
              often with incomplete information.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              Product, people, and operations take priority because they have to.
              Communication, presentation, and external clarity aren't ignored –
              they’re postponed in favor of what feels more urgent in the moment.
            </p>

            {/* Layer 3: The Conclusion */}
            <div className="pt-8 border-t border-slate-200">
              <p className="text-lg text-slate-600 italic leading-relaxed max-w-xl">
                Sustainable success has to account for this reality. Not an idealized
                version of how things should work, but the conditions businesses are
                actually navigating.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
