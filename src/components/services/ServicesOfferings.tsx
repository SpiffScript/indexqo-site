// src/components/services/ServicesOfferings.tsx
import React from "react";
import { SERVICES, type ServiceKey } from "../../data/servicesOfferings";

type ActiveKey = ServiceKey | "intro";

export const ServicesOfferings: React.FC = () => {
  const [active, setActive] = React.useState<ActiveKey>("intro");

  const activeService =
    active === "intro" ? null : SERVICES.find((s) => s.key === active) ?? null;

  return (
    <section id="services" className="pt-14 pb-6 sm:pt-16 sm:pb-8 lg:pt-20 lg:pb-10">
      {/* THE FIX: Replaced Container with centered div logic */}
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-14">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-4 border-l-2 border-slate-200 pl-4 text-xs uppercase tracking-wide text-slate-500">
            Services
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
            The work begins where expectations form.
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            IndexQo’s discipline is applied across internal and external structure – messaging, visibility,
            and durable artifacts that shape audience expectation – ensuring market expectation matches
            what you’re delivering.
          </p>
        </div>

        {/* Layout */}
        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {/* Left selector */}
          <div className="lg:col-span-5">

            <div className="rounded-none border border-slate-200 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
              {SERVICES.map((s) => {
                const isActive = s.key === active;

                return (
                  <button
                    key={s.key}
                    type="button"
                    onClick={() => setActive(s.key)}
                    className={[
                      "group w-full text-left px-5 py-4 transition",
                      "border-b border-slate-200 last:border-b-0",
                      isActive ? "bg-slate-50" : "hover:bg-slate-50/70",
                    ].join(" ")}
                  >
                    <div className="flex items-start gap-4">
                      {/* selector bar */}
                      <span
                        className={[
                          "mt-1 h-10 w-1 flex-none transition",
                          isActive ? "bg-sky-600" : "bg-slate-200 group-hover:bg-slate-400",
                        ].join(" ")}
                        aria-hidden="true"
                      />

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div
                            className={[
                              "text-sm font-semibold tracking-tight transition",
                              isActive ? "text-slate-900" : "text-slate-900",
                            ].join(" ")}
                          >
                            {s.title}
                          </div>

                          {/* quiet connector (no arrow) */}
                          <span
                            className={[
                              "ml-4 flex-none text-slate-300 transition",
                              isActive ? "text-slate-900" : "group-hover:text-slate-500",
                            ].join(" ")}
                            aria-hidden="true"
                          >
                            —
                          </span>
                        </div>

                        <div className="mt-1 text-sm text-slate-600 line-clamp-2">
                          {s.teaser}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <p className="mt-3 text-xs text-slate-500">
                Each project is shaped by the unique gravity of your market standing and the practical rhythms
                of your business.{" "}
                <a
                  href="/brandqo"
                  className="font-medium text-slate-700 hover:text-slate-900 transition-colors"
                >
                  Start
                </a>{" "}
                where clarity breaks down.
              </p>
          </div>

          {/* Right panel */}
          <div className="lg:col-span-7">
            <div className="rounded-none border border-slate-200 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.06)] p-6 sm:p-7">
              {activeService ? (
                <>
                  <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                    {activeService.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {activeService.detail}
                  </p>

                  <ul className="mt-6 space-y-2 text-sm text-slate-700">
                    {activeService.bullets.map((b) => (
                      <li key={b} className="group flex gap-3">
                        <span className="mt-2 h-1 w-1 rounded-full bg-slate-400 transition group-hover:bg-slate-500" />
                        <span className="transition will-change-transform group-hover:scale-[1.01] group-hover:font-medium">
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {activeService.includes && (
                    <div className="mt-7 border-t border-slate-200 pt-4">
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        Common entry points
                      </p>

                      <div className="mt-2 flex flex-wrap gap-2">
                        {activeService.includes.map((t) => (
                          <span
                            key={t}
                            className="rounded-none border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-600"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <h3 className="text-lg font-semibold tracking-tight text-slate-900">
                    Start where you are.
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Most clients arrive with a specific need – a site rebuild, clearer service language,
                    visibility issues, or customer-facing assets. Select a category on the left to view
                    scope and practical entry points.
                  </p>

                  <div className="mt-7 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-none border border-slate-200 bg-slate-50 p-4">
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        Single deliverable
                      </p>
                      <p className="mt-2 text-sm text-slate-700">
                        One clean outcome – built to hold up and stay consistent as you grow.
                      </p>
                    </div>

                    <div className="rounded-none border border-slate-200 bg-slate-50 p-4">
                      <p className="text-xs uppercase tracking-wide text-slate-500">
                        Phased build
                      </p>
                      <p className="mt-2 text-sm text-slate-700">
                        Start small, then expand without rework or drift.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
