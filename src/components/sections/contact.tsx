import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Ready to Rent? Contact Us Now
          </h2>
          <p className="text-xl text-brand-100 max-w-2xl mx-auto">
            Get discounted rates on manlift and aerial equipment rental. Reach
            out via WhatsApp for the fastest response — available 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              variant="whatsapp"
              size="xl"
              asChild
              className="text-lg shadow-2xl"
            >
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hello%20Noor%20Access%20Rental,%20I%20need%20equipment%20rental%20in%20UAE`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-6 w-6" />
                WhatsApp: {SITE_CONFIG.phoneDisplay}
              </a>
            </Button>
            <Button
              size="xl"
              asChild
              className="bg-white text-brand-700 hover:bg-brand-50 text-lg shadow-2xl"
            >
              <a href={`tel:${SITE_CONFIG.phone}`}>
                <Phone className="h-6 w-6" />
                Call Now
              </a>
            </Button>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
            {[
              {
                icon: Phone,
                label: "Phone",
                value: SITE_CONFIG.phoneDisplay,
                href: `tel:${SITE_CONFIG.phone}`,
              },
              {
                icon: Mail,
                label: "Email",
                value: SITE_CONFIG.email,
                href: `mailto:${SITE_CONFIG.email}`,
              },
              {
                icon: MapPin,
                label: "Location",
                value: SITE_CONFIG.location.address,
                href: "#",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors group"
              >
                <item.icon className="h-6 w-6 text-brand-200 group-hover:text-white transition-colors" />
                <span className="text-sm text-brand-200">{item.label}</span>
                <span className="text-white font-semibold text-sm">{item.value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
