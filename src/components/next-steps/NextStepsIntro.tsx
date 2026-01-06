import React from "react";
import { Container } from "../ui/Container";

export const NextStepsIntro: React.FC = () => {
  return (
    <section className="bg-stone-50 py-16 md:py-20">
      <Container>
        <div className="border-t border-transparent pt-16 md:pt-20">
          {/* Section label */}
          <div className="mb-10 flex flex-col gap-2">
            <span className="text-xs tracking-widest uppercase text-slate-500">
              Next steps
            </span>
            <span className="h-px w-10 bg-slate-300" />
          </div>

          {/* Main grid: Standardized lg:gap-14 */}
          <div className="grid grid-cols-1 items-start lg:grid-cols-12 lg:gap-14">

            {/* CHANGED TO lg:col-span-6 to match NextStepsOutline.tsx */}
            <div className="relative lg:col-span-6 pl-8">
              {/* Accent line - Pinned to absolute left */}
              <span className="absolute left-0 top-2 h-42 w-px bg-sky-600" />

              <h1 className="text-4xl font-semibold leading-[1.2] tracking-tight text-slate-900 md:text-5xl">
                We don’t start with solutions.
                <br />
                We start with clarity.
              </h1>
            </div>

            {/* Right side: Adjusted to col-span-6 to keep the 12-column balance */}
            <div className="lg:col-span-5 lg:col-start-8 max-w-xl text-slate-700">
              <p className="text-lg leading-relaxed text-slate-700 mt-2">
                Before anything is proposed, we establish a clear understanding of how your business
                is currently represented – and where that representation holds or breaks.
              </p>
              <p className="text-lg leading-relaxed text-slate-600 mt-2">
                IndexQo takes responsibility for signal integrity. That responsibility requires
                mutual alignment on what is being protected before the work begins.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
