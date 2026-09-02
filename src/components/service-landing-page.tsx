import Link from "next/link";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Contact } from "@/components/sections/contact";
import { FaqSection } from "@/components/sections/faq-section";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/lib/constants";
import type { ServicePageConfig } from "@/lib/pages/types";
import { generateServicePageJsonLd } from "@/lib/seo";
import { getCanonicalUrl } from "@/lib/site-url";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Phone,
} from "lucide-react";

type Props = { config: ServicePageConfig };

export function ServiceLandingPage({ config }: Props) {
  const pageUrl = `${getCanonicalUrl()}${config.slug}`;
  const whatsappText = encodeURIComponent(config.whatsappMessage);

  const jsonLdScripts = generateServicePageJsonLd({
    slug: config.slug,
    name: config.serviceName,
    description: config.seo.description,
    serviceType: config.serviceType,
    areaServed: config.areaServed,
    faqs: config.faqs,
  });

  return (
    <>
      {jsonLdScripts.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}

      <Header />
      <main>
        <section className="relative pt-28 pb-16 bg-gradient-to-br from-gray-50 via-white to-brand-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-brand-700">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">{config.breadcrumbLabel}</span>
            </nav>

            <div className="max-w-3xl space-y-6">
              <Badge className="text-sm">
                <MapPin className="h-3 w-3 mr-1" />
                {config.badge}
              </Badge>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                {config.seo.h1}
              </h1>
              {config.intro.map((p) => (
                <p key={p.slice(0, 40)} className="text-lg text-gray-600 leading-relaxed">
                  {p}
                </p>
              ))}
              <div className="flex flex-wrap gap-4">
                <Button variant="whatsapp" size="lg" asChild>
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${whatsappText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Quote on WhatsApp
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href={`tel:${SITE_CONFIG.phone}`}>
                    <Phone className="h-4 w-4 mr-2" />
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-bold text-gray-900 text-center mb-12">
              Equipment Available
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {config.fleet.map((item) => (
                <Card key={item.title} className="border-gray-100">
                  <CardContent className="p-6 space-y-3">
                    <Badge variant="outline" className="text-brand-700">
                      {item.range}
                    </Badge>
                    <h3 className="font-display text-xl font-bold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
                  Why Noor Access Rental
                </h2>
                <ul className="space-y-3">
                  {config.whyUs.map((item) => (
                    <li key={item} className="flex gap-3 text-gray-600">
                      <CheckCircle2 className="h-5 w-5 text-brand-600 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
                  Delivery Areas
                </h2>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {config.deliveryAreas.map((area) => (
                    <li
                      key={area}
                      className="flex gap-2 text-gray-600 text-sm bg-gray-50 rounded-lg px-3 py-2"
                    >
                      <MapPin className="h-4 w-4 text-brand-600 shrink-0" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="font-display text-3xl font-bold text-gray-900 text-center mb-8">
              How to Rent
            </h2>
            <ol className="space-y-3">
              {config.rentalSteps.map((step, i) => (
                <li
                  key={step}
                  className="flex gap-4 items-start bg-white rounded-xl p-4 border border-gray-100"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white font-bold text-sm">
                    {i + 1}
                  </span>
                  <span className="text-gray-700 pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {config.relatedLinks.length > 0 && (
          <section className="py-12 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-display text-xl font-bold text-gray-900 mb-4">
                Related Services & Guides
              </h2>
              <div className="flex flex-wrap gap-3">
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
            </div>
          </section>
        )}

        <FaqSection title={`${config.breadcrumbLabel} — FAQ`} faqs={config.faqs} />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export function buildServiceMetadata(config: ServicePageConfig) {
  const pageUrl = `${getCanonicalUrl()}${config.slug}`;
  return {
    title: config.seo.title,
    description: config.seo.description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: config.seo.title,
      description: config.seo.description,
      url: pageUrl,
      type: "website" as const,
    },
    keywords: config.keywords,
  };
}
