import React from "react";

const FitColumn: React.FC<{
  label: string;
  items: string[];
  isPositive?: boolean
}> = ({ label, items, isPositive }) => (
  <div className={`p-8 md:p-10 border transition-all duration-300 ${
    isPositive
      ? "bg-white border-slate-200 shadow-[0_8px_20px_rgba(0,0,0,0.04)]"
      : "bg-stone-100/50 border-stone-200"
  }`}>
    <div className="relative pl-6">
      <span className={`absolute left-0 top-1 h-6 w-px ${isPositive ? 'bg-sky-600' : 'bg-slate-400'}`} />
      <h3 className="text-xs tracking-widest uppercase text-slate-500 mb-6">
        {label}
      </h3>
    </div>
    <ul className="space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex gap-4 text-base leading-relaxed text-slate-600">
          <span className={`mt-2.5 h-1 w-1 shrink-0 rounded-full ${isPositive ? 'bg-sky-500' : 'bg-slate-400'}`} />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export const WhoItsFor: React.FC = () => {
  const goodFit = [
    "Teams looking to standardize their message across all digital and operational touchpoints.",
    "Organizations where growth has outpaced the current brand structure.",
    "Leaders who value long-term coherence over short-term marketing cycles.",
    "Businesses ready to treat their public presence as a governed infrastructure."
  ];

  const notFit = [
    "Projects seeking 'growth hacks,' trend-chasing, or high-volume content production.",
    "Environments where business fundamentals or offers change on a weekly basis.",
    "Engagements looking for a vendor to simply execute without structural audit.",
    "Situations where decision-makers cannot be involved in the alignment process."
  ];

  return (
    <section className="bg-stone-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">

          {/* Left: Context/Header */}
          <div className="lg:col-span-4">
            <div className="relative pl-8">
              <span className="absolute left-0 top-2 h-14 w-px bg-sky-600" />
              <div className="text-xs tracking-widest uppercase text-slate-500">
                Alignment
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                Who we defend.
              </h2>
            </div>
            <p className="mt-6 text-lg leading-7 text-slate-600 max-w-sm">
              IndexQo is built for operations that require a defensible, consistent signal. We filter for the readiness to build something that holds.
            </p>
          </div>

          {/* Right: The Fit Boxes */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <FitColumn label="Standard Fit" items={goodFit} isPositive />
            <FitColumn label="Out of Scope" items={notFit} />
          </div>

          </div>
        </div>
      <div className="mt-14 h-px w-full bg-slate-200" />
    </section>
  );
};

export default WhoItsFor;
