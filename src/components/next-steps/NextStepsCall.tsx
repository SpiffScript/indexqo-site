import React from "react";
import { Container } from "../ui/Container";
import { CtaButton } from "../ui/CtaButton";

export const NextStepsCall: React.FC = () => {
  return (
    <section className="bg-stone-50 py-6 md:py-10">
      <Container>
        <div className="border-t border-slate-200" />
          <div className="pt-12 md:pt-16">
          {/* Section label */}
            <div className="mb-10 flex flex-col gap-2">
              <span className="text-xs tracking-widest uppercase text-slate-500">
              The conversation
              </span>
            <span className="h-px w-10 bg-slate-200" />
          </div>

          {/* Main grid */}
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left: headline */}
            <div className="relative lg:col-span-7 pl-8">
              {/* Accent line */}
              <span className="absolute left-0 top-2 h-30 w-px bg-sky-600 hidden lg:block" />

              <h3 className="text-3xl font-semibold leading-[1.2] tracking-tight text-slate-900 md:text-4xl">
                Misalignment carries the real cost,
                <br />
                when confidence breaks at the < br/>moment of decision.
              </h3>
            </div>

            {/* Right: supporting copy + CTA */}
            <div className="lg:col-span-5 max-w-xl text-slate-600">
              <p className="text-base leading-7 text-slate-600">
                With IndexQo, there is no minimum engagement – only a minimum standard. Confidence should decide.
              </p>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Start a conversation about your business, messaging scope, and the conditions for durable work first.
              </p>

              {/* Primary CTAs */}
              <div className="mt-8 flex flex-wrap gap-4">
                <CtaButton href="/brandqo">
                  BrandQo
                </CtaButton>

                <CtaButton href="/solutions">
                  View Solutions
                </CtaButton>
              </div>
            </div>
          </div>
          <p className="mt-12 text-xs text-center text-slate-500">
            For organizations working through deeper alignment or leadership structure,
            <br />
            <a
              href="https://www.signalqo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 font-medium text-slate-600 hover:text-slate-600 transition-colors"
            >
              SignalQo is designed for that layer.
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default NextStepsCall;
