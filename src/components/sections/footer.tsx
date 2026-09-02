import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import { SERVICE_PAGES, GUIDE_PAGES } from "@/lib/site-pages";
import { SocialLinks } from "@/components/social-links";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.jpeg"
                alt="Noor Access Rental Logo"
                width={48}
                height={48}
                className="h-12 w-12 rounded-xl object-contain bg-white"
              />
              <div>
                <p className="font-display font-bold text-white text-lg">
                  NOOR <span className="text-brand-200">ACCESS</span>
                </p>
                <p className="text-xs text-gray-400 tracking-widest">RENTAL</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Premium manlift and aerial equipment rental across UAE. Discounted
              rates, on-time delivery, and principles-driven service.
            </p>
            <SocialLinks variant="dark" />
          </div>

          <div>
            <h3 className="font-display font-bold text-white mb-4">Rental Pages</h3>
            <ul className="space-y-2 text-sm">
              {SERVICE_PAGES.map((item) => (
                <li key={item.path}>
                  <Link href={item.path} className="text-gray-300 hover:text-brand-200 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-white mb-4">Guides</h3>
            <ul className="space-y-2 text-sm">
              {GUIDE_PAGES.map((item) => (
                <li key={item.path}>
                  <Link href={item.path} className="text-gray-300 hover:text-brand-200 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="#fleet-boom-lift" className="text-gray-300 hover:text-brand-200 transition-colors">
                  View Fleet Gallery
                </a>
              </li>
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
                {
                  href: SITE_CONFIG.social.facebook,
                  label: "Facebook Page",
                  external: true,
                },
              ].map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer me"
                      className="text-gray-300 hover:text-brand-200 transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <a href={link.href} className="text-gray-300 hover:text-brand-200 transition-colors">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-200 shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="text-gray-300 hover:text-brand-200 transition-colors"
                >
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-200 shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-gray-300 hover:text-brand-200 transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-brand-200 shrink-0 mt-0.5" />
                <a
                  href="https://maps.google.com/?q=Sharjah,+United+Arab+Emirates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-brand-200 transition-colors"
                >
                  {SITE_CONFIG.location.address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>
            &copy; {currentYear}{" "}
            <Link
              href="/"
              className="font-semibold text-white decoration-gray-500 hover:decoration-brand-200"
            >
              {SITE_CONFIG.name}
            </Link>
            . All rights reserved.
          </p>
          <p className="text-gray-400">
            CEO: <span className="text-gray-300">{SITE_CONFIG.ceo}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
