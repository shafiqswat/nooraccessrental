import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import { getImageProps } from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import {
  generateLocalBusinessJsonLd,
  generateOrganizationJsonLd,
  generateWebSiteJsonLd,
  generateFAQJsonLd,
} from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-outfit",
  display: "swap",
  preload: false,
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  themeColor: "#ea580c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.ceo, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: SITE_CONFIG.canonicalUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: [
      {
        url: "/images/logo.jpeg",
        width: 800,
        height: 800,
        alt: "Noor Access Rental - Manlift Rental UAE",
      },
      {
        url: "/images/gallery1.jpg",
        width: 1200,
        height: 800,
        alt: "Boom Lift Rental UAE - Noor Access Rental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    images: ["/images/gallery1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  category: "business",
  icons: {
    icon: "/images/logo.jpeg",
    apple: "/images/logo.jpeg",
  },
  other: {
    "geo.region": "AE",
    "geo.placename": "Sharjah",
    "geo.position": "25.3463;55.4209",
    "ICBM": "25.3463, 55.4209",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdScripts = [
    generateLocalBusinessJsonLd(),
    generateOrganizationJsonLd(),
    generateWebSiteJsonLd(),
    generateFAQJsonLd(),
  ];

  const {
    props: { srcSet, sizes, src },
  } = getImageProps({
    alt: "Skyjack SJ66 T+ Telescopic Boom Lift rental UAE",
    src: "/images/gallery1.jpg",
    width: 640,
    height: 640,
    quality: 70,
    priority: true,
  });

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <link
          rel="preload"
          as="image"
          href={src}
          imageSrcSet={srcSet}
          imageSizes="100vw"
          fetchPriority="high"
        />
        <link rel="icon" href="/images/logo.jpeg" type="image/jpeg" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="apple-touch-icon" href="/images/logo.jpeg" />
      </head>
      <body className="font-sans">
        {children}
        {jsonLdScripts.map((data, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
      </body>
    </html>
  );
}
