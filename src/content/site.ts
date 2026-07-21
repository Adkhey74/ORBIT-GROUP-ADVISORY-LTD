/*
 * Single source of truth for all site copy and data.
 * Layout/disposition follows the client's reference artifact (one-page),
 * rendered in the Orbit violet/black brand style.
 * Edit here — components read from this object, no JSX changes needed.
 */

export type Service = {
  id: string;
  num: string;
  title: string;
  tagline: string;
  intro: string;
  capabilities: string[];
  note?: string;
  images: string[];
};

export const site = {
  meta: {
    description:
      "Orbit Group is a European executive security and mobility consultancy — executive protection, secure transportation and executive chauffeurs, residential and estate security, superyacht and private aviation security, risk management and travel security for family offices, UHNWIs and corporate executives across London, Paris, Geneva, Monaco, the French Riviera, Saint-Tropez and Ibiza.",
  },

  company: {
    shortName: "Orbit Group",
    legalName: "Orbit Group Advisory Ltd",
    registrationNumber: "17293435",
    registeredIn: "England & Wales",
    email: "orbitgroupsecurity@proton.me",
    website: "orbitgroupsecurity.com",
    phone: "+33 6 37 77 61 32",
    principalOffice: "95 Wilton Road, London",
    tagline:
      "Strategic security advisory, executive mobility and operational coordination for private clients across Europe.",
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Coverage", href: "#coverage" },
    { label: "Network", href: "#network" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    eyebrow: "Executive Protection & Mobility",
    titleLead: "Trusted Security",
    titleEmphasis: "& Mobility Partner.",
    subtitle:
      "Orbit Group is a trusted security and mobility partner providing bespoke solutions for family offices, principals and corporate executives — delivered with discretion and operational precision.",
    ctaPrimary: "Submit a Confidential Enquiry",
    ctaSecondary: "Our Services",
    image: "/images/heroimg.webp",
    video: "/video/videohero4k.mp4",
    // Scrolling ticker coordinates
    ticker: [
      "LON 51.5074° N / 0.1278° W",
      "PAR 48.8566° N / 2.3522° E",
      "GVA 46.2044° N / 6.1432° E",
      "NICE 43.7102° N / 7.2620° E",
      "STR 43.2677° N / 6.6407° E",
      "MCO 43.7384° N / 7.4246° E",
    ],
  },

  about: {
    label: "About Orbit Group",
    titleLead: "Independent",
    titleEmphasis: "by design.",
    paragraphs: [
      "Orbit Group is an independent private security consultancy — close protection, executive protection and secure mobility — supporting family offices, private offices, corporate security teams and executive leadership across the UK and Europe.",
      "We provide discreet security advisory, executive mobility and operational coordination through a deliberately selective model — from secure ground transportation and executive drivers to residential security and trusted local partners.",
      "Rather than operating as a traditional security company, we act as a trusted extension of the private office — coordinating people, logistics and security with consistency, discretion and direct senior oversight.",
      "Our approach is built on operational discipline, long-term relationships and the belief that the best security is measured not by its visibility, but by the confidence it provides.",
    ],
    stats: [
      { value: "15+", label: "Years of Operational Experience" },
      { value: "100+", label: "Protection Operations" },
      { value: "7", label: "European Operational Bases" },
      { value: "24/7", label: "Operational Availability" },
    ],
  },

  services: {
    label: "Services",
    titleLead: "Four disciplines.",
    titleEmphasis: "One standard.",
    items: [
      {
        id: "executive-protection",
        num: "01",
        title: "Executive Protection",
        tagline: "Protecting people without disrupting their lifestyle.",
        intro:
          "Discreet, operationally trained close protection in Paris, London and across Europe — built around the specific threat profile, not a generic template.",
        capabilities: [
          "Close protection teams",
          "Risk assessment & risk management",
          "Advance planning & journey management",
          "Travel security & venue assessments",
          "Security coordination",
          "Protective intelligence",
        ],
        images: ["/images/4.webp", "/images/11.webp"],
      },
      {
        id: "executive-chauffeur",
        num: "02",
        title: "Executive Chauffeur",
        tagline: "More than transportation — secure, VIP-grade mobility.",
        intro:
          "Vetted, protectively-trained security drivers and executive chauffeurs in London and across Europe, combining executive-level service with close protection awareness. Every journey is a secure transportation operation conducted without friction.",
        capabilities: [
          "VIP secure transportation",
          "Protective & defensive driving",
          "Airport meet & greet & FBO protocols",
          "Executive travel support",
          "Multi-vehicle coordination",
          "European driver network",
        ],
        note: "Fleet — Mercedes V / S / G-Class · Rolls-Royce Ghost · Range Rover Autobiography · BMW 7 Series",
        images: ["/images/1.webp", "/images/8.webp"],
      },
      {
        id: "residential-security",
        num: "03",
        title: "Residential Security",
        tagline: "Securing homes, estates and private residences.",
        intro:
          "End-to-end residential security in London and across Europe — assessment and implementation for private residences, estates and seasonal properties, protecting without disrupting the private life within.",
        capabilities: [
          "Residential security reviews",
          "Estate & access control coordination",
          "Staff & tenant screening",
          "Seasonal & vacation security",
          "Drone surveillance & counter-drone",
        ],
        images: ["/images/2.webp", "/images/12.webp"],
      },
      {
        id: "superyacht-security",
        num: "04",
        title: "Superyacht & Aviation",
        tagline: "Yacht security services and executive aviation support.",
        intro:
          "Specialist superyacht security — shore-side and on-board support for private vessels — plus business and private aviation security and executive aviation support across the Mediterranean and beyond.",
        capabilities: [
          "On-board & shore-side yacht security",
          "Port & marina coordination",
          "Business & private aviation security",
          "Executive aviation support",
          "Crew vetting",
          "Anti-paparazzi & counter-surveillance",
        ],
        // 7 = jet + van, 9 = security team / yacht.
        images: ["/images/7.webp", "/images/9.webp"],
      },
    ] as Service[],
  },

  industries: [
    "Family Offices",
    "UHNW Principals",
    "Private Equity",
    "Yachting",
    "Private Aviation",
    "Real Estate",
    "Art & Collectibles",
    "Corporate Executives",
  ],

  whyOrbit: {
    label: "Why Orbit",
    titleLead: "What sets us",
    titleEmphasis: "apart.",
    intro:
      "Orbit Group acts as a trusted operational partner, coordinating the people, intelligence and protective resources required to keep principals, families and private environments secure, discreet and seamlessly managed.",
    cards: [
      {
        num: "01",
        title: "Trusted Network",
        body: "A vetted network of operators, analysts and local providers built over a decade of private client work. Every resource deployed is known, tested and accountable.",
      },
      {
        num: "02",
        title: "Discretion First",
        body: "Security that is felt, not seen. Every engagement is structured to blend seamlessly into the principal's environment — invisible to the outside world, by design.",
      },
      {
        num: "03",
        title: "Cross-border Coordination",
        body: "Seamless operational continuity across jurisdictions — London, Geneva, the Riviera or internationally. Coverage follows without friction.",
      },
      {
        num: "04",
        title: "One Point of Contact",
        body: "Principals and private offices deal directly with the person executing the work. One line, full accountability — the consistency of a founder-led practice.",
      },
    ],
  },

  experience: {
    label: "Selected Experience",
    titleLead: "Experience built in",
    titleEmphasis: "demanding environments.",
    intro:
      "Orbit Group's standards are shaped by more than 15 years of experience across French Special Forces, law enforcement, diplomatic protection and private security. This background includes supporting family offices and private principals across Europe through executive protection, secure mobility, international travel, major events, private residences, superyachts and aviation environments.",
    // NOTE: images are interim stand-ins reusing existing photos — to be replaced
    // with the client's dedicated "sober" images when supplied.
    blocks: [
      { title: "Diplomatic Protection", image: "/images/4.webp" },
      { title: "Private Clients — Top 50 Forbes", image: "/images/1.webp" },
      { title: "International Operations", image: "/images/11.webp" },
      { title: "Superyacht & Aviation", image: "/images/10.webp" },
    ],
  },

  coverage: {
    label: "Coverage",
    titleLead: "Where we",
    titleEmphasis: "operate.",
    intro:
      "Local capability with European reach — a permanent operational footprint in the jurisdictions our clients move through most.",
    locations: [
      "London — United Kingdom",
      "Paris — France",
      "Geneva — Switzerland",
      "Côte d'Azur — French Riviera",
      "Saint-Tropez — French Riviera",
      "Monaco",
      "Ibiza — Balearic Islands",
    ],
    note: "Worldwide deployment on request",
  },

  network: {
    label: "Join the Network",
    titleLead: "Join our network",
    titleEmphasis: "of operators.",
    intro:
      "Orbit Group operates through a deliberately small network of vetted close protection officers, security drivers, maritime specialists and local partners — deployed on UHNW mandates across Europe. If you operate at the level we require, we want to hear from you.",
    image: "/images/3.webp",
    profiles: [
      "Close Protection Officers",
      "Security Drivers & Chauffeurs",
      "Maritime Security Specialists",
      "Local Partners & Fixers",
    ],
    points: [
      "Founder-led engagement, direct access to decision-makers",
      "High-value mandates, discreet environments",
      "Fair compensation, no agency deduction",
      "Applications handled under strict NDA",
    ],
    cta: "Apply to join",
    note: "All applications are reviewed personally and handled in strict confidence under NDA.",
  },

  contact: {
    label: "Contact",
    titleLead: "Discuss your",
    titleEmphasis: "requirements.",
    intro:
      "Every enquiry is handled personally and in strict confidence.",
    responseTime: "Response within 24 hours",
    capabilityBrief: {
      label: "Download Capability Brief (PDF)",
      href: "/orbit-capability-brief.pdf",
    },
    services: [
      "Executive Protection",
      "Executive Chauffeur",
      "Residential Security",
      "Superyacht & Aviation Security",
      "Family Office Security",
      "Other",
    ],
  },

  footer: {
    tagline:
      "Strategic security advisory, executive mobility and operational coordination for private clients across Europe.",
    offices: ["London", "Paris", "Geneva", "French Riviera", "Saint-Tropez", "Monaco", "Ibiza"],
    divisions: [
      "Orbit Intelligence",
      "Orbit Advisory",
      "Orbit Mobility",
      "Orbit Operations",
    ],
    note: "Confidential. By appointment only.",
  },
} as const;

export type Site = typeof site;
