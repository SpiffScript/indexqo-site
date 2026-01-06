import React from "react";
import { Container } from "../ui/Container";

const OperationCard = ({
  title,
  desc,
  index,
}: {
  title: string;
  desc: string;
  index: string;
}) => (
  <div
    className="
      group
      h-full
      rounded-none
      bg-white
      p-8
      transition-all
      duration-200
      hover:-translate-y-1
      hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]
      border border-slate-200
    "
  >
    <div className="flex items-center gap-3 mb-6">
      <span className="text-[10px] font-mono text-sky-600 font-bold tracking-widest">
        {index}
      </span>

      {/* Accent line */}
      <div
        className="
          h-px w-10
          bg-slate-200
          transition-colors duration-150
          group-hover:bg-sky-600
        "
      />
    </div>

    <h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-4">
      {title}
    </h3>

    <p className="text-slate-600 leading-relaxed text-[15px] max-w-xs">
      {desc}
    </p>
  </div>
);

export const BrandOperations: React.FC = () => {
  return (
    <section className="bg-stone-50 py-12 lg:pt-20 lg:pb-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 lg:gap-x-24 mb-6 lg:mb-10">
          <div className="lg:col-span-5 relative">
            <div className="absolute left-0 top-2 w-px h-24 bg-sky-600 hidden lg:block" />
            <div className="lg:pl-10">
              <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.08]">
                BrandQo is <br />
                brand operations.
              </h2>
            </div>
          </div>

          <div className="mt-6 md:mt-8 lg:mt-0 lg:col-span-6 lg:col-start-7">
            <div className="space-y-6 lg:mt-2">
              <p className="text-lg text-slate-600 leading-relaxed">
                Identity degrades quietly. New hires improvise. Vendors interpret.
                Shortcuts accumulate. The result is drift.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                BrandQo prevents that drift by governing language, structure, and
                change control over time.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <OperationCard
              index="[01]"
              title="Governance"
              desc="Establish the boundaries of the identity. Define what is allowed to exist within the system."
            />
            <OperationCard
              index="[02]"
              title="Enforcement"
              desc="Gate outbound signals. Ensure what ships matches the internal standard."
            />
            <OperationCard
              index="[03]"
              title="Change control"
              desc="Manage evolution without dilution. Growth is allowed, drift is not."
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
