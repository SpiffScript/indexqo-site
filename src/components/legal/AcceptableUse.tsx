import React from "react";

export const AcceptableUse: React.FC = () => {
  return (
    <main className="min-h-screen bg-stone-50 text-slate-900">
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <h1 className="text-4xl font-semibold mb-4">
          Acceptable Use Policy
        </h1>

        <p className="text-sm text-slate-500 mb-12">
          Effective Date: June 1, 2025
        </p>

        <div className="space-y-6 text-sm leading-relaxed text-slate-800">
          <p>
            This Acceptable Use Policy (“Policy”) governs access to and use of
            the indexqo.com website (the “Site”), as well as any portals,
            dashboards, analytics tools, communication systems, file-sharing
            mechanisms, or related platforms that may be made available by
            IndexQo in connection with web, SEO, brand, or digital advisory
            services.
          </p>

          <p>
            IndexQo is a business operated by QoLogic LLC (“IndexQo,” “QoLogic,”
            “we,” “us,” or “our”). By accessing or using the Site or any related
            systems, you agree to comply with this Policy in addition to our
            Terms of Service and Privacy Policy.
          </p>

          <h2 className="text-xl font-semibold mt-12">
            1. Permitted Use
          </h2>
          <p>
            You may access and use the Site and related systems solely for
            lawful, internal business purposes and only in connection with
            services provided or expressly authorized by IndexQo.
          </p>

          <p>
            Use of the Site does not grant any ownership interest in IndexQo’s
            intellectual property, frameworks, methodologies, systems,
            deliverables, or content.
          </p>

          <h2 className="text-xl font-semibold mt-12">
            2. Prohibited Activities
          </h2>
          <p>
            You may not, directly or indirectly:
          </p>

          <ul className="list-disc list-inside space-y-1">
            <li>Copy, scrape, harvest, or extract Site content, data, or structure</li>
            <li>
              Reverse engineer, deconstruct, analyze, or infer systems,
              architectures, frameworks, or methodologies
            </li>
            <li>
              Create derivative works based on IndexQo materials, outputs, or
              structural design
            </li>
            <li>
              Share Site access, materials, reports, or credentials with
              unauthorized parties
            </li>
            <li>
              Use Site content for competitive, commercial, advisory, or
              third-party purposes outside your own internal business
            </li>
            <li>
              Circumvent access controls, security features, rate limits, or
              technical safeguards
            </li>
            <li>
              Upload malicious code, scripts, bots, scrapers, or automated tools
            </li>
            <li>
              Interfere with the availability, integrity, or performance of the
              Site or related systems
            </li>
            <li>
              Use the Site to violate laws, regulations, contractual obligations,
              or third-party rights
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-12">
            3. User Submissions
          </h2>
          <p>
            Where IndexQo allows the submission or upload of information,
            materials, credentials, or other content, you represent that:
          </p>

          <ul className="list-disc list-inside space-y-1">
            <li>You have the legal right to submit such materials</li>
            <li>
              Submission does not violate confidentiality, employment,
              intellectual property, or privacy obligations
            </li>
            <li>
              Materials do not contain malicious code or harmful content
            </li>
          </ul>

          <p>
            IndexQo reserves the right to remove, restrict, or disregard any
            submitted materials that violate this Policy or pose operational,
            legal, or security risk.
          </p>

          <h2 className="text-xl font-semibold mt-12">
            4. Security and Access Controls
          </h2>
          <p>
            You are responsible for maintaining the confidentiality of any
            access credentials issued to you. You may not attempt to access
            systems, areas, or data for which you are not authorized.
          </p>

          <p>
            IndexQo may suspend or terminate access where misuse, attempted
            misuse, abnormal activity, or security concerns are identified.
          </p>

          <h2 className="text-xl font-semibold mt-12">
            5. Monitoring and Enforcement
          </h2>
          <p>
            IndexQo may monitor Site usage and system activity for compliance,
            security, and operational integrity. Violations may result in
            suspension, termination of access, content removal, or additional
            legal remedies as permitted by law.
          </p>

          <h2 className="text-xl font-semibold mt-12">
            6. Relationship to Other Policies
          </h2>
          <p>
            This Policy is supplemental to IndexQo’s Terms of Service and
            Privacy Policy. In the event of conflict, the Terms of Service
            control.
          </p>

          <h2 className="text-xl font-semibold mt-12">
            7. Changes to This Policy
          </h2>
          <p>
            IndexQo may update this Policy from time to time. Continued use of
            the Site or related systems constitutes acceptance of any updates.
          </p>

          <h2 className="text-xl font-semibold mt-12">
            8. Contact Information
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Email: support@indexqo.com</li>
            <li>
              Mailing Address: 411 W Platte Ave Ste A142, Fort Morgan, CO 80701
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default AcceptableUse;
