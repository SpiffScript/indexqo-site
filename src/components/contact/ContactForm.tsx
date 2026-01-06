import React, { useEffect, useMemo, useRef, useState } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      reset: (widgetId?: string) => void;
      getResponse: (widgetId?: string) => string;
    };
  }
}

type Status =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success" }
  | { state: "error"; message: string };

type ApiResponse = {
  ok?: boolean;
  error?: string;
};

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY as
  | string
  | undefined;

const NEED_OPTIONS = [
  "Brand + positioning (BrandQo)",
  "Website (new build / rebuild)",
  "Website updates (existing site)",
  "SEO + indexing",
  "Content + copy",
  "Customer media (photo / video)",
  "Social profiles + presence",
  "Domain + email setup",
  "Reputation (reviews / listings)",
  "Other / not sure",
] as const;

const WEBSITE_STATUS_OPTIONS = [
  "No website yet",
  "Website exists, needs a rebuild",
  "Website exists, needs updates",
  "Website exists, performing well (sanity check)",
  "Not sure",
] as const;

const PRIMARY_GOAL_OPTIONS = [
  "Clarify positioning / messaging",
  "Increase qualified leads",
  "Improve credibility / trust",
  "Fix inconsistency across channels",
  "Prepare for growth or launch",
  "Not sure yet",
] as const;

const TIMING_OPTIONS = [
  "Exploring / no rush",
  "Within 30 days",
  "30–90 days",
  "Time-sensitive",
] as const;

const CONTACT_METHOD_OPTIONS = ["Email", "Phone", "Text"] as const;

function hasWebsite(status: string) {
  return (
    status === "Website exists, needs a rebuild" ||
    status === "Website exists, needs updates" ||
    status === "Website exists, performing well (sanity check)"
  );
}

function isValidUrlLoose(v: string) {
  const s = v.trim();
  if (!s) return true;
  try {
    const url =
      s.startsWith("http://") || s.startsWith("https://") ? s : `https://${s}`;
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

function normalizedWebsiteUrl(raw: string) {
  const s = raw.trim();
  if (!s) return "";
  return s.startsWith("http://") || s.startsWith("https://") ? s : `https://${s}`;
}

export const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");

  const [preferredContact, setPreferredContact] = useState<
    (typeof CONTACT_METHOD_OPTIONS)[number]
  >(CONTACT_METHOD_OPTIONS[0]);

  const [primaryGoal, setPrimaryGoal] = useState<string>(PRIMARY_GOAL_OPTIONS[5]);
  const [timing, setTiming] = useState<string>(TIMING_OPTIONS[0]);

  const [needs, setNeeds] = useState<string[]>([]);
  const [websiteStatus, setWebsiteStatus] = useState<string>(
    WEBSITE_STATUS_OPTIONS[4]
  );
  const [websiteUrl, setWebsiteUrl] = useState("");

  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>({ state: "idle" });

  const widgetIdRef = useRef<string | null>(null);
  const turnstileElRef = useRef<HTMLDivElement | null>(null);

  const phoneRequired = preferredContact !== "Email";

  const canSubmit = useMemo(() => {
    if (status.state === "submitting") return false;
    if (!name.trim()) return false;
    if (!email.trim()) return false;
    if (!message.trim()) return false;
    if (needs.length < 1) return false;
    if (phoneRequired && !phone.trim()) return false;
    if (hasWebsite(websiteStatus) && !isValidUrlLoose(websiteUrl)) return false;
    if (!TURNSTILE_SITE_KEY) return false;
    return true;
  }, [
    name,
    email,
    message,
    needs.length,
    status.state,
    phoneRequired,
    phone,
    websiteStatus,
    websiteUrl,
  ]);

  // Load Turnstile once
  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return;

    const existing = document.querySelector('script[data-turnstile="true"]');
    if (existing) return;

    const s = document.createElement("script");
    s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    s.async = true;
    s.defer = true;
    s.dataset.turnstile = "true";
    document.body.appendChild(s);
  }, []);

  // Render widget
  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return;
    if (!turnstileElRef.current) return;

    const interval = window.setInterval(() => {
      if (!window.turnstile) return;

      if (!widgetIdRef.current) {
        widgetIdRef.current = window.turnstile.render(turnstileElRef.current!, {
          sitekey: TURNSTILE_SITE_KEY,
          theme: "light",
        });
      }

      window.clearInterval(interval);
    }, 150);

    return () => window.clearInterval(interval);
  }, []);

  function toggleNeed(option: string) {
    setNeeds((prev) =>
      prev.includes(option) ? prev.filter((x) => x !== option) : [...prev, option]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus({ state: "submitting" });

    const widgetId = widgetIdRef.current || undefined;
    const token = window.turnstile?.getResponse(widgetId) || "";

    if (!token) {
      setStatus({
        state: "error",
        message: "Please complete the verification and try again.",
      });
      return;
    }

    if (phoneRequired && !phone.trim()) {
      setStatus({
        state: "error",
        message: "Phone is required for your preferred contact method.",
      });
      return;
    }

    if (hasWebsite(websiteStatus) && !isValidUrlLoose(websiteUrl)) {
      setStatus({
        state: "error",
        message: "Please enter a valid website URL (or leave it blank).",
      });
      return;
    }

    try {
      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          company,
          phone,
          preferredContact,
          primaryGoal,
          timing,
          needs,
          websiteStatus,
          websiteUrl: hasWebsite(websiteStatus)
            ? normalizedWebsiteUrl(websiteUrl)
            : "",
          message,
          turnstileToken: token,
        }),
      });

      const data = (await resp.json().catch(() => null)) as ApiResponse | null;

      if (!resp.ok || !data?.ok) {
        setStatus({
          state: "error",
          message:
            typeof data?.error === "string"
              ? data.error
              : "Something went wrong. Please try again.",
        });
        window.turnstile?.reset(widgetId);
        return;
      }

      setStatus({ state: "success" });
      setName("");
      setEmail("");
      setCompany("");
      setPhone("");
      setPreferredContact(CONTACT_METHOD_OPTIONS[0]);
      setPrimaryGoal(PRIMARY_GOAL_OPTIONS[5]);
      setTiming(TIMING_OPTIONS[0]);
      setNeeds([]);
      setWebsiteStatus(WEBSITE_STATUS_OPTIONS[4]);
      setWebsiteUrl("");
      setMessage("");
      window.turnstile?.reset(widgetId);
    } catch {
      setStatus({
        state: "error",
        message: "Network error. Please try again.",
      });
      window.turnstile?.reset(widgetIdRef.current || undefined);
    }
  }

  return (
    <section id="contact-form" className="scroll-mt-24 pb-24 mb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Frame */}
        <div className="border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.10)]">
          <div className="grid lg:grid-cols-5">
            {/* Left side: briefing */}
            <aside className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-slate-200 bg-slate-50">
              <div className="p-8">
                <div className="text-[11px] uppercase tracking-[0.24em] text-sky-700">
                  Contact
                </div>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
                  Start with the signal
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  A short note is enough. We’ll respond with clarity and next steps — not generic advice.
                </p>

                <div className="mt-7 border-t border-slate-200 pt-6">
                  <div className="text-sm font-semibold text-slate-900">
                    What happens next
                  </div>
                  <div className="mt-3 space-y-2 text-sm text-slate-700">
                    <div className="flex gap-3">
                      <span className="mt-[9px] h-1.5 w-1.5 bg-sky-600" />
                      <span>We review what you send and reply with a clear recommendation.</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="mt-[9px] h-1.5 w-1.5 bg-sky-600" />
                      <span>If it’s not a fit, we’ll tell you directly.</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="mt-[9px] h-1.5 w-1.5 bg-sky-600" />
                      <span>Typical reply: within one business day.</span>
                    </div>
                  </div>
                </div>

                <div className="mt-7 border-t border-slate-200 pt-6">
                  <div className="text-sm font-semibold text-slate-900">
                    What to include
                  </div>
                  <div className="mt-3 space-y-2 text-sm text-slate-700">
                    <div className="flex gap-3">
                      <span className="mt-[9px] h-1.5 w-1.5 bg-slate-400" />
                      <span>What feels unclear or inconsistent right now</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="mt-[9px] h-1.5 w-1.5 bg-slate-400" />
                      <span>Where it shows up (website, Google, social, email, sales)</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="mt-[9px] h-1.5 w-1.5 bg-slate-400" />
                      <span>What “better” looks like in 30–90 days</span>
                    </div>
                  </div>

                  <div className="mt-6 text-xs text-slate-500">
                    This is a clean first step — not a commitment.
                  </div>
                </div>
              </div>
            </aside>

            {/* Right side: form */}
            <div className="lg:col-span-3">
              <div className="p-8">
                <div className="flex items-end justify-between gap-6 border-b border-slate-200 pb-5">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
                      Send the situation
                    </div>
                    <div className="mt-2 text-sm text-slate-700">
                      You're busy, we get it. Minimal fields. Enough context to respond usefully.
                    </div>
                  </div>
                </div>

                {status.state === "success" ? (
                  <div className="mt-6 border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800">
                    Message received. We’ll be in touch shortly.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                    {/* Basics */}
                    <FormBlock title="Basics">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field label="Name" value={name} onChange={setName} required />
                        <Field
                          label="Email"
                          value={email}
                          onChange={setEmail}
                          required
                          type="email"
                        />
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2 mt-4">
                        <Field label="Company" value={company} onChange={setCompany} />
                        <Field
                          label="Phone"
                          value={phone}
                          onChange={setPhone}
                          required={phoneRequired}
                          hint={phoneRequired ? "Required for phone/text." : undefined}
                        />
                      </div>
                    </FormBlock>

                    {/* Context */}
                    <FormBlock title="Context">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <SelectField
                          label="Preferred contact"
                          value={preferredContact}
                          onChange={(value) => {
                            if (value === "Email" || value === "Phone" || value === "Text") {
                              setPreferredContact(value);
                            }
                          }}
                          options={[...CONTACT_METHOD_OPTIONS]}
                        />
                        <SelectField
                          label="Primary goal"
                          value={primaryGoal}
                          onChange={setPrimaryGoal}
                          options={[...PRIMARY_GOAL_OPTIONS]}
                        />
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2 mt-4">
                        <SelectField
                          label="Timing"
                          value={timing}
                          onChange={setTiming}
                          options={[...TIMING_OPTIONS]}
                        />
                        <SelectField
                          label="Website status"
                          value={websiteStatus}
                          onChange={(v) => {
                            setWebsiteStatus(v);
                            if (!hasWebsite(v)) setWebsiteUrl("");
                          }}
                          options={[...WEBSITE_STATUS_OPTIONS]}
                        />
                      </div>

                      {hasWebsite(websiteStatus) && (
                        <div className="mt-4">
                          <Field
                            label="Website (optional)"
                            value={websiteUrl}
                            onChange={setWebsiteUrl}
                            placeholder="example.com"
                            hint="If you paste without https://, we’ll handle it."
                            invalid={
                              Boolean(websiteUrl.trim()) && !isValidUrlLoose(websiteUrl)
                            }
                          />
                        </div>
                      )}
                    </FormBlock>

                    {/* Needs */}
                    <FormBlock title="Areas to focus" subtitle="Select one or more.">
                      <div className="flex flex-wrap gap-2">
                        {NEED_OPTIONS.map((opt) => {
                          const active = needs.includes(opt);
                          return (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => toggleNeed(opt)}
                              className={`border px-3 py-1.5 text-[13px] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-sky-200 ${
                                active
                                  ? "border-sky-300 bg-sky-50 text-slate-900"
                                  : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300"
                              }`}
                              aria-pressed={active}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                      {needs.length < 1 ? (
                        <div className="mt-3 text-xs text-slate-500">
                          Required: select at least one.
                        </div>
                      ) : null}
                    </FormBlock>

                    {/* Message */}
                    <FormBlock title="Message" subtitle="The short version is fine.">
                      <label className="sr-only">Message</label>
                      <textarea
                        className="min-h-[180px] w-full border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-200"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        placeholder="What’s not landing, where does it show up, and what outcome do you want?"
                      />
                    </FormBlock>

                    {/* Turnstile */}
                    <div className="border border-slate-200 bg-white p-3">
                      <div ref={turnstileElRef} />
                    </div>

                    {status.state === "error" && (
                      <div className="border border-rose-200 bg-rose-50 p-3 text-sm text-rose-800">
                        {status.message}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={!canSubmit}
                      className="w-full border border-slate-900 bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {status.state === "submitting" ? "Sending…" : "Send message"}
                    </button>

                    <div className="text-xs text-slate-500">
                      No spam. No list selling. Clear next steps.
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FormBlock = ({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) => (
  <div className="border border-slate-200 bg-slate-50">
    <div className="border-b border-slate-200 bg-white px-4 py-3">
      <div className="flex items-baseline justify-between gap-4">
        <div className="text-sm font-semibold text-slate-900">{title}</div>
        {subtitle ? <div className="text-xs text-slate-500">{subtitle}</div> : null}
      </div>
    </div>
    <div className="p-4 bg-white">{children}</div>
  </div>
);

const Field = ({
  label,
  value,
  onChange,
  required,
  type,
  placeholder,
  hint,
  invalid,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  type?: string;
  placeholder?: string;
  hint?: string;
  invalid?: boolean;
}) => (
  <div>
    <label className="mb-2 block text-sm font-medium text-slate-900">
      {label}
      {required ? <span className="text-sky-700"> *</span> : null}
    </label>
    <input
      type={type || "text"}
      className={`w-full border bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-200 ${
        invalid ? "border-rose-300 focus:border-rose-300" : "border-slate-200 focus:border-sky-300"
      }`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
      placeholder={placeholder}
      inputMode={type === "email" ? "email" : "text"}
    />
    {hint ? <div className="mt-1 text-xs text-slate-500">{hint}</div> : null}
    {invalid ? (
      <div className="mt-1 text-xs text-rose-600">Please enter a valid URL.</div>
    ) : null}
  </div>
);

const SelectField = ({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) => (
  <div>
    <label className="mb-2 block text-sm font-medium text-slate-900">{label}</label>
    <select
      className="w-full border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-200"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

export default ContactForm;
