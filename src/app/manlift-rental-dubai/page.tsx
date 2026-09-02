import type { Metadata } from "next";
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
import { generateServicePageJsonLd } from "@/lib/seo";
import {
  MANLIFT_DUBAI_DELIVERY_AREAS,
  MANLIFT_DUBAI_FAQS,
  MANLIFT_DUBAI_FLEET,
  MANLIFT_DUBAI_RENTAL_STEPS,
  MANLIFT_DUBAI_SEO,
  MANLIFT_DUBAI_SLUG,
  MANLIFT_DUBAI_WHY_US,
} from "@/lib/pages/manlift-dubai";
import { getCanonicalUrl } from "@/lib/site-url";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Phone,
  Shield,
  Truck,
} from "lucide-react";

const pageUrl = `${getCanonicalUrl()}${MANLIFT_DUBAI_SLUG}`;

export const metadata: Metadata = {
  title: MANLIFT_DUBAI_SEO.title,
  description: MANLIFT_DUBAI_SEO.description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: MANLIFT_DUBAI_SEO.title,
    description: MANLIFT_DUBAI_SEO.description,
    url: pageUrl,
    type: "website",
  },
  keywords: [
    "manlift rental Dubai",
    "manlift hire Dubai",
    "boom lift rental Dubai",
    "scissor lift rental Dubai",
    "aerial platform rental Dubai",
    "cherry picker rental Dubai",
    "Noor Access Rental",
  ],
};

const jsonLdScripts = generateServicePageJsonLd({
  slug: MANLIFT_DUBAI_SLUG,
  name: "Manlift Rental Dubai",
  description: MANLIFT_DUBAI_SEO.description,
  serviceType: "Manlift and aerial work platform rental",
  areaServed: "Dubai",
  faqs: MANLIFT_DUBAI_FAQS,
});

export default function ManliftRentalDubaiPage() {
  const whatsappText = encodeURIComponent(
    "Hello Noor Access Rental, I need manlift rental in Dubai. Please share rates and availability.",
  );

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
        {/* Hero */}
        <section className="relative pt-28 pb-16 bg-gradient-to-br from-gray-50 via-white to-brand-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-brand-700">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">Manlift Rental Dubai</span>
            </nav>

            <div className="max-w-3xl space-y-6">
              <Badge className="text-sm">
                <MapPin className="h-3 w-3 mr-1" />
                Dubai &amp; UAE Delivery
              </Badge>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                {MANLIFT_DUBAI_SEO.h1}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Noor Access Rental supplies certified manlifts, boom lifts and scissor lifts to
                Dubai construction, maintenance and industrial sites — with discounted rates,
                on-time delivery from our Sharjah base, and 24/7 WhatsApp support.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="whatsapp" size="lg" asChild>
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${whatsappText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Dubai Manlift Quote
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href={`tel:${SITE_CONFIG.phone}`}>
                    <Phone className="h-4 w-4 mr-2" />
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                </Button>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Shield className="h-4 w-4 text-brand-600" /> Certified fleet
                </span>
                <span className="flex items-center gap-1">
                  <Truck className="h-4 w-4 text-brand-600" /> Sharjah → Dubai delivery
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <div className="prose prose-lg text-gray-600 max-w-none space-y-4">
              <p>
                Whether you are working on a high-rise façade in Business Bay, MEP maintenance in
                Al Quoz, or warehouse access in Jebel Ali,{" "}
                <strong className="text-gray-900">manlift rental in Dubai</strong> gives your team
                safe, efficient access at height. Noor Access Rental has built its reputation on
                completing every job on time and with principles — offering discounted rental rates
                on telescopic boom lifts, articulating boom lifts and scissor lifts from 5 metres
                to 40 metres.
              </p>
              <p>
                Based in Sharjah, we deliver across Dubai and the wider UAE with certified,
                well-maintained equipment including Skyjack rough terrain scissor lifts and a full
                range of boom platforms. Need a different service? See our{" "}
                <Link href="/#gallery" className="text-brand-700 hover:underline">
                  full equipment fleet
                </Link>{" "}
                or contact us for expert guidance on the right machine for your site.
              </p>
            </div>
          </div>
        </section>

        {/* Fleet */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
                Our Manlift Fleet for{" "}
                <span className="text-brand-700">Dubai Projects</span>
              </h2>
              <p className="mt-4 text-gray-600">
                From compact electric scissor lifts to 40-metre telescopic booms — matched to your
                working height and site conditions.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {MANLIFT_DUBAI_FLEET.map((item) => (
                <Card key={item.title} className="border-gray-100">
                  <CardContent className="p-6 space-y-3">
                    <Badge variant="outline" className="text-brand-700">
                      {item.range}
                    </Badge>
                    <h3 className="font-display text-xl font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why us + delivery */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
                  Why Rent a Manlift From Noor Access in Dubai
                </h2>
                <ul className="space-y-3">
                  {MANLIFT_DUBAI_WHY_US.map((item) => (
                    <li key={item} className="flex gap-3 text-gray-600">
                      <CheckCircle2 className="h-5 w-5 text-brand-600 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
                  Dubai Delivery Areas
                </h2>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {MANLIFT_DUBAI_DELIVERY_AREAS.map((area) => (
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

        {/* How it works */}
        <section className="py-20 bg-gradient-to-b from-brand-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="font-display text-3xl font-bold text-gray-900 text-center mb-10">
              How Manlift Rental Works
            </h2>
            <ol className="space-y-4">
              {MANLIFT_DUBAI_RENTAL_STEPS.map((step, i) => (
                <li
                  key={step}
                  className="flex gap-4 items-start bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white font-bold text-sm">
                    {i + 1}
                  </span>
                  <span className="text-gray-700 pt-1">{step}</span>
                </li>
              ))}
            </ol>
            <div className="text-center mt-10">
              <Button variant="whatsapp" size="lg" asChild>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Your Dubai Rental
                  <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <FaqSection
          title="Manlift Rental Dubai — FAQ"
          subtitle="Common questions about hiring boom lifts and scissor lifts in Dubai"
          faqs={MANLIFT_DUBAI_FAQS}
        />

        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
