import { Container } from "../ui/Container";

export const SignalBuild = () => {
  return (
    <section className="bg-stone-50 py-6">
      <Container>
        {/* Section label */}
        <div className="mb-10 flex flex-col gap-2">
          <span className="text-xs tracking-widest uppercase text-slate-500">
            How we build it
          </span>
          <span className="h-px w-10 bg-slate-300" />
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left: headline */}
          <div className="relative pl-8">
            {/* Accent line — shortened */}
            <span className="absolute left-0 top-2 h-20 w-px bg-sky-600" />

            <h2 className="text-4xl font-semibold leading-tight text-slate-900">
              We don’t chase attention.
              <br />
              We establish a system.
            </h2>
          </div>

          {/* Right: supporting copy */}
          <div className="max-w-xl text-slate-700">
            <p className="mb-6">
              IndexQo is operational branding. We treat your external presence as a
              structural asset – designed to hold up under scrutiny and scale
              without losing meaning.
            </p>
            <p>
              The goal is simple: customers should see the same standards your team
              lives every day.
            </p>
          </div>
        </div>

        {/* System steps */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Step 1 */}
          <div className="group rounded-none border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-xs font-medium text-sky-600">[01]</span>
              <span className="h-px w-10 bg-slate-200 transition-colors duration-200 group-hover:bg-sky-600" />
            </div>
            <h3 className="mb-2 text-sm font-semibold tracking-wide text-slate-900 transition-all duration-200 group-hover:font-bold">
              AUDIT
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Map your current footprint and identify drift, contradictions, and
              weak signals.
            </p>
          </div>

          {/* Step 2 */}
          <div className="group rounded-none border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-xs font-medium text-sky-600">[02]</span>
              <span className="h-px w-10 bg-slate-200 transition-colors duration-200 group-hover:bg-sky-600" />
            </div>
            <h3 className="mb-2 text-sm font-semibold tracking-wide text-slate-900 transition-all duration-200 group-hover:font-bold">
              ALIGN
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Define the operating truth – what you do, how you do it, and what you
              refuse to be.
            </p>
          </div>

          {/* Step 3 */}
          <div className="group rounded-none border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-xs font-medium text-sky-600">[03]</span>
              <span className="h-px w-10 bg-slate-200 transition-colors duration-200 group-hover:bg-sky-600" />
            </div>
            <h3 className="mb-2 text-sm font-semibold tracking-wide text-slate-900 transition-all duration-200 group-hover:font-bold">
              BUILD
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Create the system: messaging, design rules, and page architecture
              that carries meaning.
            </p>
          </div>

          {/* Step 4 */}
          <div className="group rounded-none border border-slate-300 bg-white p-6 shadow-sm shadow-inner transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-xs font-medium text-sky-600">[04]</span>
              <span className="h-px w-10 bg-slate-200 transition-colors duration-200 group-hover:bg-sky-600" />
            </div>
            <h3 className="mb-2 text-sm font-semibold tracking-wide text-slate-900 transition-all duration-200 group-hover:font-bold">
              PROTECT
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              Maintain coherence over time as vendors change, platforms shift, and
              the business grows.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SignalBuild;
