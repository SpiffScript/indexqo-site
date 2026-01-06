import React from "react";
import { Container } from "../ui/Container";
import { CtaButton } from "../ui/CtaButton";

export const BrandQoNext: React.FC = () => {
  return (
    <section className="bg-stone-50 py-12 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* LEFT */}
          <div className="lg:col-span-8 relative">
            <div className="absolute left-0 top-2 w-px h-30 bg-sky-600 hidden lg:block" />

            <div className="lg:pl-12 space-y-6">
              <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.08]">
                More output won’t fix identity.
              </h3>

              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                BrandQo establishes internal clarity first, then enforces it wherever the
                organization is represented.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-4 lg:pt-2">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-8 bg-sky-600" />
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-sky-600 font-bold">
                  Next
                </span>
              </div>

              <div className="flex flex-col gap-3 max-w-[220px]">
                <CtaButton
                  variant="primary"
                  href="/contact"
                  className="w-full px-5 py-2.5 text-sm tracking-tight justify-center"
                >
                  Discuss an outcome
                </CtaButton>

                <CtaButton
                  variant="secondary"
                  href="/services"
                  className="bg-white w-full px-5 py-2.5 text-sm tracking-tight justify-center"
                >
                  Review services
                </CtaButton>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
