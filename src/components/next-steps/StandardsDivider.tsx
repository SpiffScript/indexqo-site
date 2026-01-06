// src/components/next-steps/StandardsDivider.tsx
import React from "react";

export const StandardsDivider: React.FC = () => {
  return (
    <section className="relative w-full my-16">
      {/* Full-bleed wrapper */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden">
        <img
          src="/images/next-steps/small-business-standards.jpg"
          alt="Organized tools on a workshop wall representing established working standards."
          className="block w-full object-cover"
          style={{
            height: "480px", // slightly taller, still a band
            opacity: 0.52,
            filter: "saturate(0.85) contrast(0.92) brightness(1.03)",
            // Soft edge fade (mask, not gradient overlay)
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 28%, black 85%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 30%, black 85%, transparent 100%)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
          }}
        />
      </div>
    </section>
  );
};

export default StandardsDivider;
