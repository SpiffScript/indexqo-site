import React from "react";
import { Section } from "../ui/Section";
import type { ProcessStep } from "../../types";

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Audit",
    description:
      "Forensic analysis of current external footprint. Identifying false signals and broken links.",
  },
  {
    number: "02",
    title: "Structure",
    description: "Defining the information architecture and visual standards required for clarity.",
  },
  {
    number: "03",
    title: "Build",
    description: "Execution of the system components. Code, copy, and assets created to standard.",
  },
  {
    number: "04",
    title: "Deploy",
    description: "Seamless launch and propagation across all relevant channels and indices.",
  },
  {
    number: "05",
    title: "Maintain",
    description: "Ongoing defense of the signal against entropy and drift.",
  },
];

export const Process: React.FC = () => {
  return (
    <Section bg="bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-stone-100 pb-8">
          <h2 className="text-3xl font-medium text-slate-900">Protocol</h2>
          <span className="text-slate-500 uppercase tracking-widest text-xs mt-4 md:mt-0">
            Standard Operating Procedure
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative pt-6 border-t border-stone-200">
              <span className="absolute -top-3 left-0 text-xs font-mono text-sky-600 bg-stone-50 pr-2">
                {step.number}
              </span>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
