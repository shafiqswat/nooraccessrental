/** @format */

import type { FaqItem } from "@/lib/seo";

export type ServicePageConfig = {
  slug: string;
  breadcrumbLabel: string;
  seo: { title: string; description: string; h1: string };
  keywords: string[];
  badge: string;
  intro: string[];
  fleet: { title: string; range: string; description: string }[];
  whyUs: string[];
  deliveryAreas: string[];
  rentalSteps: string[];
  faqs: FaqItem[];
  whatsappMessage: string;
  serviceName: string;
  serviceType: string;
  areaServed: string;
  relatedLinks: { href: string; label: string }[];
};

export type GuidePageConfig = {
  slug: string;
  breadcrumbLabel: string;
  seo: { title: string; description: string; h1: string };
  keywords: string[];
  sections: { heading: string; paragraphs: string[] }[];
  faqs: FaqItem[];
  relatedLinks: { href: string; label: string }[];
};

export const HOMEPAGE_FAQS: FaqItem[] = [
  {
    question: "How much does manlift rental cost in UAE?",
    answer:
      "Rental rates depend on lift type, working height and duration (daily, weekly or monthly). Noor Access Rental offers discounted rates on boom lifts, scissor lifts and manlifts across Dubai, Sharjah and Abu Dhabi. WhatsApp 00971 525156677 for a fast quote.",
  },
  {
    question: "Do you deliver aerial equipment to Dubai from Sharjah?",
    answer:
      "Yes. We are based in Sharjah and deliver certified boom lifts, scissor lifts and manlifts to Dubai sites including Al Quoz, Jebel Ali, Business Bay and Dubai Industrial City — on time, with principles.",
  },
  {
    question: "What is the difference between a boom lift and a scissor lift?",
    answer:
      "Boom lifts use a hydraulic arm for horizontal and vertical reach — ideal for façade, MEP and outdoor construction. Scissor lifts provide straight vertical lift — best for warehouses, indoor fit-outs and flat slab work.",
  },
  {
    question: "Do I need a license to operate a manlift in UAE?",
    answer:
      "Many UAE construction sites require MEWP or IPAF-certified operators. We supply certified, regularly serviced equipment with valid test certificates and can advise on operator requirements for your project.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "Dubai, Sharjah, Abu Dhabi and UAE-wide. 24/7 WhatsApp and phone support for urgent rental enquiries.",
  },
  {
    question: "What is the minimum rental period?",
    answer:
      "One day minimum. Flexible daily, weekly and monthly packages available on all equipment types.",
  },
];
