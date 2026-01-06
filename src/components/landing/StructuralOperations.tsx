import React from "react";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { CtaButton } from "../ui/CtaButton";
import { structuralItems } from "./structuralItems";

// Left-side content (your new split files)
import { ExecutionModel } from "./ExecutionModel";
import { ExecutionOutcomes } from "./ExecutionOutcomes";
import { ExecutionCta } from "./ExecutionCta";

export const StructuralOperations: React.FC = () => {
  return (
    <Section>
      <Container className="py-8">
        {/* Header ABOVE both columns */}
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-medium text-slate-900 mb-6 tracking-tight">
            Structural Operations
          </h2>
          <p className="max-w-6xl text-2xl font-medium text-slate-900">
            We don't sell campaigns. We implement permanent infrastructure to
            correct your market position.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          {/* LEFT: new narrative content */}
          <div className="lg:col-span-7 space-y-10">
            <ExecutionModel />
            <ExecutionOutcomes />
            <ExecutionCta />
          </div>

          {/* RIGHT: existing grid, vertical + sticky */}
          <aside className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="grid grid-cols-1">
              {structuralItems.map((service) => {
                const Icon = service.icon; // IMPORTANT: makes TS happy for JSX
                return (
                  <div
                    key={service.id}
                    className="border border-stone-200 bg-stone-50 p-10 hover:bg-white transition-colors duration-500"
                  >
                    {Icon ? (
                      <Icon
                        className="w-8 h-8 text-slate-400 mb-6 transition-colors duration-300"
                        strokeWidth={1.5}
                      />
                    ) : null}

                    <h3 className="text-xl font-semibold text-slate-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                );
              })}

              <div className="border border-stone-200 bg-slate-900 p-10 flex flex-col justify-between text-white">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    Full Audit
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm mb-6">
                    Identify where your external signal is degrading.
                  </p>
                </div>

                <CtaButton variant="dark" href="/contact">
                  Start with alignment →
                </CtaButton>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  );
};

export default StructuralOperations;
