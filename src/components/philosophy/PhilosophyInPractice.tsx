import React from "react";
import { Container } from "../ui/Container";

export const PhilosophyInPractice: React.FC = () => {
  return (
    <section className="bg-stone-50 py-16 lg:py-28 border-t border-slate-200">
      <Container>
        <div className="max-w-4xl mb-18">
          <h2 className="text-4xl font-semibold text-slate-900 mb-6">In practice.</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Clarity only matters if it holds up under real conditions. These are
            common patterns we see inside small businesses – and the posture we
            take when clarity, trust, and representation begin to separate.
          </p>
        </div>

        <div className="space-y-18">
          {/* Pattern 01 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4 text-sm font-bold tracking-widest text-sky-600 uppercase">
              Pattern 01
            </div>
            <div className="md:col-span-8 space-y-6">
              <h3 className="text-2xl font-semibold text-slate-900">When Good Work Isn’t Visible</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                A business can operate at a high standard while the outside world
                struggles to understand what it does, why it matters, or what to
                expect. The work is real – but it isn’t consistently legible.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                When that gap forms, trust lags behind reality. Growth feels
                heavier than it should. Teams feel unseen. Context gets rebuilt
                over and over instead of compounding.
              </p>
              <div className="pt-2">
                <a
                  href="/brandqo"
                  className="inline-block bg-slate-900 text-slate-50 px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-200 hover:bg-slate-800 focus:outline-none"
                >
                  Our Principle: Accuracy
                </a>
              </div>
            </div>
          </div>

          {/* Pattern 02 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-4 text-sm font-bold tracking-widest text-sky-600 uppercase">
              Pattern 02
            </div>
            <div className="md:col-span-8 space-y-6">
              <h3 className="text-2xl font-semibold text-slate-900">When Execution Outpaces Coherence</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                As a business grows, decisions get made quickly and in isolation.
                Tools, partners, pages, messages – each choice solves a real
                problem in the moment.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Over time, those pieces stop reinforcing each other. The business
                still runs, but its voice fragments. Presence becomes uneven.
                The outside world receives mixed signals.
              </p>
              <div className="pt-2">
                <a
                  href="/services"
                  className="inline-block bg-slate-900 text-slate-50 px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-200 hover:bg-slate-800 focus:outline-none"
                >
                  Our Principle: Coherence
                </a>
              </div>
            </div>
          </div>

          {/* Repeat this grid structure for the remaining 3 patterns in your file... */}
        </div>
        <div className="mt-20 lg:mt-28 max-w-4xl mx-auto border-l-2 border-sky-600 pl-6 lg:pl-16 py-2">
          <p className="text-2xl leading-[1.2] md:text-3xl lg:text-4xl text-slate-900 font-semibold tracking-tight">
            The market doesn’t reward great work.
            <br />
            <span className="text-slate-600">It rewards great messaging.</span>
          </p>
          <p className="mt-4 text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed">
            When the brand doesn’t lead, your progress has nothing to follow.
          </p>
        </div>
      </Container>
    </section>
  );
};
