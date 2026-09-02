const CANONICAL_URL = "https://nooraccessrental.com";

/**
 * Resolves the public site URL for metadata, sitemap, and JSON-LD.
 * Set NEXT_PUBLIC_SITE_URL in Vercel (e.g. https://nooraccessrental.vercel.app until custom domain is live).
 */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;

  const vercel = process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;

  return CANONICAL_URL;
}

/**
 * Canonical URL for alternates and JSON-LD @id fields.
 * Defaults to the live site URL so Vercel subdomain can be indexed before custom domain is connected.
 * Set NEXT_PUBLIC_CANONICAL_URL=https://nooraccessrental.com after the custom domain is live.
 */
export function getCanonicalUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_CANONICAL_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;

  return getSiteUrl();
}
