import React from "react";
import { Container } from "../ui/Container";

export const InternalFirst: React.FC = () => {
  return (
    <section className="bg-stone-50 pt-12 pb-20 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* LEFT COLUMN: Structural Header with Vertical Anchor */}
          <div className="lg:col-span-5 relative">
            <div className="absolute left-0 top-2 w-px h-24 bg-sky-600 hidden lg:block" />

            <div className="lg:pl-10">
              <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.08]">
                The brand lives <br />
                inside first.
              </h2>
            </div>
          </div>

          {/* RIGHT COLUMN: Logic */}
          <div className="lg:col-span-6 lg:col-start-7 space-y-10">
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
              Branding does not begin with representation. It begins with internal reality – how
              decisions are made, what gets tolerated, and what gets repeated until it becomes normal.
            </p>

            <div className="h-px w-24 bg-sky-600" />

            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              When that layer is undefined, external work becomes performance. The market receives
              signals the organization cannot consistently uphold.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
