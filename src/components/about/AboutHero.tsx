import React from "react";
import { CtaButton } from "../ui/CtaButton";

export const AboutHero: React.FC = () => {
  return (
    <section className="relative bg-stone-50 pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden">
      {/* Right-side ambient image */}
      <div
        className="absolute inset-y-0 right-0 w-[48%] overflow-hidden"
        aria-hidden="true"
        style={{
          backgroundImage:
            "url(/images/about/uniformity-business-momentum.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          WebkitMaskImage:
            "linear-gradient(to left, rgba(0,0,0,1) 35%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(to left, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
        }}
      >
        <div className="absolute inset-0 bg-white/25" />
        {/* Bottom fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-slate-500">
            About
          </p>
          <div className="mt-2 h-px w-12 bg-slate-200" />
        </div>

        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.15]">
            IndexQo exists to correct misrepresentation.
            <span className="block mt-3 text-slate-400">
              Calm, coherent, defensible.</span>
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-slate-800 leading-relaxed max-w-3xl">
            We help small businesses replace drift with structure – so the market
            sees the same standards your team lives by. Not louder. Clearer.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <CtaButton variant="primary" href="/contact">
              Start a conversation
            </CtaButton>

            <CtaButton variant="secondary" href="/philosophy">
              Read philosophy
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
};
