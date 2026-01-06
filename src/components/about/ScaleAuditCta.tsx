import React from "react";
import { CtaButton } from "../ui/CtaButton";

export const ScaleAuditCta: React.FC = () => {
  return (
    <section className="bg-stone-50 py-12 px-6 md:py-18">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Narrative: The Scaling Argument */}
          <div className="lg:col-span-7">
            <div className="relative pl-8">
              <span className="absolute left-0 top-2 h-14 w-px bg-sky-600" />
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 leading-tight">
                Scale requires a foundation <br />that doesn’t erode.
              </h2>
            </div>

            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600 max-w-2xl">
              <p>
                Unifying internal operations is the only way to unify external signal. When your team, your tools,
                and your market all speak the same language, growth creates <strong>leverage instead of noise.</strong>
              </p>
              <p>
                We help operating companies transition from a "collection of projects" to a <strong>defensible system.</strong>
                This is the infrastructure that allows you to rebrand, expand, or pivot without losing your original purpose to drift.
              </p>
            </div>
          </div>

          {/* CTA: Fixed Button Implementation */}
          <div className="lg:col-span-5">
            <div className="bg-slate-100 border border-slate-200 p-8 md:p-12 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Start with a Signal Audit
              </h3>
              <p className="text-base leading-relaxed text-slate-600 mb-8">
                Before we build, we map. We identify the specific points where your internal standards and external presence have decoupled.
              </p>

              {/* Fixed: Moved text to children and removed label prop */}
              <CtaButton variant="primary" href="/contact">
                Start a conversation
              </CtaButton>

              <p className="mt-6 text-sm text-slate-500 italic">
                A professional diagnostic. No high-pressure sales.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ScaleAuditCta;
