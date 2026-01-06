import React from "react";

export const ServicesDeclaration: React.FC = () => {
  return (
    <section className="py-16 sm:py-12">
      {/* THE FIX: Replaced Container with centered div logic to match your Hero alignment */}
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-14">
        <div className="mx-auto max-w-2xl text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
            You are always on display. Everywhere.
          </h2>

          <p className="mt-6 pl-6 text-base sm:text-lg leading-relaxed text-slate-600">
            Consistency in structure – clarity in messaging.
          </p>

          <p className="mt-6 pl-12 text-base sm:text-lg leading-relaxed text-slate-500 italic">
            Alignment between internal reality and external signal.
          </p>
        </div>
      </div>
    </section>
  );
};
