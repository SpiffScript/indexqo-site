import { Container } from "../ui/Container";
import { CtaButton } from "../ui/CtaButton";

export const SignalNext = () => {
  return (
    <section className="relative bg-stone-50">
      <Container className="py-16 md:py-20">
        {/* Section label */}
        <div className="mb-12">
          <span className="block text-xs uppercase tracking-widest text-slate-500">
            What comes next
          </span>
          <span className="mt-2 block h-px w-10 bg-slate-300" />
        </div>

        {/* Top grid */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div className="flex gap-6">
            <div className="pt-2">
              <span className="block h-24 w-px bg-sky-600/70" />
            </div>

            <h2 className="max-w-xl text-4xl font-semibold leading-tight text-slate-900">
              <span className="block">What comes next isn’t marketing.</span>
              <span className="block">It’s a decision about standards.</span>
            </h2>
          </div>

          {/* RIGHT */}
          <div className="space-y-4 text-slate-700">
            <p className="text-base leading-relaxed">
              Identity is a depreciating asset. Every unguided decision, disconnected vendor,
              and inconsistent platform accelerates its erosion.
            </p>

            <p className="text-base leading-relaxed">
              What comes next is the installation of a governance layer.
            </p>

            <p className="text-base leading-relaxed">
              We align your public footprint with your operational truth so that credibility is
              recognized immediately – not explained repeatedly.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <CtaButton href="/philosophy" variant="primary">
                Philosophy
              </CtaButton>
              <CtaButton href="/services" variant="outline">
                Services
              </CtaButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SignalNext;
