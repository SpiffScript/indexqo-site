import React from "react";
import { Container } from "../ui/Container";

export const PhilosophyFragmentation: React.FC = () => {
  return (
    <section className="bg-stone-50 py-16 lg:py-28">
      <Container>
        <div className="max-w-5xl">
          <h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-16">
            Why misalignment is so common
          </h2>

          <div className="space-y-12 lg:space-y-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
              <p className="text-lg text-slate-600 leading-relaxed">
                Most small businesses operate inside complex systems without a unifying owner. Over time,
                platforms accumulate. Vendors stack. Tools are added to solve immediate problems – marketing,
                scheduling, finance, hiring, analytics, support. Each choice is reasonable.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Together, they create an environment where no single voice governs meaning. Enterprise
                organizations survive this level of complexity because coherence is protected.
                Standards are enforced. Decisions are integrated. Small businesses are rarely afforded that
                structure.
              </p>
            </div>

            <div className="pl-8 border-l-2 border-sky-600">
              <p className="text-2xl text-slate-900 font-light leading-relaxed max-w-3xl">
                As systems multiply, representation becomes distributed. Voice fragments. Public presence stops
                reflecting how the business actually operates – not through failure or neglect, but through
                <span className="font-semibold italic text-slate-900"> drift, </span>
                unmanaged complexity, competing priorities and disconnected systems.
              </p>
            </div>

            <p className="text-lg text-slate-600 italic max-w-3xl">
              Misalignment isn’t a mistake. It’s the default outcome when coherence isn’t defended.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
