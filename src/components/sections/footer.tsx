import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.jpeg"
                alt="Noor Access Rental"
                width={48}
                height={48}
                className="h-12 w-12 rounded-xl object-contain bg-white"
              />
              <div>
                <p className="font-display font-bold text-white text-lg">
                  NOOR <span className="text-brand-400">ACCESS</span>
                </p>
                <p className="text-xs text-gray-400 tracking-widest">RENTAL</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Premium manlift and aerial equipment rental across UAE. Discounted
              rates, on-time delivery, and principles-driven service.
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Telescopic Boom Lifts",
                "Articulating Boom Lifts",
                "Scissor Lifts",
                "Spider Lifts",
                "Aerial Platform Rental",
              ].map((item) => (
                <li key={item}>
                  <a href="#services" className="hover:text-brand-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "#ceo", label: "About CEO" },
                { href: "#gallery", label: "Our Fleet" },
                { href: "#why-us", label: "Why Choose Us" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-brand-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-400 shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="hover:text-brand-400 transition-colors"
                >
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-400 shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-brand-400 transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-brand-400 shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.location.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p>
            CEO: <span className="text-gray-300">{SITE_CONFIG.ceo}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
