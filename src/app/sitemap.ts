import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";
import { SITE_PAGES } from "@/lib/site-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();

  return SITE_PAGES.map((page) => ({
    url: `${baseUrl}${page.path === "/" ? "" : page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
