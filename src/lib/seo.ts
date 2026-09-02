import { SITE_CONFIG } from "./constants";

export function generateLocalBusinessJsonLd() {
  const base = SITE_CONFIG.canonicalUrl;
  const assets = SITE_CONFIG.url;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${base}/#localbusiness`,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: base,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    image: `${assets}/images/logo.jpeg`,
    logo: `${assets}/images/logo.jpeg`,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE_CONFIG.location.city,
      addressRegion: SITE_CONFIG.location.region,
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.3463,
      longitude: 55.4209,
    },
    areaServed: [
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "City", name: "Dubai" },
      { "@type": "City", name: "Sharjah" },
      { "@type": "City", name: "Abu Dhabi" },
    ],
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "06:00",
        closes: "22:00",
      },
    ],
    sameAs: [SITE_CONFIG.social.facebook, SITE_CONFIG.social.whatsapp],
    founder: {
      "@type": "Person",
      name: SITE_CONFIG.ceo,
      jobTitle: "CEO",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "7",
      bestRating: "5",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Equipment Rental Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Manlift Rental UAE",
            description:
              "Manlift and telescopic boom lift rental in Dubai, Sharjah and Abu Dhabi",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Boom Lift Rental Dubai",
            description: "Boom lift and aerial platform rental across UAE",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Scissor Lift Rental UAE",
            description: "Electric and rough terrain scissor lift rental 5m to 18m",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Equipment Recovery & Transport",
            description: "Heavy equipment recovery and transport 3 to 20 tons UAE",
          },
        },
      ],
    },
  };
}

export function generateWebSiteJsonLd() {
  const base = SITE_CONFIG.canonicalUrl;

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${base}/#website`,
    name: SITE_CONFIG.name,
    url: base,
    description: SITE_CONFIG.description,
    publisher: { "@id": `${base}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${base}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateOrganizationJsonLd() {
  const base = SITE_CONFIG.canonicalUrl;
  const assets = SITE_CONFIG.url;

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${base}/#organization`,
    name: SITE_CONFIG.name,
    url: base,
    logo: `${assets}/images/logo.jpeg`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE_CONFIG.phone,
      contactType: "customer service",
      areaServed: "AE",
      availableLanguage: ["English", "Arabic"],
    },
    sameAs: [SITE_CONFIG.social.facebook, SITE_CONFIG.social.whatsapp],
  };
}

export function generateFAQJsonLd(faqs?: FaqItem[], pageId = "") {
  const base = SITE_CONFIG.canonicalUrl;
  const idSuffix = pageId ? `/${pageId}` : "";

  const items = faqs ?? [
    {
      question: "Where can I rent a manlift in UAE?",
      answer:
        "Noor Access Rental provides manlift and boom lift rental across Dubai, Sharjah, Abu Dhabi and the UAE. Contact us on WhatsApp at 00971 525156677 for rates and availability.",
    },
    {
      question: "Do you offer boom lift rental in Dubai?",
      answer:
        "Yes. We rent telescopic and articulating boom lifts from 5 metres to 40 metres for construction and industrial projects in Dubai and across UAE.",
    },
    {
      question: "Can I rent a scissor lift in UAE?",
      answer:
        "Yes. We offer electric scissor lifts (5m–12m) and rough terrain scissor lifts (17m–18m) for warehouse, indoor and outdoor access work.",
    },
    {
      question: "What areas do you cover for aerial equipment rental?",
      answer:
        "We serve Sharjah, Dubai, Abu Dhabi and UAE-wide with discounted rental rates, certified equipment and 24/7 support.",
    },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${base}${idSuffix}#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export type FaqItem = { question: string; answer: string };

export type BreadcrumbItem = { name: string; path: string };

export function generateBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  const base = SITE_CONFIG.canonicalUrl;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${base}${item.path}`,
    })),
  };
}

export type ServicePageSchemaInput = {
  slug: string;
  name: string;
  description: string;
  serviceType?: string;
  areaServed?: string;
};

export function generateServiceJsonLd(input: ServicePageSchemaInput) {
  const base = SITE_CONFIG.canonicalUrl;
  const pageUrl = `${base}${input.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: input.name,
    description: input.description,
    url: pageUrl,
    provider: { "@id": `${base}/#localbusiness` },
    areaServed: {
      "@type": "City",
      name: input.areaServed ?? "Dubai",
      containedInPlace: { "@type": "Country", name: "United Arab Emirates" },
    },
    serviceType: input.serviceType ?? "Aerial work platform rental",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "AED",
      description: "Discounted daily, weekly and monthly rental — contact for quote",
    },
  };
}

export function generateServicePageJsonLd(input: {
  slug: string;
  name: string;
  description: string;
  serviceType?: string;
  areaServed?: string;
  faqs: FaqItem[];
}) {
  return [
    generateServiceJsonLd(input),
    generateBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: input.name, path: input.slug },
    ]),
    generateFAQJsonLd(input.faqs, input.slug.replace(/^\//, "")),
  ];
}
