export const SignalHeroImage = () => {
  return (
    <section className="relative w-full">
      <div className="relative h-[74vh] min-h-[360px] w-full overflow-hidden">
        {/* Image */}
        <img
          src="/images/signal/signal-steps.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />

        {/* Tone control */}
        <div className="absolute inset-0 bg-slate-900/10" />

        {/* Bottom fade into page */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </div>
    </section>
  );
};
