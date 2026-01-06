import React from "react";
import { Container } from "../ui/Container";

const SequenceCard = ({
  index,
  eyebrow,
  title,
  body,
}: {
  index: string;
  eyebrow: string;
  title: string;
  body: string;
}) => {
  return (
    <div
      className="
        group
        h-full
        rounded-lg
        bg-white
        p-8
        border border-slate-100
        transition-all
        duration-200
        hover:-translate-y-1
        hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]
      "
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="text-[10px] font-mono text-sky-600 font-semibold tracking-widest">
          {index}
        </span>
        <div className="h-px w-10 bg-slate-200 group-hover:bg-sky-600 transition-colors" />
      </div>

      <span className="block text-[11px] uppercase tracking-widest text-slate-500 mb-2">
        {eyebrow}
      </span>

      <h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-4">
        {title}
      </h3>

      <p className="text-[15px] leading-relaxed text-slate-600">{body}</p>
    </div>
  );
};

export const NextStepsSequence: React.FC = () => {
  return (
    <section className="bg-stone-50 pt-16 md:pt-24 pb-8 md:pb-12">
      <Container>
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 lg:gap-x-24 mb-12 md:mb-16">
          <div className="lg:col-span-6 relative">
            <div>
              <span className="text-xs uppercase tracking-widest text-slate-500 block mb-3">
                Operating sequence
              </span>
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 leading-[1.2]">
                The first moves matter more
                <br />
                than most teams realize.
              </h2>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-lg leading-relaxed text-slate-700 mt-8">
              This is the moment where most engagements either preserve clarity –
              or begin the slow drift toward noise.
            </p>
            <p className="text-lg leading-relaxed text-slate-600 mt-4">
              We start by establishing signal integrity before anything gets
              built.
            </p>
          </div>
        </div>

        {/* Sequence cards (match Container rail) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SequenceCard
            index="[01]"
            eyebrow="How it begins"
            title="Signal review"
            body="Before any design, messaging, or implementation work is discussed, we examine how your business is currently represented across its public footprint."
          />

          <SequenceCard
            index="[02]"
            eyebrow="What does not happen"
            title="The first step is not cosmetic."
            body="There is no rush to redesign, reposition, or “optimize.” Surface-level changes only amplify distortion when the underlying signal is unclear."
          />

          <SequenceCard
            index="[03]"
            eyebrow="What does happen"
            title="We establish a shared understanding of reality."
            body="We map how your business is perceived today, where that perception aligns with how you actually operate, and where it breaks down."
          />
        </div>
      </Container>
    </section>
  );
};

export default NextStepsSequence;
