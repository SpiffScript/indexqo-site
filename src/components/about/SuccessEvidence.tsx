import React from "react";

const EvidenceItem: React.FC<{ title: string; description: string; tag: string }> = ({
  title,
  description,
  tag
}) => (
  <div className="flex flex-col border-l border-slate-200 pl-8 transition-all duration-300 hover:border-sky-600 group">
    <span className="text-xs tracking-[0.2em] uppercase text-slate-400 group-hover:text-sky-600 transition-colors">
      {tag}
    </span>
    <h3 className="mt-4 text-xl font-semibold text-slate-900 leading-snug">
      {title}
    </h3>
    <p className="mt-4 text-base leading-7 text-slate-600">
      {description}
    </p>
  </div>
);

export const SuccessEvidence: React.FC = () => {
  const artifacts = [
    {
      tag: "Output 01",
      title: "Messaging Architecture",
      description: "A single source of truth for how the business is defined, removing the need for internal teams to 'explain around' the public story."
    },
    {
      tag: "Output 02",
      title: "Visual Guardrails",
      description: "Standards that enforce coherence across all touchpoints, ensuring the market receives the same truth no matter where it encounters the brand."
    },
    {
      tag: "Output 03",
      title: "Operational Onboarding",
      description: "Infrastructure that allows new hires and vendors to be aligned in days, not months, because the standards are documented and defensible."
    }
  ];

  return (
    <section className="bg-stone-50 px-6">
      <div className="max-w-7xl mx-auto">
        {/* The Card Wrapper lifts the content off the page and footer */}
        <div className="bg-white border border-slate-200 px-8 py-16 md:px-16 md:py-20 shadow-[0_20px_50px_rgba(0,0,0,0.04)]">

          {/* Header section inside the card */}
          <div className="relative pl-8 mb-16 max-w-3xl">
            <span className="absolute left-0 top-2 h-14 w-px bg-sky-600" />
            <div className="text-xs tracking-widest uppercase text-slate-500">
              System Outcomes
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              The Evidence of Alignment
            </h2>
            <p className="mt-6 text-lg leading-7 text-slate-600">
              Success at IndexQo isn’t measured by aesthetics alone. It is measured by the durability of the system—how well the signal holds during rapid scale and operational change.
            </p>
          </div>

          {/* Grid section inside the card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {artifacts.map((item, idx) => (
              <EvidenceItem key={idx} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessEvidence;
