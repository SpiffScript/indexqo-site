import React, { useMemo, useState } from "react";
import { Container } from "../ui/Container";

export const SignalErosion: React.FC = () => {
  const items = useMemo(
    () => [
      {
        title: "Different story on every platform",
        body: `Your website says one thing, your Google profile says another, and your social posts tell a third story. Customers feel the mismatch even if they can’t explain it. The result is hesitation: “Do they actually do what they claim?” This isn’t a marketing problem – it’s a truth problem. When the story changes by surface, people assume the standards change too. BrandQo locks the story to the operational reality so every touchpoint reinforces the same core truth.`,
      },
      {
        title: "Design decisions made in isolation",
        body: `One person picks a new logo file. Someone else rebuilds a flyer. A vendor “refreshes” a homepage section. None of it is malicious – it’s just ungoverned. Over time, the business becomes a patchwork of “pretty good” decisions that don’t connect. That drift makes the company feel less mature than it actually is. Alignment requires ownership, rules, and a single source of truth. BrandQo installs that governance so design stops being improvisation and becomes controlled representation.`,
      },
      {
        title: "Marketing output without structural alignment",
        body: `You post often, run ads, and publish content – but the foundation underneath doesn’t match what’s being promoted. Pages compete or repeat. Offers aren’t clear. The service hierarchy doesn’t reflect how you actually sell and deliver. So the market sees activity, not clarity. Output without structure increases confusion, not trust. BrandQo fixes the underlying system first, so every piece of marketing lands with authority instead of noise.`,
      },
      {
        title: "Online presence that undersells the real operation",
        body: `The team is strong, the work is real, and customers are happy – but the public footprint looks thin or generic. That gap costs you better clients, better hires, and better referrals. People judge what they can see. When the signal is weak, your reputation becomes dependent on word-of-mouth alone. That’s fragile, even for great operators. BrandQo closes the gap by translating operational strength into a clear, credible external presence.`,
      },
      {
        title: "Team pride internally, confusion externally",
        body: `Inside the business, people know what “good” looks like – and they care about it. But if the outside story doesn’t reflect that standard, pride turns into frustration. “Why don’t we look as good as we are?” That morale hit is real: it affects retention, initiative, and how confidently staff speaks about the business. Branding isn’t just customer-facing – it’s identity reinforcement for the team. BrandQo makes the external signal match internal standards so pride and credibility stay aligned.`,
      },
    ],
    []
  );

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-stone-50">
      <Container className="py-6 md:py-8">
        {/* Section label */}
        <div className="mb-12">
          <span className="block text-xs uppercase tracking-widest text-slate-500">
            What breaks the signal
          </span>
          <div className="mt-3 h-px w-12 bg-slate-300" />
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div className="relative pl-8 space-y-8">
            {/* Accent line - covers the header area */}
            <span className="absolute left-0 top-2 h-[80px] w-px bg-sky-600" />
            <h2 className="max-w-xl text-3xl font-semibold leading-tight text-slate-900">
              <span className="block">Fragmentation</span>
              <span className="block">doesn’t look like chaos.</span>
              <span className="block font-semibold">It looks like “good enough.”</span>
            </h2>

            <p className="max-w-base text-base leading-relaxed text-slate-700">
              Small businesses have a brand problem disguised as a signal problem: communication
              breaks down across written, visual, and day-to-day operational touchpoints. Disconnected vendors,
              surface-level marketing, and inconsistent messaging blur the truth of what you actually do.
            </p>

            <p className="max-w-lg text-base leading-relaxed text-slate-700">
              Over time, that same lack of clarity starts to show up internally. Decisions are made
              in isolation. Presentation drifts. Teams fill in gaps differently. Employees leave because
              expectations never fully align. What should be obvious has to be re-explained – again and again.
            </p>

            <p className="max-w-lg text-base leading-relaxed text-slate-700">
              The issue isn’t effort or intent. It’s that the signal breaks before it ever has a chance to compound.
            </p>
          </div>

          {/* RIGHT */}
          <div className="space-y-6 text-slate-700">
            <div className="rounded-none border border-slate-200 bg-white p-7 shadow-sm">
              {/* Header */}
              <div className="mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-px w-10 bg-sky-600/90" />
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-900">
                    Common symptoms
                  </h3>
                </div>
              </div>

              {/* Accordion */}
              <div className="mt-6">
                {items.map((item, idx) => {
                  const isOpen = openIndex === idx;

                  return (
                    <div key={item.title} className="border-t border-slate-200 first:border-t-0">
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                        className="group flex w-full items-center justify-between gap-4 py-4 text-left"
                        aria-expanded={isOpen}
                      >
                        {/* Title: Blue on Hover/Open, Slate on Closed */}
                        <span className={`text-sm font-semibold transition-colors duration-200 group-hover:text-sky-600 ${isOpen ? 'text-sky-600' : 'text-slate-900'}`}>
                          {item.title}
                        </span>

                        {/* Symbol: Synchronized blue response on Hover/Open */}
                        <span className={`flex h-7 w-7 items-center justify-center rounded-md transition-colors duration-200 group-hover:text-sky-600 ${isOpen ? 'text-sky-600' : 'text-slate-400'}`}>
                          <span className="text-lg leading-none">{isOpen ? "−" : "+"}</span>
                        </span>
                      </button>

                      <div
                        className={[
                          "overflow-hidden transition-all duration-200 ease-out",
                          isOpen ? "max-h-96 pb-4 opacity-100" : "max-h-0 opacity-0",
                        ].join(" ")}
                      >
                        <p className="text-sm leading-relaxed text-slate-600">{item.body}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Repositioned and Centered Line */}
            <p className="text-center text-sm leading-relaxed text-slate-500">
              When the signal drifts, trust doesn’t disappear – it never forms.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SignalErosion;
