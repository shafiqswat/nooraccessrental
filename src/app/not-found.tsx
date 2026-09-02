import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import { Home, MessageCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-brand-50 px-4">
      <div className="text-center max-w-lg space-y-8">
        <Image
          src="/images/logo.jpeg"
          alt="Noor Access Rental"
          width={80}
          height={80}
          className="mx-auto h-20 w-20 rounded-2xl object-contain"
        />
        <div className="space-y-2">
          <h1 className="font-display text-7xl font-bold text-brand-700">404</h1>
          <h2 className="font-display text-2xl font-bold text-gray-900">
            Page Not Found
          </h2>
          <p className="text-gray-600">
            The page you&apos;re looking for doesn&apos;t exist. Let us help you find
            the right equipment rental solution.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/">
              <Home className="h-5 w-5" />
              Back to Home
            </Link>
          </Button>
          <Button variant="whatsapp" size="lg" asChild>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hello%20Noor%20Access%20Rental`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
