import React, { useEffect, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { CtaButton } from "./ui/CtaButton";
import { ROUTES } from "../types";

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === ROUTES.HOME;

  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 50;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
  }, [scrolled]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-slate-50/95 backdrop-blur-md border-b border-slate-300 py-4 shadow-sm"
          : "bg-slate-900 border-b border-transparent py-5 shadow-none"
      }`}
    >
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
        {/* Logo Section */}
        <Link
          to={ROUTES.HOME}
          className="flex items-center gap-2 group"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className={`w-3 h-3 transition-all duration-500 ${
              scrolled ? "bg-blue-500 scale-90" : "bg-slate-50 scale-100"
            }`}
          />
          <span
            className={`font-bold tracking-tight text-3xl transition-colors duration-500 ${
              scrolled ? "text-slate-900" : "text-slate-50"
            }`}
          >
            IndexQo
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className={`hidden md:flex items-center gap-8 text-sm font-medium transition-colors duration-300 ${
            scrolled ? "text-slate-900" : "text-slate-100"
          }`}
        >
          {[
            { name: "The Signal", path: ROUTES.SIGNAL },
            { name: "Philosophy", path: ROUTES.PHILOSOPHY },
            { name: "Services", path: ROUTES.SERVICES },
            { name: "BrandQo", path: ROUTES.BRANDQO },
            { name: "Solutions", path: ROUTES.SOLUTIONS },
            { name: "Next Steps", path: ROUTES.NEXT_STEPS },
            { name: "About", path: ROUTES.ABOUT },
          ].map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
              key={item.path}
              to={item.path}
              className={`relative transition-all duration-200 ${
                isHome
                  ? scrolled
                    ? "text-slate-900 hover:text-sky-600"
                    : "text-slate-100 hover:text-sky-400"
                  : isActive
                  ? scrolled
                    ? "text-slate-900 opacity-100"
                    : "text-slate-50 opacity-100"
                  : scrolled
                  ? "text-slate-700/70 hover:text-sky-600 hover:opacity-100"
                  : "text-slate-100/70 hover:text-sky-400 hover:opacity-100"
              }`}
            >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA: Logic updated to clip colors */}
        <div className="hidden md:block">
          <Link to="/contact">
            <CtaButton
              variant={scrolled ? "primary" : "light"}
              className={`transition-all duration-500 ${
                !scrolled
                  ? "border-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900"
                  : ""
              }`}
            >
              Brand Audit
            </CtaButton>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className={`md:hidden inline-flex items-center justify-center border px-3 py-2 transition-all duration-500 ${
            scrolled
              ? "border-slate-300 bg-white/70 text-slate-900"
              : "border-slate-700 bg-slate-800/50 text-slate-50"
          }`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-300 bg-slate-50/95 backdrop-blur-md animate-in slide-in-from-top duration-300">
          <div className="max-w-[90rem] mx-auto px-6 py-4">
            <div className="flex flex-col gap-3">
              <CtaButton variant="primary" className="w-full justify-center">
                Brand Audit
              </CtaButton>
              <div className="h-px bg-slate-300/60" />
              <nav className="flex flex-col text-sm font-medium text-slate-700">
                {[
                  { name: "The Signal", path: ROUTES.SIGNAL },
                  { name: "Philosophy", path: ROUTES.PHILOSOPHY },
                  { name: "Services", path: ROUTES.SERVICES },
                  { name: "BrandQo", path: ROUTES.BRANDQO },
                  { name: "Solutions", path: ROUTES.SOLUTIONS },
                  { name: "Next Steps", path: ROUTES.NEXT_STEPS },
                  { name: "About", path: ROUTES.ABOUT },
                ].map((item) => {
                  const isActive = location.pathname === item.path;

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`py-3 border-b border-slate-200/50 last:border-0 transition-colors ${
                        isActive
                          ? "text-slate-900 font-semibold"
                          : "hover:text-sky-500"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
