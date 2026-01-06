import React from "react";
import { Container } from "../ui/Container";

const TwoColCenterpiece: React.FC<{
  left: { label: string; title: string; body: string[] };
  right: { label: string; title: string; body: string[] };
}> = ({ left, right }) => {
  return (
    <div className="pt-12 md:pt-16">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Left */}
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
                className="text-[15px] leading-7 text-slate-600"
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Right */}
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
                className="text-[15px] leading-7 text-slate-600"
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

export const NextStepsOutline: React.FC = () => {
  const breaks = {
    label: "Communications in practice",
    title: "Where signal breaks most often",
    body: [
      "Signal problems usually show up as confusion that feels normal: inconsistent language, mismatched expectations, or a public presence that doesn’t match how the business actually runs.",
      "Common symptoms include: different vendors pulling in different directions, messaging that changes by channel, or customers asking questions your website already claims to answer.",
      "The point is not perfection. The point is identifying the specific places where meaning is being lost.",
    ],
  };

  const coherence = {
    label: "Continuity under pressure",
    title: "What coherence looks like in practice",
    body: [
      "Coherence is when the market receives the same truth no matter where it encounters you – and that truth matches operational reality.",
      "It means your language, offers, and standards reinforce each other instead of competing. It also means your team isn’t forced to “explain around” the public story.",
      "When coherence is present, decisions get easier. Updates get faster. Trust builds without constant effort.",
    ],
  };

  const requires = {
    label: "What alignment requires",
    title: "Correcting distortion requires participation.",
    body: [
      "Clarity cannot be delegated. Fixing signal drift takes involvement – not approval alone.",
      "That includes access to real decision-makers, a willingness to confront inconsistency, and respect for standards once they are established.",
      "This is not outsourced identity. It is collaborative alignment.",
    ],
  };

  return (
    <section className="bg-stone-50 py-6">
      <Container>
        <div className="border-t border-slate-100" />

        <TwoColCenterpiece left={breaks} right={coherence} />

        {/* Centered emphasis block */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <div className="w-full max-w-3xl rounded-none border border-slate-200 bg-white px-8 py-10 shadow-[0_12px_30px_rgba(0,0,0,0.06)] md:px-10 md:py-12">
            <div className="relative pl-8">
              <span className="absolute left-0 top-2 h-14 w-px bg-sky-600" />
              <div className="text-xs tracking-widest uppercase text-slate-500">
                {requires.label}
              </div>
              <h4 className="mt-3 text-2xl font-semibold leading-snug tracking-tight text-slate-900 md:text-3xl">
                {requires.title}
              </h4>
            </div>

            <div className="mt-6 space-y-4 text-[15px] leading-7 text-slate-600">
              {requires.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NextStepsOutline;
