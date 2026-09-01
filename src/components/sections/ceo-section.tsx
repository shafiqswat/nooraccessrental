"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { CEO_MESSAGE, SITE_CONFIG } from "@/lib/constants";
import { Quote } from "lucide-react";

export function CeoSection() {
  return (
    <section id="ceo" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 via-gold to-brand-500" />
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-64 h-64 bg-brand-100 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Message */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-sm">
                Message from the CEO
              </Badge>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Built on Trust,{" "}
                <span className="text-brand-600">Principles</span> & Excellence
              </h2>
            </div>

            <div className="relative">
              <Quote className="absolute -top-2 -left-2 h-10 w-10 text-brand-200" />
              <blockquote className="relative pl-8 text-lg sm:text-xl text-gray-600 leading-relaxed italic">
                &ldquo;{CEO_MESSAGE}&rdquo;
              </blockquote>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="h-1 w-16 bg-brand-600 rounded-full" />
              <div>
                <p className="font-display text-xl font-bold text-gray-900">
                  {SITE_CONFIG.ceo}
                </p>
                <p className="text-brand-600 font-semibold">CEO, Noor Access Rental</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { value: "100+", label: "Projects Done" },
                { value: "24/7", label: "Support" },
                { value: "5.0", label: "Rating" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-2xl bg-gradient-to-br from-brand-50 to-white border border-brand-100"
                >
                  <p className="font-display text-2xl sm:text-3xl font-bold text-brand-600">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - CEO Image with animation */}
          <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Animated rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-[90%] h-[90%] rounded-full border-2 border-brand-200 animate-pulse-soft" />
                <div
                  className="absolute w-[95%] h-[95%] rounded-full border border-brand-100 animate-pulse-soft"
                  style={{ animationDelay: "0.5s" }}
                />
              </div>

              {/* Decorative gradient blob behind CEO */}
              <div className="absolute inset-4 bg-gradient-to-br from-brand-500 via-brand-600 to-gold rounded-full opacity-20 blur-2xl animate-pulse-soft" />

              {/* CEO image container */}
              <div className="relative mx-auto w-[280px] sm:w-[320px] lg:w-[380px]">
                <div
                  className="relative rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-brand-600/20 animate-slide-in-right"
                  style={{ aspectRatio: "1/1" }}
                >
                  <Image
                    src="/images/ceo.jpg"
                    alt={`${SITE_CONFIG.ceo} - CEO of Noor Access Rental, UAE Equipment Rental`}
                    width={380}
                    height={380}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                </div>

                {/* Floating badge */}
                <div
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl px-6 py-3 border border-gray-100 animate-fade-in-up"
                  style={{ animationDelay: "0.6s" }}
                >
                  <p className="font-display font-bold text-gray-900 text-center">
                    {SITE_CONFIG.ceo}
                  </p>
                  <p className="text-brand-600 text-sm font-semibold text-center">
                    Chief Executive Officer
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute -top-4 -right-4 h-20 w-20 bg-brand-600 rounded-2xl rotate-12 opacity-90 flex items-center justify-center shadow-lg animate-float">
                  <span className="text-white font-display font-bold text-sm text-center leading-tight">
                    UAE<br />Leader
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
