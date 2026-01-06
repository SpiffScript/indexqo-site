import React from "react";
import { Container } from "../ui/Container";

const PillarCard = ({
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
      border border-slate-200
      shadow-[0_2px_6px_rgba(0,0,0,0.04)]
      transition-shadow
      duration-200
      hover:shadow-[0_6px_14px_rgba(0,0,0,0.06)]
    "
  >
    <div className="mb-6 flex items-center gap-3">
      <span className="text-[10px] font-mono font-bold tracking-widest text-sky-600">
        {index}
      </span>

      {/* Accent line — static */}
      <div className="h-px w-10 bg-slate-200" />
    </div>

    <h3
      className="
        mb-4
        text-xl
        font-medium
        tracking-tight
        text-slate-900
        transition-[font-weight]
        duration-150
        group-hover:font-bold
      "
    >
      {title}
    </h3>

    <p className="max-w-xs text-[15px] leading-relaxed text-slate-600">
      {desc}
    </p>
  </div>
);

export const Doctrine: React.FC = () => {
  return (
    <section className="relative bg-stone-50">
      <Container className="py-12">
        {/* Section label */}
        <div className="mb-12">
          <span className="block text-xs uppercase tracking-widest text-slate-500">
            The Doctrine
          </span>
          <div className="mt-3 h-px w-12 bg-slate-300" />
        </div>

        {/* Core statement */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* LEFT COLUMN */}
          <div>
            <h2 className="max-w-xl text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
              <span className="block">Small businesses</span>
              <span className="block">aren’t invisible...</span>
              <span className="block font-bold text-slate-900">
                They’re misrepresented.
              </span>
            </h2>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-slate-600">
              Markets are noisy. Modern small business operates inside a fragmented
              vendor ecosystem that optimizes for output, not coherence. As signals
              multiply across disconnected channels, meaning erodes. Activity is
              mistaken for visibility and marketing for structure.
            </p>

            <p className="text-lg leading-relaxed text-slate-600">
              IndexQo is the enforcement of a single standard: your digital footprint
              is an extension of your infrastructure, not an aesthetic choice. We don’t
              manufacture interest; we eliminate the contradiction between what you do
              and what the world sees.
            </p>

            {/* Doctrine line — pulled out and elevated */}
            <div className="pt-4">
              <p className="max-w-xl text-2xl font-medium leading-relaxed text-slate-800">
                By aligning your presence with your operational reality, we make trust
                a structural certainty.
              </p>
            </div>
          </div>
        </div>

        {/* Value pillars */}
        <div className="mt-24 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <PillarCard
              index="[01]"
              title="Alignment"
              desc="Eliminating the drift between who you are, how you operate, and what the world sees."
            />
            <PillarCard
              index="[02]"
              title="Coherence"
              desc="A unified system where every touchpoint reinforces the same reality, without contradiction."
            />
            <PillarCard
              index="[03]"
              title="Legitimacy"
              desc="Demonstrating authority through messaging consistency, not claims or marketing theatrics."
            />
          </div>
        </div>
        {/* Soft divider */}
      <div className="mt-24 h-px w-full bg-slate-200" />
      </Container>
    </section>
  );
};

export default Doctrine;
