import type { Metadata } from "next";
import { site } from "@/content/site";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Legal Notice",
  description: `Legal and company information for ${site.company.legalName}.`,
  alternates: { canonical: "/legal" },
};

const { company } = site;

export default function LegalPage() {
  return (
    <LegalShell title="Legal Notice" updated="22 July 2026">
      <h2>Company information</h2>
      <ul>
        <li><strong>Company name:</strong> {company.legalName}</li>
        <li><strong>Registered in:</strong> {company.registeredIn}</li>
        <li><strong>Company number:</strong> {company.registrationNumber}</li>
        <li><strong>Registered office:</strong> {company.registeredOffice}</li>
        {company.vatNumber ? (
          <li><strong>VAT number:</strong> {company.vatNumber}</li>
        ) : null}
        <li>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </li>
        <li>
          <strong>Telephone:</strong>{" "}
          <a href={`tel:${company.phone.replace(/\s+/g, "")}`}>{company.phone}</a>
        </li>
      </ul>

      <h2>Website terms</h2>
      <p>
        This website is provided by {company.legalName} for general information about our
        services. While we take care to keep the information accurate and up to date, we make
        no warranties or representations, express or implied, as to its completeness,
        accuracy or reliability. Nothing on this website constitutes a binding offer, security
        advice or a professional recommendation; any engagement is subject to a separate
        written agreement.
      </p>

      <h2>Intellectual property</h2>
      <p>
        All content on this website — including text, graphics, logos, layout and design — is
        the property of {company.legalName} or its licensors and is protected by intellectual
        property laws. You may not reproduce, distribute or exploit any part of it without our
        prior written permission.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {company.legalName} shall not be liable for any
        loss or damage arising from the use of, or reliance on, this website or its content.
        Nothing in this notice excludes or limits liability that cannot lawfully be excluded or
        limited.
      </p>

      <h2>External links</h2>
      <p>
        This website may contain links to third-party websites. We are not responsible for the
        content or practices of any linked site.
      </p>

      <h2>Governing law</h2>
      <p>
        This Legal Notice and any dispute arising from it are governed by the laws of England
        and Wales, and subject to the exclusive jurisdiction of the courts of England and
        Wales.
      </p>

      <h2>Contact</h2>
      <p>
        For any legal enquiry, please contact us at{" "}
        <a href={`mailto:${company.email}`}>{company.email}</a>.
      </p>
    </LegalShell>
  );
}
