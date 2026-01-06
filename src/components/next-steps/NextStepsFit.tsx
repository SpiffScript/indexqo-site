// src/components/next-steps/NextStepsFit.tsx

import React from "react";
import { Container } from "../ui/Container";
import {
  FIT_CATEGORIES,
  INTRO_CARD,
  type FitCategory,
  type FitCategoryId,
} from "../../data/fitData";

type ActiveKey = FitCategoryId | "intro";

const BulletList: React.FC<{ items: string[] }> = ({ items }) => {
  return (
    <ul className="mt-4 space-y-2 text-sm text-slate-700">
      {items.map((b) => (
        <li key={b} className="group flex gap-3">
          <span className="mt-2 h-1 w-1 rounded-full bg-slate-400 transition group-hover:bg-slate-500" />
          <span className="transition will-change-transform group-hover:scale-[1.01] group-hover:font-medium">
            {b}
          </span>
        </li>
      ))}
    </ul>
  );
};

const Chips: React.FC<{ items: string[] }> = ({ items }) => {
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {items.map((t) => (
        <span
          key={t}
          className="rounded-none border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-600"
        >
          {t}
        </span>
      ))}
    </div>
  );
};

const FitBoxes: React.FC<{ notFit: string[]; strongFit: string[] }> = ({
  notFit,
  strongFit,
}) => {
  return (
    <div className="mt-7 grid gap-4 sm:grid-cols-2">
      {/* NOT A FIT (separate box) */}
      <div className="rounded-none border border-slate-200 bg-slate-50 p-4">
        <p className="text-xs uppercase tracking-wide text-slate-500">Not a fit</p>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          {notFit.map((t) => (
            <li key={t} className="flex gap-3">
              <span className="mt-2 h-1 w-1 rounded-full bg-slate-400" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* STRONG FIT (separate box) */}
      <div className="rounded-none border border-slate-200 bg-white p-4">
        <p className="text-xs uppercase tracking-wide text-blue-700">Strong fit</p>
        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          {strongFit.map((t) => (
            <li key={t} className="flex gap-3">
              <span className="mt-2 h-1 w-1 rounded-full bg-blue-600/70" />
              <span className="font-medium">{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const IntroPanel: React.FC = () => {
  return (
    <>
      <h3 className="text-lg font-semibold tracking-tight text-slate-900 mt-0 mb-2">
        {INTRO_CARD.title}
      </h3>

      <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line m-0">
        {INTRO_CARD.body}
      </p>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <div className="rounded-none border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs uppercase tracking-wide text-slate-500">
            {INTRO_CARD.leftBoxTitle}
          </p>
          <p className="mt-2 text-sm text-slate-700">{INTRO_CARD.leftBoxBody}</p>
        </div>

        <div className="rounded-none border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs uppercase tracking-wide text-slate-500">
            {INTRO_CARD.rightBoxTitle}
          </p>
          <p className="mt-2 text-sm text-slate-700">{INTRO_CARD.rightBoxBody}</p>
        </div>
      </div>
    </>
  );
};

const CategoryPanel: React.FC<{ cat: FitCategory }> = ({ cat }) => {
  return (
    <>
      <h3 className="text-lg font-semibold tracking-tight text-slate-900">
        {cat.title}
      </h3>

      {/* Intro paragraph (teacher mode) */}
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{cat.intro}</p>

      {/* Common outcomes (problem) MUST be bulleted */}
      <div className="mt-6">
        <p className="text-xs uppercase tracking-wide text-slate-500">
          Common outcomes
        </p>
        <BulletList items={cat.problemOutcomes} />
      </div>

      {/* Sell line / correction */}
      <div className="mt-7">
        <p className="text-xs uppercase tracking-wide text-slate-500">
          How IndexQo corrects it
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">{cat.approach}</p>
      </div>

      {/* Fit boxes (two separate boxes side-by-side) */}
      <FitBoxes notFit={cat.fitNot} strongFit={cat.fitStrong} />

      {/* Accent line above the bottom outcomes (like your other panel) */}
      <div className="mt-7 border-t border-slate-200 pt-4">
        <p className="text-xs uppercase tracking-wide text-slate-500">
          Common outcomes after alignment
        </p>
        <Chips items={cat.positiveOutcomes} />
      </div>
    </>
  );
};

export const NextStepsFit: React.FC = () => {
  const [active, setActive] = React.useState<ActiveKey>("intro");
  const [introLocked, setIntroLocked] = React.useState(false);

  const activeCategory =
    active === "intro" ? null : FIT_CATEGORIES.find((c) => c.id === active) ?? null;

  const handleSelect = (id: FitCategoryId) => {
    setActive(id);
    if (!introLocked) setIntroLocked(true);
  };

  return (
    <section id="next-steps" className="pt-14 pb-6 sm:pt-16 sm:pb-8 lg:pt-20 lg:pb-10">
      <Container className="px-6 sm:px-10 lg:px-14">
        {/* Header */}
        <div className="max-w-4xl">
          <div className="mb-4 border-l-2 border-slate-200 pl-4 text-xs uppercase tracking-wide text-slate-500">
            Alignment
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
            Standards decide whether the work compounds or decays.
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Clarity survives only when it’s protected. This isn’t about budget or project size.
            It’s about how decisions get made, how responsibility is shared, and whether alignment
            is maintained once clarity exists. Our work together holds up when there’s shared ownership,
            clear standards, and long-term intent. The hardest part isn’t the work – it’s keeping it intact.
          </p>
          <p className="mt-3 text-sm text-slate-500">
            That’s the role of{" "}
            <a href="/BrandQo" className="font-medium text-slate-700 hover:text-slate-900 underline-offset-2 hover:underline">
              BrandQo
            </a>.
          </p>
        </div>

        {/* Layout */}
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {/* Left selector */}
          <div className="lg:col-span-5">
            <div className="rounded-none border border-slate-200 bg-white">
              {FIT_CATEGORIES.map((c) => {
                const isActive = c.id === active;

                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => handleSelect(c.id)}
                    className={[
                      "group w-full text-left px-5 py-4 transition",
                      "border-b border-slate-200 last:border-b-0",
                      isActive ? "bg-slate-50" : "hover:bg-slate-50/70",
                    ].join(" ")}
                  >
                    <div className="flex items-start gap-4">
                      {/* selector bar (match ServicesOfferings behavior, but blue) */}
                      <span
                        className={[
                          "mt-1 h-10 w-1 flex-none transition",
                          isActive
                            ? "bg-blue-600"
                            : "bg-slate-200 group-hover:bg-blue-600/70",
                        ].join(" ")}
                        aria-hidden="true"
                      />

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div className="text-sm font-semibold tracking-tight text-slate-900">
                            {c.title}
                          </div>

                          <span
                            className={[
                              "ml-4 flex-none text-slate-300 transition",
                              isActive ? "text-blue-600" : "group-hover:text-slate-500",
                            ].join(" ")}
                            aria-hidden="true"
                          >
                            —
                          </span>
                        </div>

                        <div className="mt-1 text-sm text-slate-600 line-clamp-2">
                          {c.teaser}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <p className="mt-3 text-xs text-slate-500">
              Misalignment doesn’t show up in planning – it surfaces once tradeoffs are real.<br />
               {" "}
              <a
                href="/contact"
                className="font-medium text-slate-700 hover:text-slate-900 transition-colors"
              >
                Start the conversation
              </a>{" "}
              where your philosophy becomes operational.
            </p>
          </div>

          {/* Right panel */}
          <div className="lg:col-span-7">
            <div className="rounded-none border border-slate-200 bg-white p-6 sm:p-7">
              {/* Intro shows only on page load. Once they click, it’s locked out unless they reload. */}
              {!introLocked && active === "intro" ? (
                <IntroPanel />
              ) : activeCategory ? (
                <CategoryPanel cat={activeCategory} />
              ) : (
                // Fallback if state ever gets weird: pick first category
                <CategoryPanel cat={FIT_CATEGORIES[0]} />
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NextStepsFit;
