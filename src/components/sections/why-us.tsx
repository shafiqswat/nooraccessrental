import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import { CheckCircle2 } from "lucide-react";

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-gold/10 rounded-3xl -rotate-2" />
            <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 p-4">
              <Image
                src="/images/gallery1.jpg"
                alt="Telescopic boom lift rental - Skyjack SJ66 T+ available at Noor Access Rental UAE"
                width={600}
                height={500}
                className="w-full h-auto rounded-2xl object-contain"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-600 text-white rounded-2xl p-6 shadow-xl">
              <p className="font-display text-3xl font-bold">Best</p>
              <p className="text-brand-100 text-sm">Rates in UAE</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline">Why Choose Us</Badge>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
                Your Trusted Partner for{" "}
                <span className="text-brand-600">Equipment Rental</span> in UAE
              </h2>
              <p className="text-gray-600 text-lg">
                Noor Access Rental has its own niche — completing every job on
                time and with principles. We stand apart from competitors like
                Manlift Group, Al Marwan, and Access Rental Gulf.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "Discounted rental rates on all machinery types",
                "On-time delivery and project completion guarantee",
                "Certified, well-maintained aerial platforms",
                "24/7 WhatsApp and phone support",
                "Coverage across Dubai, Sharjah, Abu Dhabi & UAE",
                "Expert equipment selection guidance",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <Button variant="whatsapp" size="lg" asChild>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hello,%20I%20want%20to%20rent%20equipment%20from%20Noor%20Access%20Rental`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Best Rates on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
