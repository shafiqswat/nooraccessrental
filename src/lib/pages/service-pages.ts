/** @format */

import type { ServicePageConfig } from "./types";
import {
  MANLIFT_DUBAI_DELIVERY_AREAS,
  MANLIFT_DUBAI_FAQS,
  MANLIFT_DUBAI_FLEET,
  MANLIFT_DUBAI_RENTAL_STEPS,
  MANLIFT_DUBAI_SEO,
  MANLIFT_DUBAI_SLUG,
  MANLIFT_DUBAI_WHY_US,
} from "./manlift-dubai";

export const MANLIFT_DUBAI: ServicePageConfig = {
  slug: MANLIFT_DUBAI_SLUG,
  breadcrumbLabel: "Manlift Rental Dubai",
  seo: MANLIFT_DUBAI_SEO,
  keywords: [
    "manlift rental Dubai",
    "manlift hire Dubai",
    "boom lift rental Dubai",
    "aerial platform rental Dubai",
  ],
  badge: "Dubai & UAE Delivery",
  intro: [
    "Noor Access Rental supplies certified manlifts, boom lifts and scissor lifts to Dubai construction, maintenance and industrial sites — with discounted rates, on-time delivery from our Sharjah base, and 24/7 WhatsApp support.",
    "Based in Sharjah, we deliver across Dubai and the wider UAE with certified, well-maintained equipment including Skyjack rough terrain scissor lifts and a full range of boom platforms.",
  ],
  fleet: MANLIFT_DUBAI_FLEET,
  whyUs: MANLIFT_DUBAI_WHY_US,
  deliveryAreas: MANLIFT_DUBAI_DELIVERY_AREAS,
  rentalSteps: MANLIFT_DUBAI_RENTAL_STEPS,
  faqs: MANLIFT_DUBAI_FAQS,
  whatsappMessage:
    "Hello Noor Access Rental, I need manlift rental in Dubai. Please share rates and availability.",
  serviceName: "Manlift Rental Dubai",
  serviceType: "Manlift and aerial work platform rental",
  areaServed: "Dubai",
  relatedLinks: [
    { href: "/boom-lift-rental-dubai", label: "Boom Lift Rental Dubai" },
    { href: "/scissor-lift-rental-dubai", label: "Scissor Lift Rental Dubai" },
    { href: "/guides/boom-lift-rental-cost-dubai", label: "Boom Lift Cost Guide" },
  ],
};

export const BOOM_LIFT_DUBAI: ServicePageConfig = {
  slug: "/boom-lift-rental-dubai",
  breadcrumbLabel: "Boom Lift Rental Dubai",
  seo: {
    title: "Boom Lift Rental Dubai | Telescopic & Articulating | Noor Access",
    description:
      "Boom lift rental in Dubai — telescopic and articulating platforms 5m–40m. Discounted rates, Sharjah delivery, certified fleet. WhatsApp 00971 525156677.",
    h1: "Boom Lift Rental Dubai — Telescopic & Articulating Platforms",
  },
  keywords: [
    "boom lift rental Dubai",
    "telescopic boom lift rental Dubai",
    "articulating boom lift rental Dubai",
    "cherry picker rental Dubai",
    "aerial platform rental Dubai",
  ],
  badge: "5m – 40m Working Height",
  intro: [
    "Boom lift rental in Dubai is essential for construction, façade maintenance, steel erection, MEP installation and signage work at height. Noor Access Rental supplies telescopic and articulating boom lifts from 5 metres to 40 metres — delivered from Sharjah to your Dubai site with discounted rates and on-time service.",
    "Whether your project is in Al Quoz, Jebel Ali, Business Bay or Dubai Marina, our certified fleet helps your team reach height safely. Need a manlift or scissor lift instead? See our related services below.",
  ],
  fleet: [
    {
      title: "Telescopic Boom Lifts",
      range: "12m – 40m",
      description:
        "Straight-line reach for high-rise façade access, industrial maintenance and long horizontal outreach on open Dubai construction sites.",
    },
    {
      title: "Articulating Boom Lifts",
      range: "5m – 30m",
      description:
        "Up-and-over access for congested sites, tight spaces and obstacles — common on Dubai commercial fit-outs and MEP projects.",
    },
    {
      title: "Diesel & Electric Options",
      range: "Outdoor / Indoor",
      description:
        "Diesel 4×4 booms for outdoor work; electric units for indoor malls, hotels and emission-restricted zones.",
    },
  ],
  whyUs: [
    "Discounted boom lift rental rates in Dubai",
    "Telescopic and articulating models 5m–40m",
    "Certified, inspected equipment with test certificates",
    "On-time delivery from Sharjah to any Dubai site",
    "24/7 WhatsApp support for quotes and breakdowns",
    "Flexible daily, weekly and monthly hire",
  ],
  deliveryAreas: [
    "Al Quoz & Al Quoz Industrial",
    "Jebel Ali & JAFZA",
    "Business Bay & Downtown",
    "Dubai Marina & JLT",
    "Dubai Industrial City",
    "Deira & Bur Dubai",
    "Dubai South & Mirdif",
  ],
  rentalSteps: [
    "Tell us your working height, site access and project duration",
    "We recommend telescopic or articulating boom lift",
    "Receive discounted daily / weekly / monthly quote",
    "Certified boom lift delivered to your Dubai site",
    "Collection when the project completes",
  ],
  faqs: [
    {
      question: "How much does boom lift rental cost in Dubai?",
      answer:
        "Cost depends on boom type, working height and rental period. Noor Access Rental offers discounted rates on telescopic and articulating booms. Contact us on WhatsApp for a same-day quote.",
    },
    {
      question: "Telescopic vs articulating boom lift — which do I need?",
      answer:
        "Telescopic booms give maximum horizontal reach in a straight line — ideal for open sites. Articulating (knuckle) booms bend around obstacles — better for tight urban Dubai locations.",
    },
    {
      question: "Do you deliver boom lifts to Jebel Ali and Al Quoz?",
      answer:
        "Yes. We deliver across Dubai including Jebel Ali, Al Quoz, Business Bay and industrial zones from our Sharjah base.",
    },
  ],
  whatsappMessage:
    "Hello Noor Access Rental, I need boom lift rental in Dubai. Please share rates and availability.",
  serviceName: "Boom Lift Rental Dubai",
  serviceType: "Boom lift and cherry picker rental",
  areaServed: "Dubai",
  relatedLinks: [
    { href: "/manlift-rental-dubai", label: "Manlift Rental Dubai" },
    { href: "/scissor-lift-rental-dubai", label: "Scissor Lift Rental Dubai" },
    { href: "/guides/boom-lift-rental-cost-dubai", label: "Boom Lift Rental Cost Guide" },
  ],
};

export const SCISSOR_LIFT_DUBAI: ServicePageConfig = {
  slug: "/scissor-lift-rental-dubai",
  breadcrumbLabel: "Scissor Lift Rental Dubai",
  seo: {
    title: "Scissor Lift Rental Dubai | Electric & RT 5m–18m | Noor Access",
    description:
      "Scissor lift rental in Dubai — electric 5m–12m and rough terrain 17m–18m. Warehouse, indoor and construction access. WhatsApp 00971 525156677.",
    h1: "Scissor Lift Rental Dubai — Electric & Rough Terrain",
  },
  keywords: [
    "scissor lift rental Dubai",
    "electric scissor lift rental Dubai",
    "rough terrain scissor lift UAE",
    "Skyjack rental Dubai",
    "vertical lift rental Dubai",
  ],
  badge: "5m – 18m Working Height",
  intro: [
    "Scissor lift rental in Dubai supports warehouse fit-outs, mall maintenance, factory installation and construction slab work where straight vertical access is required. Noor Access Rental offers electric scissor lifts (5m–12m) for indoor use and rough terrain scissor lifts (17m–18m) for outdoor UAE sites.",
    "Our Skyjack rough terrain units feature 4WD, levelling outriggers and large platform capacity — certified and regularly serviced for Dubai and Sharjah projects.",
  ],
  fleet: [
    {
      title: "Electric Scissor Lifts",
      range: "5m – 12m",
      description:
        "Zero-emission platforms for warehouses, shopping malls, hotels and clean-floor indoor environments across Dubai.",
    },
    {
      title: "Rough Terrain Scissor Lifts",
      range: "17m – 18m",
      description:
        "4WD Skyjack-style units with outriggers for uneven outdoor ground — construction, industrial and infrastructure projects.",
    },
    {
      title: "Compact & Wide Deck Options",
      range: "Various",
      description:
        "Platform sizes matched to your site — narrow aisles, double-width decks for materials and multi-worker access.",
    },
  ],
  whyUs: [
    "Electric and rough terrain scissor lifts in stock",
    "5m–12m indoor + 17m–18m outdoor models",
    "Discounted rental — daily, weekly, monthly",
    "UAE-wide delivery from Sharjah",
    "Certified servicing and test certificates",
    "24/7 WhatsApp for quotes and support",
  ],
  deliveryAreas: [
    "Dubai warehouses & logistics hubs",
    "Al Quoz industrial zone",
    "Jebel Ali free zone sites",
    "Dubai Mall & retail fit-outs",
    "Sharjah & cross-emirate projects",
    "Abu Dhabi (on request)",
  ],
  rentalSteps: [
    "Share indoor or outdoor site details and required height",
    "We match electric or rough terrain scissor lift",
    "Quote for your rental period",
    "Delivery and operator briefing on site",
    "Pickup when work is complete",
  ],
  faqs: [
    {
      question: "Can I use a scissor lift indoors in Dubai?",
      answer:
        "Yes. Our electric scissor lifts are designed for indoor use — quiet, zero emissions and non-marking tyres for malls, warehouses and offices.",
    },
    {
      question: "What height scissor lifts do you rent?",
      answer:
        "Electric scissor lifts from 5m to 12m working height; rough terrain scissor lifts at 17m–18m for outdoor construction.",
    },
    {
      question: "Do you have Skyjack scissor lifts?",
      answer:
        "Yes. Our fleet includes Skyjack rough terrain scissor lifts — low-hour, late model and certified for UAE sites.",
    },
  ],
  whatsappMessage:
    "Hello Noor Access Rental, I need scissor lift rental in Dubai. Please share rates.",
  serviceName: "Scissor Lift Rental Dubai",
  serviceType: "Scissor lift and vertical platform rental",
  areaServed: "Dubai",
  relatedLinks: [
    { href: "/boom-lift-rental-dubai", label: "Boom Lift Rental Dubai" },
    { href: "/manlift-rental-sharjah", label: "Manlift Rental Sharjah" },
    { href: "/guides/manlift-vs-scissor-lift-uae", label: "Manlift vs Scissor Lift Guide" },
  ],
};

export const MANLIFT_SHARJAH: ServicePageConfig = {
  slug: "/manlift-rental-sharjah",
  breadcrumbLabel: "Manlift Rental Sharjah",
  seo: {
    title: "Manlift Rental Sharjah | Boom & Scissor Lift UAE | Noor Access",
    description:
      "Manlift rental Sharjah — local boom lift and scissor lift hire. Discounted rates, fast delivery across Sharjah and UAE. Call 00971 525156677.",
    h1: "Manlift Rental Sharjah — Local Aerial Equipment Hire",
  },
  keywords: [
    "manlift rental Sharjah",
    "boom lift rental Sharjah",
    "scissor lift rental Sharjah",
    "equipment rental Sharjah",
    "aerial platform rental Sharjah",
  ],
  badge: "Based in Sharjah — UAE Wide",
  intro: [
    "Noor Access Rental is headquartered in Sharjah — your local partner for manlift, boom lift and scissor lift rental across the emirate and the wider UAE. Being Sharjah-based means faster mobilisation, lower transport costs and on-time delivery to industrial areas, warehouses and construction sites throughout Sharjah.",
    "We also serve Dubai and Abu Dhabi with the same discounted rates, certified fleet and 24/7 WhatsApp support that define our principles-driven service.",
  ],
  fleet: [
    {
      title: "Boom Lifts",
      range: "5m – 40m",
      description: "Telescopic and articulating boom lifts for Sharjah construction, maintenance and industrial access.",
    },
    {
      title: "Electric Scissor Lifts",
      range: "5m – 12m",
      description: "Indoor and warehouse vertical access for Sharjah logistics and manufacturing facilities.",
    },
    {
      title: "Rough Terrain Scissor",
      range: "17m – 18m",
      description: "4WD platforms for outdoor Sharjah industrial and infrastructure projects.",
    },
  ],
  whyUs: [
    "Sharjah-based — fastest local delivery",
    "Discounted manlift rental rates",
    "On-time completion on every project",
    "Certified aerial equipment fleet",
    "Coverage: Sharjah, Dubai, Abu Dhabi, UAE",
    "CEO-led principles and trust",
  ],
  deliveryAreas: [
    "Sharjah Industrial Area",
    "Al Sajaa & Emirates Industrial City",
    "Hamriyah Free Zone",
    "Sharjah Airport Free Zone",
    "Muwaileh & University City",
    "Cross-emirate to Dubai & Abu Dhabi",
  ],
  rentalSteps: [
    "Contact us from your Sharjah site or project office",
    "Equipment recommendation and quote",
    "Same-day or next-day delivery across Sharjah",
    "Certified machine handover on site",
    "Collection when your rental ends",
  ],
  faqs: [
    {
      question: "Why rent from a Sharjah-based manlift company?",
      answer:
        "Local base means faster delivery, lower transport charges and a team that knows Sharjah industrial zones, free zones and access routes — with the same UAE-wide coverage when you need it.",
    },
    {
      question: "Do you deliver from Sharjah to Dubai?",
      answer:
        "Yes. We deliver daily from Sharjah to Dubai, Abu Dhabi and across the UAE with on-time guarantees.",
    },
  ],
  whatsappMessage:
    "Hello Noor Access Rental, I need manlift rental in Sharjah. Please share rates.",
  serviceName: "Manlift Rental Sharjah",
  serviceType: "Manlift and aerial equipment rental",
  areaServed: "Sharjah",
  relatedLinks: [
    { href: "/manlift-rental-dubai", label: "Manlift Rental Dubai" },
    { href: "/boom-lift-rental-dubai", label: "Boom Lift Rental Dubai" },
    { href: "/", label: "All Equipment & Fleet" },
  ],
};
