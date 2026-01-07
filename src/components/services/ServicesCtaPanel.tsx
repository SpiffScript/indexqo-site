// src/components/services/ServicesCtaPanel.tsx
import React from "react";
import { CtaButton } from "../ui/CtaButton";

export const ServicesCtaPanel: React.FC = () => {
  return (
    <section className="pb-16 sm:pb-20">
      {/* THE FIX: Replaced Container with centered div logic */}
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-24">
        <div className="rounded-none border border-slate-200 bg-white p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="text-xs uppercase tracking-wider text-slate-500">
                Next step
              </div>

              <h3 className="mt-2 text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
                Tools to deal with that condition.
              </h3>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 max-w-2xl">
                IndexQo builds external structure that holds: clear signals, durable messaging,
                and visibility foundations that match operational reality.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end">
              <CtaButton href="/contact" variant="primary">
                Discuss an Outcome
              </CtaButton>

              <CtaButton href="/brandqo" variant="secondary">
                Review BrandQo
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
