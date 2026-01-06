import React, { useEffect, useState } from "react";
import { Container } from "../ui/Container";

export const PhilosophyHero: React.FC = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Trigger the move once the user scrolls more than 50px
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <section
        className="relative w-full min-h-[75vh] lg:min-h-[85vh] overflow-hidden bg-black bg-cover bg-no-repeat bg-[72%_center] sm:bg-center"
        style={{
          backgroundImage: "url('/images/philosophy/philosophy-hero-interior.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </section>

      {/* FIXED FRAMING CARD WITH SCROLL REVEAL */}
      <div
        className={`relative z-10 px-4 transition-all duration-1000 ease-out transform ${
          hasScrolled
            ? "-mt-16 opacity-100 translate-y-0"
            : "mt-0 opacity-0 translate-y-20"
        }`}
      >
        <Container>
          <div className="flex justify-center">
            <div className="bg-white p-8 md:p-12 shadow-[0_12px_30px_rgba(0,0,0,0.06)] shadow-black/5 border border-slate-200 text-center space-y-6 max-w-3xl">
              <p className="text-xs tracking-[0.2em] text-sky-600 uppercase font-semibold">
                Our Philosophy
              </p>

              <p className="text-lg text-slate-500 italic font-serif">
                We start from a simple reality:
              </p>

              <p className="text-3xl md:text-3xl font-semibold tracking-tight text-slate-600 leading-tight">
                Most of the important decisions happen quietly.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
