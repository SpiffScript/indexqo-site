import React from "react";
import { Container } from "../ui/Container";

export const Recognition: React.FC = () => {
  return (
    <section className="bg-stone-50 pt-24 pb-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-24">
          {/* LEFT COLUMN — Recognition */}
          <div className="lg:col-span-6 lg:col-start-2">
            <div className="text-xs tracking-[0.18em] uppercase text-slate-500 mb-6">
              The common failure mode
            </div>

            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.06]">
              Good businesses are
              <br />
              misunderstood every day.
            </h2>

            <p className="mt-8 text-lg md:text-xl text-slate-600 leading-relaxed max-w-[42ch]">
              Not because the work is weak. But because the way the business actually operates is not
              what the outside world sees.
            </p>
          </div>

          {/* RIGHT COLUMN — Consequence */}
          <div className="lg:col-span-5 space-y-8">
            <p className="text-lg text-slate-600 leading-relaxed">
              Teams carry standards customers never encounter. Operators explain themselves
              repeatedly. Marketing feels active, but credibility does not compound.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              Over time, the gap widens. What the business is and what it appears to be drift apart.
              That drift is rarely intentional – but it is costly.
            </p>

            <div className="h-px w-20 bg-sky-600" />

            <p className="text-base text-slate-600 leading-relaxed max-w-[40ch] italic">
              This is the moment BrandQo exists for.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
