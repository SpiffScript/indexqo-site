import React from "react";
import { Container } from "../ui/Container";

export const ImplementationInterface: React.FC = () => {
  return (
    <section className="bg-stone-50 py-12 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 relative">
            <div className="absolute left-0 top-2 w-px h-38 bg-sky-600 hidden lg:block" />

            <div className="lg:pl-10">
              <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.08]">
                Implementation
                <br />
                replaces improvisation.
              </h2>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-8 lg:mt-2">
              <p className="text-lg text-slate-600 leading-relaxed">
                BrandQo changes the scope of the engagement. Services answer what
                needs built. BrandQo answers who the organization is before anything
                gets built.
              </p>

              <div className="h-px w-20 bg-sky-600" />

              <p className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 leading-tight">
                Same team. Same system. Different authority.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                With BrandQo in place, assets stop inventing meaning. Websites,
                documents, and messaging become implementation of a governed identity.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
