import { Container } from "../ui/Container";

export const SignalStandard = () => {
  return (
    <section className="relative bg-stone-50">
      <Container className="py-12 md:py-16">
        {/* Section label */}
        <div className="mb-12">
          <span className="block text-xs uppercase tracking-widest text-slate-500">
            The standard
          </span>
          <span className="mt-2 block h-px w-10 bg-slate-300" />
        </div>

        {/* Top grid */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div className="flex gap-6">
            <span className="mt-2 h-24 w-px bg-sky-600/70" />
            <h2 className="max-w-xl text-4xl font-semibold leading-tight text-slate-900">
              <span className="block">A brand is a banner.</span>
              <span className="block">Your team should be proud to stand under it.</span>
            </h2>
          </div>

          {/* RIGHT */}
          <div className="space-y-6 text-slate-700">
            <p className="text-base leading-relaxed">
              Branding is not cosmetic. It’s the public expression of internal
              standards – how work is done, how decisions are made, and what the
              organization refuses to compromise.
            </p>

            <p className="text-base leading-relaxed">
              When the external signal matches internal reality, teams gain
              confidence. Customers gain trust. The business gains legitimacy
              without explanation.
            </p>
          </div>
        </div>

        {/* Three-point flow (narrow + centered) */}
        <div className="mt-16">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col items-stretch gap-10 md:flex-row md:items-start md:gap-8">
              {/* Point 1 */}
              <div className="flex-1">
                <h3 className="mb-2 text-sm font-semibold text-slate-900">
                  Alignment
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  The story told externally matches the work performed internally.
                  No translation layer. No performance gap.
                </p>
              </div>

              {/* Arrow 1 */}
              <div className="hidden md:flex md:items-center md:pt-6">
                <svg
                  width="44"
                  height="16"
                  viewBox="0 0 44 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 8H40"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-blue-600/50"
                    strokeLinecap="round"
                  />
                  <path
                    d="M34 2L40 8L34 14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-blue-600/50"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Point 2 */}
              <div className="flex-1">
                <h3 className="mb-2 text-sm font-semibold text-slate-900">
                  Coherence
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  Standards hold across pages, platforms, and people – even as tools
                  and vendors change.
                </p>
              </div>

              {/* Arrow 2 */}
              <div className="hidden md:flex md:items-center md:pt-6">
                <svg
                  width="44"
                  height="16"
                  viewBox="0 0 44 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 8H40"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-blue-600/50"
                    strokeLinecap="round"
                  />
                  <path
                    d="M34 2L40 8L34 14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-blue-600/50"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Point 3 */}
              <div className="flex-1">
                <h3 className="mb-2 text-sm font-semibold text-slate-900">
                  Legitimacy
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  The market recognizes substance without persuasion. Trust forms
                  naturally because the signal is consistent.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-16 h-px w-full bg-stone-200" />
        </div>
      </Container>
    </section>
  );
};

export default SignalStandard;
