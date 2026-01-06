import React from "react";

export const BrandQoClosingStrip: React.FC = () => {
  return (
    <section className="w-full">
      <div className="relative w-full overflow-hidden">
        {/* Image */}
        <div className="h-[100px] sm:h-[160px] md:h-[180px] lg:h-[280px] w-full">
          <img
            src="/images/brandqo/business-in-motion.jpg"
            alt="Office buildings and green space representing an active business environment."
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Top fade (NO gradient banding in the page — this is a mask) */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-16 sm:h-20 md:h-24"
          style={{
            background:
              "linear-gradient(to bottom, rgba(248,250,252,1), rgba(248,250,252,0))",
          }}
        />
      </div>
    </section>
  );
};

export default BrandQoClosingStrip;
