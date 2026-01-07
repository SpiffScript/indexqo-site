import React from "react";
import { CtaButton } from "../ui/CtaButton";

export const ExecutionCta: React.FC = () => {
  return (
    <div className="space-y-6">
      <p className="pt-4 text-lg text-slate-900 leading-relaxed italic">
        You are communicating at all times – whether you intend to or not.
      </p>

      <p className="text-lg font-medium text-slate-900">
        Is your signal reinforcing trust – or creating quiet doubt?
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
