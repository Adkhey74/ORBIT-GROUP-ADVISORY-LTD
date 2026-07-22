import type { Metadata } from "next";
import { site } from "@/content/site";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.company.legalName} collects, uses and protects your personal data.`,
  alternates: { canonical: "/privacy" },
};

const { company } = site;

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" updated="22 July 2026">
      <p>
        This Privacy Policy explains how <strong>{company.legalName}</strong> (&ldquo;Orbit
        Group&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects, uses and protects your
        personal data when you visit our website or contact us. We are committed to handling
        your information with the same discretion we apply to our clients.
      </p>
      <p>
        For the purposes of the UK GDPR and the Data Protection Act 2018, {company.legalName}
        is the <strong>data controller</strong>. Company number {company.registrationNumber},
        registered in {company.registeredIn}, registered office {company.registeredOffice}.
      </p>

      <h2>1. Information we collect</h2>
      <p>We only collect the personal data you choose to provide, and minimal technical data:</p>
      <ul>
        <li>
          <strong>Enquiry data</strong> — when you use our contact form we collect your full
          name, email address, and (optionally) your company, country and the service you are
          interested in, together with the content of your message.
        </li>
        <li>
          <strong>Technical data</strong> — our hosting provider automatically logs standard
          server information (such as IP address and browser type) for security and reliability.
        </li>
      </ul>

      <h2>2. How we use your data and legal basis</h2>
      <p>We use your personal data to:</p>
      <ul>
        <li>respond to your enquiry and correspond with you;</li>
        <li>provide the services you request;</li>
        <li>maintain the security and integrity of our website.</li>
      </ul>
      <p>
        Our legal basis is our <strong>legitimate interests</strong> in responding to
        enquiries and operating our business, and, where applicable, taking steps at your
        request prior to entering into a contract. We do not use your data for automated
        decision-making or profiling, and we do not sell your data.
      </p>

      <h2>3. Sharing your data</h2>
      <p>
        We do not share your personal data with third parties for their own purposes. We use
        carefully selected service providers (data processors) to operate our website and
        communications, including:
      </p>
      <ul>
        <li><strong>Brevo</strong> — transactional email delivery for enquiry notifications;</li>
        <li><strong>Vercel</strong> — website hosting and infrastructure.</li>
      </ul>
      <p>
        These providers process data on our instructions and under appropriate contractual
        safeguards. We may also disclose data where required by law.
      </p>

      <h2>4. International transfers</h2>
      <p>
        Some of our providers may process data outside the United Kingdom. Where this occurs,
        we ensure appropriate safeguards are in place (such as UK adequacy regulations or
        Standard Contractual Clauses) to protect your data.
      </p>

      <h2>5. Data retention</h2>
      <p>
        We keep enquiry data only for as long as necessary to respond to and follow up on your
        enquiry, and to comply with our legal obligations, after which it is securely deleted.
      </p>

      <h2>6. Your rights</h2>
      <p>Under UK data protection law you have the right to:</p>
      <ul>
        <li>access the personal data we hold about you;</li>
        <li>request correction of inaccurate data;</li>
        <li>request erasure of your data;</li>
        <li>restrict or object to our processing;</li>
        <li>request data portability;</li>
        <li>withdraw consent where processing is based on consent.</li>
      </ul>
      <p>
        To exercise any of these rights, contact us at{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a>.
      </p>

      <h2>7. Cookies</h2>
      <p>
        Our website does not use tracking or advertising cookies. Only essential technical
        functionality required to display and operate the site is used. If we introduce
        analytics or other non-essential cookies in future, we will update this policy and
        request your consent where required.
      </p>

      <h2>8. Complaints</h2>
      <p>
        If you have concerns about how we handle your data, please contact us first at{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a>. You also have the right to
        lodge a complaint with the UK Information Commissioner&rsquo;s Office (ICO) at{" "}
        <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
      </p>

      <h2>9. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be posted on this
        page with a revised &ldquo;last updated&rdquo; date.
      </p>
    </LegalShell>
  );
}
