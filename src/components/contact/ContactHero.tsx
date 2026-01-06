// src/components/contact/ContactHero.tsx

import React from "react";
import { CtaButton } from "../ui/CtaButton";
import { Link } from 'react-router-dom';

export const ContactHero: React.FC = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16">
      <div className="mx-auto w-full max-w-6xl">
        <div className="space-y-8">
          {/* Anchored header */}
          <div className="relative">
            <div className="absolute left-0 top-1 h-24 w-px bg-sky-600" />
            <h1 className="pl-6 text-4xl font-semibold tracking-tight text-slate-900 leading-[1.20]">
              Your presence should be a reflection,
              <br />
              <span className="text-5xl font-normal text-slate-500">
                not a hurdle.
              </span>
            </h1>
          </div>

          {/* pl-6 matches the H1 exactly */}
          <p className="pl-6 text-lg text-slate-600 leading-relaxed max-w-2xl">
            You’ve already done the hard work – building trust, delivering results, earning your
            reputation. This is about making sure the first impression carries the same weight as
            the experience that follows. We help close the gap between what you do well and what
            your signal currently communicates.
          </p>
          <p className="ml-6 mt-4 text-sm text-slate-500">
            For context, you can review our{' '}
            <Link to="/philosophy" className="underline underline-offset-4 hover:text-blue-500">
              philosophy
            </Link>{' '}
            before reaching out.
          </p>

          <div className="ml-6 mt-6">
            <CtaButton
              variant="primary"
              onClick={() =>
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Begin the conversation
            </CtaButton>
          </div>
        </div>
        <div className="mt-16 h-px w-full bg-slate-200" />
      </div>
    </section>
  );
};

export default ContactHero;
