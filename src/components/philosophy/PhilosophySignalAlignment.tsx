import React from "react";
import { Container } from "../ui/Container";

export const PhilosophySignalAlignment: React.FC = () => {
  return (
    // We move the background color to the section itself to ensure the bleed
    <section className="bg-stone-200 border border-slate-200 shadow-[0_12px_30px_rgba(0,0,0,0.06)] py-16 lg:py-28 overflow-hidden">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Header and Intro Grid */}
          <div className="flex flex-col md:flex-row gap-16 items-start mb-18">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-slate-900 md:w-1/2 leading-[1.20]">
              Internal reality <br />
              <span className="text-stone-500">& external signal</span>
            </h2>
            <div className="grid grid-cols-1 gap-8 md:w-1/2">
               <p className="text-xl text-stone-700 font-light leading-relaxed">
                Every small business already has a reality. How work actually happens.
                How decisions are made. What standards are enforced. What customers and
                staff experience day to day.
              </p>
              <p className="text-xl text-stone-700 font-light leading-relaxed">
                The market doesn’t see that earned reality directly. It interprets signals –
                structure, language, consistency, and presence – and uses them as
                proxies for what a business is likely to be like.
              </p>
            </div>
          </div>

          {/* The "Anchor" Quote Box */}
          <div className="bg-slate-900 p-12 md:p-12 text-stone-100 shadow-2xl">
              <p className="text-3xl md:text-4xl font-light leading-tight mb-8 italic">
                "Misalignment always speaks louder than intention."
              </p>
              <div className="space-y-4 max-w-2xl">
                <p className="text-lg text-stone-400 leading-relaxed">
                  When signals accurately reflect how a business operates, trust holds. When they
                  don’t, confusion fills the gap – for customers, for partners, and even internally.
                </p>
                <p className="text-lg text-stone-400 leading-snug">
                  Representation isn’t cosmetic. It’s structural. </p>
                  <p className="text-lg text-stone-400 leading-relaxed">
                  It shapes expectations, guides decisions, and determines whether a business is
                  understood on its own terms or misread by the people it serves.
                </p>
              </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
