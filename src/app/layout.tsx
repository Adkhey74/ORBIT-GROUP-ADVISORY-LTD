import type { Metadata } from "next";
import { Archivo, Inter, Orbitron } from "next/font/google";
import { site } from "@/content/site";
import { Providers } from "@/components/Providers";
import "./globals.css";

/* Heavy grotesque for display headings (echoes the deck's bold caps) */
const display = Archivo({
  variable: "--ff-display",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

/* Readable sans for body + tracked caps */
const sans = Inter({
  variable: "--ff-sans",
  subsets: ["latin"],
  display: "swap",
});

/* Geometric, rounded — closest match to the ORBIT wordmark (only 900 is used) */
const wordmark = Orbitron({
  variable: "--ff-wordmark",
  subsets: ["latin"],
  weight: ["900"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://orbitgroup.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.company.shortName} — Executive Security & Mobility`,
    template: `%s — ${site.company.shortName}`,
  },
  description: site.meta.description,
  keywords: [
    "Executive Security",
    "Executive Protection",
    "Executive Mobility",
    "Security Consultancy",
    "Security Coordination",
    "Executive Chauffeur",
    "Security Driver",
    "Family Office Security",
    "UHNWI Security",
    "Residential Security",
    "Estate Security",
    "Risk Assessment",
    "Risk Management",
    "Travel Security",
    "Business Aviation Security",
    "Private Aviation Security",
    "Executive Aviation Support",
    "Airport Meet & Greet",
    "Superyacht Security",
    "Yacht Security Services",
    "VIP Transport",
    "Secure Transportation",
    "Corporate Security",
    "Executive Travel Support",
    "London",
    "United Kingdom",
    "Europe",
    "Monaco",
    "Geneva",
    "Paris",
    "French Riviera",
    "Saint-Tropez",
    "Ibiza",
  ],
  authors: [{ name: site.company.legalName }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    siteName: site.company.shortName,
    title: `${site.company.shortName} — Executive Security & Mobility`,
    description: site.meta.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.company.shortName} — Executive Security & Mobility`,
    description: site.meta.description,
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.company.legalName,
    alternateName: site.company.shortName,
    description: site.meta.description,
    url: siteUrl,
    email: site.company.email,
    telephone: site.company.phone,
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
    },
    identifier: {
      "@type": "PropertyValue",
      name: "Company Number",
      value: site.company.registrationNumber,
    },
    slogan: "Executive Security & Mobility",
    knowsAbout: [
      "Executive Security",
      "Executive Protection",
      "Executive Mobility",
      "Executive Chauffeur",
      "Security Driver",
      "Residential Security",
      "Estate Security",
      "Risk Assessment",
      "Risk Management",
      "Travel Security",
      "Business Aviation Security",
      "Private Aviation Security",
      "Executive Aviation Support",
      "Airport Meet & Greet",
      "Superyacht Security",
      "Yacht Security Services",
      "VIP Transport",
      "Secure Transportation",
      "Corporate Security",
      "Family Office Security",
      "UHNWI Security",
    ],
    areaServed: [...site.footer.offices, "United Kingdom", "Europe"],
  };

  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${wordmark.variable} antialiased`}
    >
      <body className="min-h-dvh bg-ink text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
