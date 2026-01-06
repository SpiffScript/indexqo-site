import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Footer: React.FC = () => {
  const location = useLocation();

  return (
    <footer className="bg-slate-900 text-stone-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
        {/* TOP ROW */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          {/* BRAND */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="inline-block text-white text-4xl font-semibold tracking-tight mb-2"
            >
              IndexQo
            </Link>
            <p className="text-stone-300 text-sm leading-relaxed">
              Protecting reality,
              <br />
              from Erosion.
            </p>
          </div>

          {/* EMPTY CENTER (intentional breathing room) */}
          <div />

          {/* RIGHT: NAV + SOCIAL */}
          <div className="flex flex-col items-end gap-6 w-full lg:w-auto">
            {/* NAV LINKS */}
            <div className="text-stone-300 space-y-2 text-sm text-right">
              <div className="flex gap-6 justify-end flex-wrap">
                {[
                  { name: "The Signal", path: "/signal" },
                  { name: "Philosophy", path: "/philosophy" },
                  { name: "Services", path: "/services" },
                  { name: "BrandQo", path: "/brandqo" },
                  { name: "Solutions", path: "/solutions" },
                  { name: "Next Steps", path: "/next-steps" },
                  { name: "About", path: "/about" },
                  { name: "Contact", path: "/contact" },
                ].map((item) => {
                  const isActive = location.pathname === item.path;

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`transition-colors ${
                        isActive ? "text-sky-400" : "hover:text-sky-400"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* SOCIAL (under links, right aligned) */}
            <div className="flex gap-4 text-lg opacity-70 leading-tight">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-stone-300 hover:text-sky-300 transition-colors"
              >
                in
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-stone-300 hover:text-sky-300 transition-colors"
              >
                f
              </a>
              <a
                href="#"
                aria-label="X"
                className="text-stone-300 hover:text-sky-300 transition-colors"
              >
                x
              </a>
            </div>
          </div>
        </div>

        {/* FULL-WIDTH ACCENT LINE */}
        <div className="my-12 h-px w-full bg-slate-700" />

        {/* UNDER-LINE BAND: left handoff and centered meta share the SAME baseline (bottom) */}
        <div className="relative">
          {/* CENTERED META (BOTTOM BAND) */}
          <div className="text-center flex flex-col-reverse items-center gap-1 text-sm leading-tight">
            {/* COPYRIGHT */}
            <div className="text-stone-400 text-xs">
              © {new Date().getFullYear()} QoLogic, LLC. All rights reserved.
            </div>

            {/* LEGAL LINKS */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link
                to="/privacy"
                className="text-stone-400 hover:text-stone-200 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-stone-400 hover:text-stone-200 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/acceptable-use"
                className="text-stone-400 hover:text-stone-200 transition-colors"
              >
                Acceptable Use
              </Link>
            </div>

            {/* SERVICE LOCATION */}
            <div className="text-stone-300 text-sm">
              Based in Denver, Colorado. Supporting organizations beyond geography.
            </div>

            {/* CONTACT (phone then email) */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a
                href="tel:+17205154820"
                className="text-stone-300 hover:text-sky-400 transition-colors"
              >
                (720) 515-4820
              </a>
              <span className="opacity-80">•</span>
              <a
                href="mailto:support@indexqo.com"
                className="text-stone-300 hover:text-sky-400 transition-colors"
              >
                support@indexqo.com
              </a>
            </div>
          </div>

          {/* CROSS-SITE HANDOFF (pinned to the same bottom baseline as centered meta) */}
          <div className="hidden md:block absolute left-0 bottom-0 text-stone-400 text-xs leading-relaxed">
            <div>Presence reflects the business.</div>
            <div>Leadership defines it.</div>
            <a
              href="https://www.signalqo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-300 hover:text-sky-400 transition-colors"
            >
              SignalQo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
