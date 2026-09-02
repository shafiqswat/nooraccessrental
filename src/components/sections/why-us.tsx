import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import { CheckCircle2, Clock, Shield, Star, Truck } from "lucide-react";

const stats = [
  { icon: Star, value: "5.0", label: "Customer Rating" },
  { icon: Clock, value: "24/7", label: "Support Available" },
  { icon: Shield, value: "100%", label: "Certified Fleet" },
  { icon: Truck, value: "UAE", label: "Wide Coverage" },
];

const benefits = [
  "Discounted rental rates on all machinery types",
  "On-time delivery and project completion guarantee",
  "Certified, well-maintained aerial platforms",
  "24/7 WhatsApp and phone support",
  "Coverage across Dubai, Sharjah, Abu Dhabi & UAE",
  "Expert equipment selection guidance",
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-100/40 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline">Why Choose Us</Badge>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                Your Trusted Partner for{" "}
                <span className="text-brand-700">Equipment Rental</span> in UAE
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Noor Access Rental has its own niche — completing every job on
                time and with principles. Discounted rates on certified aerial
                platforms across Dubai, Sharjah, and Abu Dhabi.
              </p>
            </div>

            <ul className="space-y-3.5">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 mt-0.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-700" />
                  </div>
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

          {/* Right — stats card */}
          <div className="relative rounded-3xl overflow-hidden border border-gray-100 shadow-xl shadow-gray-900/5 bg-white p-6 sm:p-8 lg:p-10">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-500 to-gold" />
            <p className="font-display text-lg font-bold text-gray-900 mb-6">
              Why clients choose Noor Access Rental
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-gray-50 border border-gray-100 p-5 hover:border-brand-200 hover:bg-brand-50/40 transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-100 text-brand-700 mb-3">
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <p className="font-display text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-700 text-white font-display font-bold text-xl shrink-0 shadow-lg shadow-brand-700/25">
                Best
              </div>
              <div>
                <p className="font-display text-xl font-bold text-gray-900">Rates in UAE</p>
                <p className="text-sm text-gray-500 mt-1">
                  Discounted rental on every machine type
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
