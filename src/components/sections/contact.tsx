import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import { SocialLinks } from "@/components/social-links";
import {
  Clock,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Headphones,
} from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    value: SITE_CONFIG.phoneDisplay,
    href: `tel:${SITE_CONFIG.phone}`,
    description: "Call anytime",
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    description: "We reply fast",
  },
  {
    icon: MapPin,
    label: "Location",
    value: SITE_CONFIG.location.address,
    href: "https://maps.google.com/?q=Sharjah,+United+Arab+Emirates",
    external: true,
    description: "UAE coverage",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "Follow us",
    href: SITE_CONFIG.social.facebook,
    external: true,
    description: "Noor Access Rental",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 pb-32 relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-brand-50/40">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA card */}
          <div className="relative bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-900/5 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-500 via-gold to-brand-600" />

            <div className="p-8 sm:p-10 lg:p-14">
              <div className="text-center max-w-2xl mx-auto space-y-4 mb-10">
                <Badge className="text-sm">
                  <Headphones className="h-3 w-3 mr-1" />
                  24/7 Support
                </Badge>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Ready to Rent?{" "}
                  <span className="text-brand-700">Contact Us Now</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Get discounted rates on manlift and aerial equipment rental.
                  WhatsApp is the fastest way to reach us — we&apos;re available around the clock.
                </p>
              </div>

              {/* Primary actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <Button variant="whatsapp" size="xl" asChild className="text-base shadow-lg shadow-[#25D366]/25">
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hello%20Noor%20Access%20Rental,%20I%20need%20equipment%20rental%20in%20UAE`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
                <Button variant="outline" size="xl" asChild className="text-base border-2">
                  <a href={`tel:${SITE_CONFIG.phone}`}>
                    <Phone className="h-5 w-5" />
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                </Button>
              </div>

              {/* Contact grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {contactItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer me" : undefined}
                    className="group flex flex-col gap-3 p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-200 hover:bg-brand-50/50 hover:shadow-md hover:shadow-brand-600/5 transition-all duration-300"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-700 group-hover:bg-brand-700 group-hover:text-white transition-colors">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-brand-700 uppercase tracking-wider">
                        {item.label}
                      </span>
                      <p className="font-semibold text-gray-900 text-sm mt-1 leading-snug">
                        {item.value}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Available 24/7</p>
                    <p className="text-xs text-gray-500">Fast response on WhatsApp</p>
                  </div>
                </div>
                <SocialLinks variant="section" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
