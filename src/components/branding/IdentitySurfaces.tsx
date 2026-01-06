import React from "react";
import { Container } from "../ui/Container";

const SurfaceRow = ({ title, note }: { title: string; note: string }) => {
  return (
    <div className="group py-4">
      {/* Keep bullet + accent line as one unit (absolute), so they never drift */}
      <div className="relative pl-10">
        {/* Bullet */}
        <span
          className="
            absolute left-0 top-2
            h-1.5 w-1.5 rounded-full bg-slate-500
            transition-all duration-150
            group-hover:bg-sky-600
            group-hover:scale-[1.25]
          "
        />

        {/* Accent line (always present, including last row) — does NOT touch bullet */}
        <span
          className="
            absolute left-[3px] top-[22px] bottom-2
            w-px bg-slate-200
            transition-colors duration-150
            group-hover:bg-sky-600/50
          "
        />

        {/* Title (only this responds) */}
        <div
          className="
            inline-block
            text-[15px] font-medium tracking-tight text-slate-900
            transition-all duration-150
            group-hover:font-semibold
          "
        >
          {title}
        </div>

        {/* Note (does NOT respond) */}
        <div className="mt-1 text-[13px] leading-relaxed text-slate-600 max-w-[52ch]">
          {note}
        </div>
      </div>
    </div>
  );
};

export const IdentitySurfaces: React.FC = () => {
  return (
    <section className="bg-stone-50 py-12">
      <Container>
        <div
          className="border border-slate-200 shadow-[0_12px_30px_rgba(0,0,0,0.06)] bg-white px-6 py-10 lg:px-12 lg:py-14"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* HEADER */}
          <div className="lg:col-span-10 lg:col-start-2 relative">
            <div className="absolute left-0 top-12 w-px h-32 bg-sky-600 hidden lg:block" />
            <div className="lg:pl-10">
              <div className="text-xs tracking-[0.18em] uppercase text-slate-500 mb-6">
                Where drift shows up
              </div>

              <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.08]">
                Every surface is brand surface.
              </h2>

              <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-3xl">
                BrandQo governs identity wherever it appears – internally and externally.<br />
                Consistency is not aesthetic.
                <span className="font-medium"> It’s operational.</span>
              </p>
            </div>
          </div>

          {/* TWO COLUMNS */}
          <div className="lg:col-span-10 lg:col-start-2 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {/* INTERNAL */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-sky-600" />
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-sky-600 font-bold">
                  Internal reality
                </span>
              </div>

              <div className="border-t border-slate-100">
                <SurfaceRow
                  title="Operating language"
                  note="Teams describe the same work in different terms. Standards become optional."
                />
                <SurfaceRow
                  title="Leadership communication"
                  note="Intent changes as it moves through the organization. People fill gaps with assumptions."
                />
                <SurfaceRow
                  title="Standards and enforcement"
                  note="What matters is not written down or reinforced. Drift becomes normal."
                />
                <SurfaceRow
                  title="Internal documents"
                  note="Manuals, decks, proposals, and templates contradict each other over time."
                />
                <SurfaceRow
                  title="Ownership and handoffs"
                  note='Nobody owns representation end-to-end. Brand becomes “everyone” and therefore “no one.”'
                />
              </div>
            </div>

            {/* EXTERNAL */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-sky-600" />
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-sky-600 font-bold">
                  External signal
                </span>
              </div>

              <div className="border-t border-slate-200">
                <SurfaceRow
                  title="Website and discoverability"
                  note="The public footprint reads like a set of pages, not an operating reality."
                />
                <SurfaceRow
                  title="Search structure and hierarchy"
                  note="Pages compete, repeat, or contradict. Authority is unclear to humans and engines."
                />
                <SurfaceRow
                  title="Email signatures and outbound comms"
                  note="Each person represents the business differently. Trust becomes inconsistent."
                />
                <SurfaceRow
                  title="Social presence"
                  note="Tone and cadence fluctuate with whoever is posting. The brand feels unstable."
                />
                <SurfaceRow
                  title="Sales materials and media"
                  note="Collateral falls behind capability. The market sees an outdated version of the business."
                />
              </div>
            </div>
          </div>

          {/* FOOTNOTE (kept tight) */}
          <div className="lg:col-span-10 lg:col-start-2 pt-6 border-t border-slate-200">
            <p className="text-slate-700 text-sm md:text-base lg:text-lg text-center leading-relaxed max-w-4xl">
              When the internal layer is undefined, the external layer becomes improvisation.
              BrandQo corrects the order.
            </p>
          </div>
        </div>
        </div>
      </Container>
    </section>
  );
};
