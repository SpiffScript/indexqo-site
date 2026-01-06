import React from "react";
import { Container } from "../ui/Container";

export const IndexQoWhy: React.FC = () => {
  return (
    <section aria-labelledby="indexqo-why" className="w-full">
      <Container className="py-16 sm:py-20">
        <div className="max-w-3xl">
          {/* Small title + accent line (matched to Doctrine) */}
          <div className="mb-6">
            <span className="block text-xs uppercase tracking-widest text-slate-500">
              WHY INDEXQO EXISTS
            </span>
            <div className="mt-3 h-px w-12 bg-slate-300" />
          </div>

          {/* Main statement */}
          <h2
            id="indexqo-why"
            className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl"
          >
            Your brand isn’t a creative experiment.
            <br />
            <span className="font-bold text-slate-900">It's an operational asset.</span>
          </h2>

          {/* Overview paragraph */}
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            As businesses grow, execution outpaces representation. Systems multiply. Messaging fragments.
            Visibility increases without coherence. The work remains strong, but what the market receives
            becomes inconsistent and diluted. IndexQo exists to stop that erosion – to impose structure,
            alignment, and clarity on how a business is presented, so performance is reflected accurately
            and momentum compounds instead of leaking away.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default IndexQoWhy;
