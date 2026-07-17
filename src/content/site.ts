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
      "Orbit Group is a trusted European security and mobility partner — executive protection, executive chauffeur, residential and superyacht security for family offices, principals and corporate executives. Discreet, founder-led, operationally precise.",
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
    titleLead: "Trusted European Security",
    titleEmphasis: "& Mobility Partner.",
    subtitle:
      "Orbit Group is a trusted European security and mobility partner providing bespoke solutions for family offices, principals and corporate executives — delivered with discretion and operational precision.",
    ctaPrimary: "Submit a Confidential Enquiry",
    ctaSecondary: "Our Services",
    image: "/images/5.png",
    // Scrolling ticker coordinates
    ticker: [
      "LON 51.5074° N / 0.1278° W",
      "PAR 48.8566° N / 2.3522° E",
      "GVA 46.2044° N / 6.1432° E",
      "NICE 43.7102° N / 7.2620° E",
      "MCO 43.7384° N / 7.4246° E",
    ],
  },

  about: {
    label: "About Orbit Group",
    titleLead: "Independent",
    titleEmphasis: "by design.",
    paragraphs: [
      "Orbit Group is an independent security consultancy supporting family offices, private offices and executive leadership across the UK and Europe.",
      "We provide discreet security advisory, executive mobility and operational coordination through a deliberately selective model — from secure ground transportation and executive drivers to residential security and trusted local partners.",
      "Rather than operating as a traditional security company, we act as a trusted extension of the private office — coordinating people, logistics and security with consistency, discretion and direct senior oversight.",
      "Our approach is built on operational discipline, long-term relationships and the belief that the best security is measured not by its visibility, but by the confidence it provides.",
    ],
    stats: [
      { value: "15+", label: "Years of Operational Experience" },
      { value: "100+", label: "Protection Operations" },
      { value: "6", label: "European Operational Bases" },
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
          "Discreet, operationally trained close protection built around the specific threat profile — not a generic template.",
        capabilities: [
          "Close protection teams",
          "Advance planning & journey management",
          "Venue & route assessments",
          "Security coordination",
          "Protective intelligence",
        ],
        images: ["/images/4.png", "/images/11.png"],
      },
      {
        id: "executive-chauffeur",
        num: "02",
        title: "Executive Chauffeur",
        tagline: "More than transportation.",
        intro:
          "Vetted, protectively-trained chauffeurs combining executive-level service with close protection awareness. Every journey is a security operation conducted without friction.",
        capabilities: [
          "Protective & defensive driving",
          "Airport & FBO protocols",
          "Multi-vehicle coordination",
          "European driver network",
          "High-risk mobility on request",
        ],
        note: "Fleet — Mercedes V / S / G-Class · Rolls-Royce Ghost · Range Rover Autobiography · BMW 7 Series",
        images: ["/images/1.png", "/images/8.png"],
      },
      {
        id: "residential-security",
        num: "03",
        title: "Residential Security",
        tagline: "Securing homes, estates and private residences.",
        intro:
          "End-to-end assessment and implementation for private residences, estates and seasonal properties — protecting without disrupting the private life within.",
        capabilities: [
          "Residential security reviews",
          "Estate & access control coordination",
          "Staff & tenant screening",
          "Seasonal & vacation security",
          "Drone surveillance & counter-drone",
        ],
        images: ["/images/2.png", "/images/12.png"],
      },
      {
        id: "superyacht-security",
        num: "04",
        title: "Superyacht & Aviation",
        tagline: "Supporting owners, captains and management companies.",
        intro:
          "Specialist shore-side and on-board security support for private vessels, plus discreet private-aviation coordination across the Mediterranean and beyond.",
        capabilities: [
          "On-board & shore-side protection",
          "Port & marina coordination",
          "Private aviation coordination",
          "Crew vetting",
          "Anti-paparazzi & counter-surveillance",
        ],
        images: ["/images/7.png", "/images/8.png", "/images/10.png"],
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

  founder: {
    label: "Founder",
    titleLead: "Founder-led,",
    titleEmphasis: "by principle.",
    profile: {
      name: "Franck Milla",
      role: "Managing Director",
      bio: "Orbit Group was founded by Franck Milla following a career spanning French Special Forces, French Law Enforcement, Diplomatic Protection and Executive Protection for family offices and ultra-high-net-worth principals across Europe.",
      image: "/images/6.png",
    },
    credentials: [
      "French Special Forces",
      "Law Enforcement",
      "Diplomatic Protection",
      "Executive Protection",
      "Paris 2024 Olympic Games",
      "Superyacht Support (96M)",
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
    image: "/images/3.png",
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
    titleLead: "Submit a",
    titleEmphasis: "confidential enquiry.",
    intro:
      "All enquiries are treated in strict confidence. A member of the team will respond within one business day.",
    enquiryTypes: [
      "Executive Protection",
      "Executive Chauffeur",
      "Residential Security",
      "Superyacht Security",
      "Other",
    ],
  },

  footer: {
    tagline:
      "Strategic security advisory, executive mobility and operational coordination for private clients across Europe.",
    offices: ["London", "Paris", "Geneva", "French Riviera", "Monaco", "Ibiza"],
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
