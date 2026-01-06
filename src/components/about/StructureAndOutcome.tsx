import React from "react";

const TwoColCenterpiece: React.FC<{
  left: { label: string; title: string; body: string[] };
  right: { label: string; title: string; body: string[] };
}> = ({ left, right }) => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Left Section */}
        <div className="lg:col-span-6">
          <div className="relative pl-8">
            <span className="absolute left-0 top-2 h-14 w-px bg-sky-600" />
            <div className="text-xs tracking-widest uppercase text-slate-500">
              {left.label}
            </div>
            <h4 className="mt-3 text-2xl font-semibold leading-snug tracking-tight text-slate-900 md:text-3xl">
              {left.title}
            </h4>
          </div>

          <div className="mt-6 max-w-2xl space-y-4">
            {left.body.map((p, idx) => (
              <p
                key={`left-${idx}`}
                className="text-base leading-7 text-slate-600"
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-6 lg:border-l lg:border-slate-200 lg:pl-14">
          <div className="relative pl-8">
            <span className="absolute left-0 top-2 h-14 w-px bg-sky-600" />
            <div className="text-xs tracking-widest uppercase text-slate-500">
              {right.label}
            </div>
            <h4 className="mt-3 text-2xl font-semibold leading-snug tracking-tight text-slate-900 md:text-3xl">
              {right.title}
            </h4>
          </div>

          <div className="mt-6 max-w-2xl space-y-4">
            {right.body.map((p, idx) => (
              <p
                key={`right-${idx}`}
                className="text-base leading-7 text-slate-600"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const StructureAndOutcome: React.FC = () => {
  const structure = {
    label: "Why structure comes first",
    title: "Drift is the real threat.",
    body: [
      "Most misrepresentation doesn’t come from bad intent. It comes from drift: new tools, new vendors, new hires. Shortcuts accumulate and standards blur.",
      "Eventually, execution outpaces coherence. Signals fragment until the business no longer reflects its original purpose.",
      "IndexQo intervenes at the structural level – where clarity is established, governed, and defended—so growth compounds instead of eroding meaning.",
    ],
  };

  const outcome = {
    label: "The Outcome",
    title: "When structure is right.",
    body: [
      "When structure is right, trust forms faster and decisions land cleaner. Your presence begins to filter for you.",
      "Growth creates leverage instead of noise. Nothing feels louder than clarity; everything feels more certain.",
      "That’s not branding. That’s alignment enforced over time.",
    ],
  };

  const bridge = {
    label: "The Mandate",
    title: "The market doesn’t see intent.",
    body: [
      "It sees what holds.",
      "Coherence is the only defense against the natural erosion of meaning that happens during rapid scale. Without it, even well-intentioned growth creates confusion",
    ],
  };

  return (
    <section className="bg-stone-50 py-4 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <TwoColCenterpiece left={structure} right={outcome} />

        {/* Bottom Emphasis: The Bridge Content */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <div className="w-full max-w-3xl border border-slate-200 bg-white px-8 py-10 shadow-[0_12px_30px_rgba(0,0,0,0.06)] md:px-10 md:py-12">
            <div className="relative pl-8">
              <span className="absolute left-0 top-2 h-14 w-px bg-sky-600" />
              <div className="text-xs tracking-widest uppercase text-slate-500">
                {bridge.label}
              </div>
              <h4 className="mt-3 text-2xl font-semibold leading-snug tracking-tight text-slate-900 md:text-3xl">
                {bridge.title}
              </h4>
            </div>

            <div className="mt-6 space-y-4 text-base font-medium leading-7 text-slate-700 italic">
              {bridge.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StructureAndOutcome;
