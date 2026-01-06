import React from "react";

export const BrandQoPanel: React.FC = () => {
  return (
    <section className="bg-stone-50 py-14 md:py-20">
      {/* THE FIX: Replaced Container with centered div logic */}
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-9 lg:col-start-2">
            <div className="pl-5 border-l border-sky-600">
              <div className="text-xs tracking-wider uppercase text-slate-500 mb-4">
                When the scope is identity
              </div>

              <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900 leading-tight">
                Branding fails when the inside and outside diverge.
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed max-w-[70ch]">
                BrandQo aligns internal reality and external signal – then keeps it aligned as the
                business changes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
