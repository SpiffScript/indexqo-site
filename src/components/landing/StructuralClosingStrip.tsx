import React from "react";

export const StructuralClosingStrip: React.FC = () => {
  return (
    <section
      aria-hidden="true"
      className="relative w-full overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-[280px] sm:h-[320px] w-full">
        <img
          src="/images/landing/structured-business-systems.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />

        {/* Top fade */}
        <div className="pointer-events-none absolute top-0 left-0 h-12 w-full bg-gradient-to-b from-stone-50 to-transparent" />

        {/* Bottom fade (into footer) */}
        <div className="pointer-events-none absolute bottom-0 left-0 h-8 w-full bg-gradient-to-t from-slate-900 to-transparent" />
      </div>
    </section>
  );
};
