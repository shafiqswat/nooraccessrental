/** @format */

import { getCanonicalUrl, getSiteUrl } from "./site-url";

const siteUrl = getSiteUrl();
const canonicalUrl = getCanonicalUrl();

export const SITE_CONFIG = {
  name: "Noor Access Rental",
  title:
    "Manlift Rental UAE | Boom & Scissor Lift Dubai | Noor Access",
  description:
    "Manlift, boom lift and scissor lift rental in Dubai, Sharjah, Abu Dhabi and across UAE. Aerial equipment and access platform rental with 24/7 WhatsApp support. Call 00971 525156677.",
  url: siteUrl,
  canonicalUrl,
  phone: "+971525156677",
  phoneDisplay: "00971 525156677",
  whatsapp: "971525156677",
  email: "info@nooraccessrental.com",
  ceo: "Noorulhabib",
  social: {
    facebook:
      "https://www.facebook.com/people/Noor-Access-Qatar/100064840985088/",
    whatsapp: "https://wa.me/971525156677",
  },
  location: {
    city: "Sharjah",
    region: "UAE",
    country: "United Arab Emirates",
    address: "Sharjah, United Arab Emirates",
  },
  keywords: [
    "manlift rental UAE",
    "manlift rental Dubai",
    "boom lift rental Dubai",
    "boom lift rental UAE",
    "scissor lift rental Dubai",
    "scissor lift rental UAE",
    "aerial equipment rental UAE",
    "access equipment rental UAE",
    "aerial platform rental Sharjah",
    "equipment rental UAE",
    "manlift hire Abu Dhabi",
    "telescopic boom lift rental",
    "Noor Access Rental",
    "construction equipment rental UAE",
    "industrial equipment rental",
    "Skyjack rental UAE",
    "access platform rental Gulf",
    "electric scissor lift rental Dubai",
    "equipment recovery service UAE",
  ],
};

export const CEO_MESSAGE =
  "Noor Access Rental has always provided its customers with all types of machinery at discounted rent. Noor Access Rental has its own niche — completing every job on time and with principles.";

export const SERVICES = [
  {
    id: "boom-lift",
    title: "Boom Lifts — Any Type",
    description:
      "Telescopic and articulating boom lifts from 5 metres to 40 metres for construction, maintenance, and industrial access.",
    icon: "boom",
    range: "5m – 40m",
  },
  {
    id: "rough-terrain-scissor",
    title: "Rough Terrain Scissor Lifts",
    description:
      "17–18m 4WD scissor lifts with levelling outriggers, large platform capacity, and certified servicing.",
    icon: "scissor",
    range: "17m – 18m",
  },
  {
    id: "electric-scissor",
    title: "Electric Scissor Lifts",
    description:
      "Electric scissor lifts ideal for warehouse, indoor installations, and clean-floor vertical access projects.",
    icon: "electric",
    range: "5m – 12m",
  },
  {
    id: "recovery-service",
    title: "Recovery & Transport",
    description:
      "Professional equipment recovery and transport service from 3 tons to 20 tons across UAE.",
    icon: "recovery",
    range: "3 – 20 tons",
  },
];

/** Fleet gallery — gallery1 also used in hero */
export const FLEET = [
  {
    id: "boom-lift",
    src: "/images/gallery1.jpg",
    alt: "Boom lift rental UAE - telescopic and articulating 5 metres to 40 metres",
    title: "Boom Lift — Any Type",
    type: "Telescopic & Articulating",
    range: "5m – 40m",
    features: ["Telescopic", "Articulating", "5 metres to 40 metres"],
    featured: false,
  },
  {
    id: "recovery-service",
    src: "/images/gallery2.jpg",
    alt: "Equipment recovery and transport service 3 to 20 tons UAE",
    title: "Recovery Service",
    type: "Transport & Recovery",
    range: "3 – 20 tons",
    features: [
      "3 tons to 20 tons",
      "Heavy equipment transport",
      "UAE-wide delivery",
    ],
    featured: false,
  },
  {
    id: "electric-scissor",
    src: "/images/gallery3.jpg",
    alt: "Scissor lift electric rental 5m to 12m UAE - Noor Access Rental",
    title: "Scissor Lift Electric",
    type: "Electric Vertical Lift",
    range: "5m – 12m",
    features: [
      "Electric powered",
      "5M to 12M working height",
      "Indoor & warehouse use",
    ],
    featured: false,
  },
  {
    id: "rough-terrain-scissor",
    src: "/images/gallery4.jpg",
    alt: "17-18m Rough Terrain Scissor Lift rental UAE - Skyjack SJ9250 RT",
    title: "17–18m Rough Terrain Scissor Lift",
    type: "4WD Scissor Lift",
    range: "17m – 18m",
    features: [
      "4WD — rough terrain capable",
      "Levelling outriggers available",
      "Large platform, high capacity",
      "Low hour, late model",
      "Certified & regularly serviced",
      "UAE-wide delivery",
    ],
    featured: false,
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Discounted Rental Rates",
    description:
      "Competitive pricing on all machinery without compromising quality or safety.",
  },
  {
    title: "On-Time Delivery",
    description:
      "We complete every job on schedule — reliability is our core principle.",
  },
  {
    title: "Certified Equipment",
    description:
      "Well-maintained, inspected machines ready for immediate deployment.",
  },
  {
    title: "24/7 Support",
    description:
      "Round-the-clock assistance via phone and WhatsApp for urgent rental needs.",
  },
  {
    title: "UAE Wide Coverage",
    description:
      "Serving Dubai, Sharjah, Abu Dhabi, and across the United Arab Emirates.",
  },
  {
    title: "Expert Guidance",
    description:
      "Our team helps you select the right equipment for your specific project.",
  },
];
