import React from "react";
import { CtaButton } from "../ui/CtaButton";

export const ExecutionCta: React.FC = () => {
  return (
    <div className="space-y-6">
      <p className="text-lg text-slate-700 leading-relaxed">
        This work always starts the same way.
      </p>

      <p className="text-lg text-slate-600 leading-relaxed">
        By identifying where the signal breaks — and correcting it at the
        structural level.
      </p>

      <div className="flex flex-wrap gap-4 pt-2">
        <CtaButton
          variant="primary"
          href="/philosophy"
        >
          Philosophy
        </CtaButton>

        <CtaButton
          variant="outline"
          href="/brandqo"
        >
          BrandQo
        </CtaButton>
      </div>
    </div>
  );
};

export default ExecutionCta;
