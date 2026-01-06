import React from "react";
import { Anchor, Minimize2, PenTool } from "lucide-react";

export const OurPrinciples: React.FC = () => {
  return (
    <section
      id="principles"
      className="bg-stone-100 py-20 md:py-32 px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Explanation */}
        <div>
          <h2 className="text-3xl font-serif text-stone-900 mb-6">
            The Problem of Drift
          </h2>

          <div className="space-y-6 text-stone-700 leading-relaxed">
            <p>
              Business ownership is a constant trade-off. You prioritize the product,
              the customer, and the operation. The website, the bio, and the social
              profiles wait for &quot;later.&quot;
            </p>

            <p>
              Slowly, a gap opens up. Your business evolves, gets smarter, and does
              better work. But your public materials stay frozen in time—or worse,
              get cluttered with hasty updates that don’t match.
            </p>

            <p>
              This is <strong>Drift</strong>. It’s not dishonesty. It’s a lack of time.
              But to a customer, it looks like confusion. IndexQo exists to close
              that gap.
            </p>
          </div>
        </div>

        {/* Principles */}
        <div className="bg-white p-8 md:p-12 shadow-sm border border-stone-200">
          <h3 className="text-xl font-medium mb-6">Our Principles</h3>

          <ul className="space-y-4">
            <li className="flex gap-4 items-start">
              <div className="bg-stone-100 p-2 rounded-full">
                <Anchor size={18} className="text-stone-700" />
              </div>
              <div>
                <h4 className="font-medium text-stone-900">
                  Grounded in Respect
                </h4>
                <p className="text-sm text-stone-600 mt-1">
                  We assume you are good at what you do. Our job is to make sure it shows.
                </p>
              </div>
            </li>

            <li className="flex gap-4 items-start">
              <div className="bg-stone-100 p-2 rounded-full">
                <Minimize2 size={18} className="text-stone-700" />
              </div>
              <div>
                <h4 className="font-medium text-stone-900">
                  Restraint &amp; Clarity
                </h4>
                <p className="text-sm text-stone-600 mt-1">
                  No decoration for its own sake. Clarity comes from subtraction,
                  not addition.
                </p>
              </div>
            </li>

            <li className="flex gap-4 items-start">
              <div className="bg-stone-100 p-2 rounded-full">
                <PenTool size={18} className="text-stone-700" />
              </div>
              <div>
                <h4 className="font-medium text-stone-900">
                  Plain Language
                </h4>
                <p className="text-sm text-stone-600 mt-1">
                  We speak like adults. No buzzwords. No authority signaling.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
