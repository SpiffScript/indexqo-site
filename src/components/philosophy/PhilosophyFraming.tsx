import React from "react";
import { Container } from "../ui/Container";

export const PhilosophyFraming: React.FC = () => {
  return (
    <section className="bg-stone-50 pt-16 pb-16 lg:pt-28 lg:pb-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* LEFT COLUMN: The Header & Vertical Anchor */}
          <div className="lg:col-span-5 relative">
            {/* Vertical Accent Line */}
            <div className="absolute left-0 top-2 w-px h-32 bg-sky-600 hidden lg:block" />

            <div className="lg:pl-10">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.1]">
                How we see <br />
                the world.
              </h1>
            </div>
          </div>

          {/* RIGHT COLUMN: The Full Text */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-normal">
              Businesses succeed when clarity protects margin and <br />
              the customer experience – internally and externally.
            </p>

            <p className="text-lg text-slate-600 leading-relaxed">
              This page explains how we understand trust, alignment, and
              representation in the context of modern small business – and why those
              things matter long before tactics do.
            </p>

            <div className="pt-4">
              <div className="h-px w-12 bg-sky-600" />
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default PhilosophyFraming;
