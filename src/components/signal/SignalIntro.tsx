import { Container } from "../ui/Container";

export const SignalIntro: React.FC = () => {
  return (
    <section className="relative bg-stone-50">
      <Container className="py-20 md:py-24">
  {/* Label (full-width row above the grid) */}
  <div className="mb-12">
    <span className="block text-xs uppercase tracking-widest text-slate-500">
      The Signal
    </span>
    <span className="mt-2 block h-px w-10 bg-slate-300" />
  </div>

  {/* Grid starts here, so RIGHT aligns with headline top */}
  <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
    {/* LEFT */}
    <div>
      <div className="relative pl-8">
        <span className="absolute left-0 top-1 h-24 w-px bg-sky-600" />
        <h1 className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-tight text-slate-900">
          <span className="block">Your work already has substance.</span>
          <span className="block">
            Your presence should <span className="font-semibold">reflect it.</span>
          </span>
        </h1>
      </div>
    </div>

    {/* RIGHT */}
    <div className="space-y-6 text-slate-700">
            <p className="text-base leading-relaxed">
              IndexQo exists to protect the gap between what you do and what the world thinks
              you do. When your external presence is fragmented, people don’t see your
              standards – they see noise.
            </p>

            <p className="text-base leading-relaxed">
              We build a signal that matches the operational truth your team already lives
              every day – so trust is <span className="font-semibold text-slate-900">recognized, not manufactured.</span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SignalIntro;
