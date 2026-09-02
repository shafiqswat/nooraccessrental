import Link from "next/link";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { FaqSection } from "@/components/sections/faq-section";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import type { GuidePageConfig } from "@/lib/pages/types";
import { generateFAQJsonLd, generateBreadcrumbJsonLd } from "@/lib/seo";
import { getCanonicalUrl } from "@/lib/site-url";
import { ArrowRight, BookOpen } from "lucide-react";

type Props = { config: GuidePageConfig };

export function GuidePage({ config }: Props) {
  const pageUrl = `${getCanonicalUrl()}${config.slug}`;
  const slugId = config.slug.replace(/^\//, "");

  const jsonLd = [
    generateBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Guides", path: "/guides/boom-lift-rental-cost-dubai" },
      { name: config.breadcrumbLabel, path: config.slug },
    ]),
    generateFAQJsonLd(config.faqs, slugId),
  ];

  return (
    <>
      {jsonLd.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}

      <Header />
      <main>
        <article className="pt-28 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-brand-700">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">{config.breadcrumbLabel}</span>
            </nav>

            <div className="flex items-center gap-2 text-brand-700 mb-4">
              <BookOpen className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">UAE Rental Guide</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-8">
              {config.seo.h1}
            </h1>

            {config.sections.map((section) => (
              <section key={section.heading} className="mb-10">
                <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                  {section.heading}
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  {section.paragraphs.map((p) => (
                    <p key={p.slice(0, 50)}>{p}</p>
                  ))}
                </div>
              </section>
            ))}

            <div className="my-10 p-6 bg-brand-50 rounded-2xl border border-brand-100">
              <p className="font-semibold text-gray-900 mb-3">Need equipment for your project?</p>
              <Button variant="whatsapp" asChild>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent("Hello Noor Access Rental, I read your guide and need a rental quote.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Discounted Quote
                </a>
              </Button>
            </div>

            {config.relatedLinks.length > 0 && (
              <section className="border-t border-gray-100 pt-8">
                <h2 className="font-display text-lg font-bold text-gray-900 mb-4">
                  Related Pages
                </h2>
                <div className="flex flex-wrap gap-4">
                  {config.relatedLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex items-center gap-1 text-brand-700 hover:underline text-sm font-medium"
                    >
                      {link.label}
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </article>

        <FaqSection title="Common Questions" faqs={config.faqs} />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export function buildGuideMetadata(config: GuidePageConfig) {
  const pageUrl = `${getCanonicalUrl()}${config.slug}`;
  return {
    title: config.seo.title,
    description: config.seo.description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: config.seo.title,
      description: config.seo.description,
      url: pageUrl,
      type: "article" as const,
    },
    keywords: config.keywords,
  };
}
