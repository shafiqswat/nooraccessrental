import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/constants";
import { ArrowRight, Phone, Shield, Clock, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-brand-50" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ea580c' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-brand-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4 animate-fade-in-up">
              <Badge className="text-sm">
                <Star className="h-3 w-3 mr-1 fill-brand-500 text-brand-500" />
                Top Rated Equipment Rental in UAE
              </Badge>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                <span className="text-brand-700">Manlift Rental UAE</span> — Premium{" "}
                <span className="text-brand-700">Boom Lift</span> &{" "}
                <span className="text-brand-700">Scissor Lift</span> Hire
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-xl leading-relaxed">
                Discounted boom lift, scissor lift and aerial equipment rental in
                Dubai, Sharjah, Abu Dhabi and across UAE. On-time delivery with
                principles.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="whatsapp" size="xl" asChild>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hello%20Noor%20Access%20Rental,%20I%20need%20equipment%20rental%20in%20UAE`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Chat on WhatsApp
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href={`tel:${SITE_CONFIG.phone}`}>
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>

            <div
              className="flex flex-wrap gap-6 pt-4 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              {[
                { icon: Shield, text: "Certified Equipment" },
                { icon: Clock, text: "24/7 Support" },
                { icon: Star, text: "5.0 Rated Service" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Equipment image */}
          <div className="relative animate-slide-in-right">
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 to-gold/20 rounded-3xl rotate-3" />
              <div className="relative bg-white rounded-3xl shadow-2xl shadow-brand-600/10 p-6 border border-gray-100">
                <Image
                  src="/images/gallery1.jpg"
                  alt="Skyjack SJ66 T+ Telescopic Boom Lift rental UAE - Noor Access Rental"
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain rounded-2xl"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 animate-float">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-brand-600 flex items-center justify-center text-white font-bold text-lg">
                    24/7
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Available</p>
                    <p className="text-sm text-gray-500">Round the clock</p>
                  </div>
                </div>
              </div>
              <div
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-brand-500 text-brand-500" />
                  <span className="font-bold text-gray-900">5.0 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
