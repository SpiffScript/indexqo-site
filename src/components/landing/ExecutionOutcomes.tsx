import React from "react";

export const ExecutionOutcomes: React.FC = () => {
  return (
    <div className="space-y-8">
      <h3 className="text-3xl font-semibold uppercase tracking-wide text-slate-900">
        The Result of Structure
      </h3>

      <ul className="space-y-2 text-lg text-slate-700 list-none pl-0">
        <li>Fewer mismatched leads; your presence filters for you</li>
        <li>Accelerated trust; clients recognize value before the first call</li>
        <li>Reduced re-explaining; your signal does the heavy lifting</li>
        <li>Decisions land cleaner internally; the path is obvious</li>
        <li>Compounding momentum; growth creates leverage, not confusion</li>
      </ul>

      <p className="pt-2 text-lg text-slate-600 leading-relaxed">
        Nothing feels louder than clarity. Everything feels more certain. This
        is how progress becomes visible without being manufactured.
      </p>

      <div className="space-y-4">
        <p className="text-lg text-slate-700">This work always starts the same way.</p>
        <p className="text-lg font-medium text-slate-900">
          By identifying where the signal breaks — and correcting it at the structural level.
        </p>
      </div>
    </div>
  );
};

export default ExecutionOutcomes;
