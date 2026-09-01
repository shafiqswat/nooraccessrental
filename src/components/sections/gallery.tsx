import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FLEET, SITE_CONFIG } from "@/lib/constants";
import { CheckCircle2, MessageCircle, Sparkles } from "lucide-react";

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge className="text-sm">
            <Sparkles className="h-3 w-3 mr-1" />
            Our Fleet
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Premium <span className="text-brand-600">Equipment</span> Ready to Deploy
          </h2>
          <p className="text-lg text-gray-600">
            Boom lifts, scissor lifts, and recovery services at discounted rental rates across UAE.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {FLEET.map((item) => (
            <FleetCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

type FleetItem = typeof FLEET[number];

function FleetCard({ item }: { item: FleetItem }) {
  const whatsappText = encodeURIComponent(
    `Hello Noor Access Rental, I am interested in renting: ${item.title} (${item.range})`
  );

  return (
    <article
      id={`fleet-${item.id}`}
      className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg shadow-gray-900/5 hover:shadow-2xl hover:shadow-brand-600/10 transition-all duration-500 hover:-translate-y-1 scroll-mt-28"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 via-gold to-brand-600 opacity-0 group-hover:opacity-100 transition-opacity z-10" />

      <div className="relative min-h-[240px] sm:min-h-[280px] bg-white overflow-hidden flex items-center justify-center">
        <Image
          src={item.src}
          alt={item.alt}
          width={700}
          height={500}
          className="w-full h-full object-contain max-h-[280px] px-6 py-8 sm:px-10 sm:py-10 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="bg-brand-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
            Available
          </span>
          <span className="bg-white text-brand-700 text-xs font-bold px-3 py-1.5 rounded-full border border-brand-200 shadow-sm">
            {item.range}
          </span>
        </div>
      </div>

      <div className="p-6 lg:p-8 space-y-4 border-t border-gray-100">
        <div>
          <p className="text-xs font-bold text-brand-600 uppercase tracking-widest">
            {item.type}
          </p>
          <h3 className="font-display text-xl lg:text-2xl font-bold text-gray-900 mt-1">
            {item.title}
          </h3>
        </div>

        <ul className="space-y-2">
          {item.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
              <CheckCircle2 className="h-4 w-4 text-brand-500 shrink-0 mt-0.5" />
              {feature}
            </li>
          ))}
        </ul>

        <Button variant="whatsapp" size="default" asChild className="w-full sm:w-auto">
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-4 w-4" />
            Inquire on WhatsApp
          </a>
        </Button>
      </div>
    </article>
  );
}
