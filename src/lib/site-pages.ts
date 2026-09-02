/** @format */

import { BOOM_LIFT_DUBAI, MANLIFT_SHARJAH, SCISSOR_LIFT_DUBAI } from "./pages/service-pages";
import { BOOM_LIFT_COST_GUIDE, MANLIFT_VS_SCISSOR_GUIDE } from "./pages/guide-pages";

export type SitePageEntry = {
  path: string;
  label: string;
  priority: number;
  changeFrequency: "daily" | "weekly" | "monthly";
  type: "home" | "service" | "guide";
};

/** All indexable pages — used by sitemap, topics hub, internal links */
export const SITE_PAGES: SitePageEntry[] = [
  { path: "/", label: "Home", priority: 1, changeFrequency: "daily", type: "home" },
  {
    path: "/manlift-rental-dubai",
    label: "Manlift Rental Dubai",
    priority: 0.9,
    changeFrequency: "weekly",
    type: "service",
  },
  {
    path: BOOM_LIFT_DUBAI.slug,
    label: BOOM_LIFT_DUBAI.breadcrumbLabel,
    priority: 0.9,
    changeFrequency: "weekly",
    type: "service",
  },
  {
    path: SCISSOR_LIFT_DUBAI.slug,
    label: SCISSOR_LIFT_DUBAI.breadcrumbLabel,
    priority: 0.9,
    changeFrequency: "weekly",
    type: "service",
  },
  {
    path: MANLIFT_SHARJAH.slug,
    label: MANLIFT_SHARJAH.breadcrumbLabel,
    priority: 0.9,
    changeFrequency: "weekly",
    type: "service",
  },
  {
    path: BOOM_LIFT_COST_GUIDE.slug,
    label: BOOM_LIFT_COST_GUIDE.breadcrumbLabel,
    priority: 0.7,
    changeFrequency: "monthly",
    type: "guide",
  },
  {
    path: MANLIFT_VS_SCISSOR_GUIDE.slug,
    label: MANLIFT_VS_SCISSOR_GUIDE.breadcrumbLabel,
    priority: 0.7,
    changeFrequency: "monthly",
    type: "guide",
  },
];

export const SERVICE_PAGES = SITE_PAGES.filter((p) => p.type === "service");
export const GUIDE_PAGES = SITE_PAGES.filter((p) => p.type === "guide");

/** Topic clusters for topical authority */
export const TOPIC_CLUSTERS = [
  {
    name: "Manlift & Boom Lift Rental",
    description: "Core rental services in Dubai, Sharjah and UAE",
    pages: SERVICE_PAGES.filter((p) => p.path !== "/"),
  },
  {
    name: "Guides & Equipment Advice",
    description: "Help customers choose the right aerial platform",
    pages: GUIDE_PAGES,
  },
];
