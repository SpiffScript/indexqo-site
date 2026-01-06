import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutTemplate,
  MessageSquareText,
  Radar,
  ShieldCheck,
  Workflow,
  Puzzle,
  ChevronDown,
} from "lucide-react";

import { SERVICES, type ServiceKey } from "../../data/servicesOfferings";
import { CtaButton } from "../ui/CtaButton";

const ICONS: Record<ServiceKey, React.ComponentType<{ className?: string }>> = {
  web: LayoutTemplate,
  messaging: MessageSquareText,
  seo: Radar,
  local: ShieldCheck,
  content: Puzzle,
  assets: Workflow,
};

function isServiceKey(value: string | null | undefined): value is ServiceKey {
  if (!value) return false;
  return ["web", "messaging", "seo", "local", "content", "assets"].includes(value);
}

function getDeepLinkedKey(hash: string, search: string): ServiceKey | null {
  const hashKey = (hash || "").replace("#", "").trim();
  if (isServiceKey(hashKey)) return hashKey;

  const params = new URLSearchParams(search || "");
  const qp = (params.get("service") || "").trim();
  if (isServiceKey(qp)) return qp;

  return null;
}

export const ServicesMenu: React.FC = () => {
  const location = useLocation();

  const deepLinkedKey = React.useMemo(
    () => getDeepLinkedKey(location.hash, location.search),
    [location.hash, location.search]
  );

  const allKeys = React.useMemo(() => SERVICES.map((s) => s.key), []);

  const [openKeys, setOpenKeys] = React.useState<Set<ServiceKey>>(() => {
    if (deepLinkedKey) return new Set<ServiceKey>([deepLinkedKey]);
    return new Set<ServiceKey>(allKeys);
  });

  const allOpen = openKeys.size === allKeys.length;

  React.useEffect(() => {
    if (deepLinkedKey) {
      setOpenKeys(new Set<ServiceKey>([deepLinkedKey]));
      requestAnimationFrame(() => {
        const el = document.getElementById(`service-${deepLinkedKey}`);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    } else {
      setOpenKeys(new Set<ServiceKey>(allKeys));
    }
  }, [deepLinkedKey, allKeys]);

  const toggle = (key: ServiceKey) => {
    setOpenKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const toggleAll = () => {
  setOpenKeys((prev) => {
    if (prev.size === allKeys.length) {
      return new Set<ServiceKey>(); // collapse all
    }
    return new Set<ServiceKey>(allKeys); // expand all
  });
};

  return (
    <section aria-label="Services menu" className="mt-12">
      <div className="mb-6 flex justify-end">
        <button
          type="button"
          onClick={toggleAll}
          className="text-xs font-semibold uppercase tracking-widest text-slate-500 transition-colors hover:text-slate-900"
        >
          {allOpen ? "Collapse All" : "Expand All"}
        </button>
      </div>

      <div className="divide-y divide-slate-200 border border-slate-200 bg-white shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
        {SERVICES.map((service) => {
          const Icon = ICONS[service.key];
          const isOpen = openKeys.has(service.key);

          return (
            <div key={service.key} id={`service-${service.key}`} className="scroll-mt-28">
              {/* Header */}
              <button
                type="button"
                onClick={() => toggle(service.key)}
                className="group w-full text-left transition-colors hover:bg-slate-50"
                aria-expanded={isOpen}
                aria-controls={`service-panel-${service.key}`}
              >
                <div className="flex items-start justify-between gap-6 px-6 py-6 sm:px-12 lg:px-16">
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold leading-tight text-slate-900 md:text-2xl lg:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 sm:text-base">
                      {service.teaser}
                    </p>
                  </div>

                  <ChevronDown
                    className={`mt-2 h-5 w-5 flex-none text-slate-500 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {/* Accordion */}
              <div
                id={`service-panel-${service.key}`}
                className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pt-6 pb-10 sm:px-12 lg:px-16">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-[280px_minmax(0,1fr)] md:gap-12 items-start">
                      {/* Icon */}
                      <div className="self-start">
                        <div className="flex h-40 w-40 items-center justify-center border border-slate-200 bg-white md:h-52 md:w-52">
                          <Icon className="h-20 w-20 text-slate-700 md:h-28 md:w-28" />
                        </div>
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm leading-7 text-slate-600">
                          {service.detail}
                        </p>

                        {service.bullets?.length ? (
                          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto] md:items-end">
                            {/* Bullets */}
                            <ul className="space-y-3">
                              {service.bullets.map((b, i) => (
                                <li
                                  key={i}
                                  className="group flex gap-3 text-sm text-slate-600 transition-colors hover:text-slate-900"
                                >
                                  <span className="mt-2 h-1.5 w-1.5 flex-none bg-slate-900 transition-transform duration-200 group-hover:scale-125" />
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>

                            {/* CTA — inline with bullets */}
                            <div className="flex justify-start md:justify-end">
                              <Link to="/contact">
                                <CtaButton variant="primary">
                                  Start a conversation
                                </CtaButton>
                              </Link>
                            </div>
                          </div>
                        ) : null}

                        {/* Includes */}
                        {service.includes?.length ? (
                          <div className="mt-8">
                            <div className="text-[11px] font-semibold tracking-wide text-slate-400">
                              INCLUDES
                            </div>

                            <div className="mt-2 h-0.5 bg-slate-200" />

                            <div className="mt-4 flex flex-wrap gap-3">
                              {service.includes.map((inc, i) => (
                                <div
                                  key={i}
                                  className="border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600"
                                >
                                  {inc}
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-3 text-xs text-slate-500 text-center">
        Each project is shaped by the unique gravity of your market standing and the practical rhythms
        of your business.{" "}
        <a
          href="/brandqo"
          className="font-medium text-slate-700 hover:text-slate-900 transition-colors"
        >
          Start
        </a>{" "}
        where clarity breaks down.
      </p>
    </section>
  );
};
