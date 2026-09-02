import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";
import {
  ArrowUpRight,
  Construction,
  Layers,
  Maximize2,
  Truck,
  Zap,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  boom: <Maximize2 className="h-7 w-7" />,
  scissor: <Layers className="h-7 w-7" />,
  electric: <Zap className="h-7 w-7" />,
  recovery: <Truck className="h-7 w-7" />,
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge className="text-sm">
            <Construction className="h-3 w-3 mr-1" />
            Our Services
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Complete Aerial Equipment{" "}
            <span className="text-brand-700">Rental Solutions</span>
          </h2>
          <p className="text-lg text-gray-600">
            From 5-metre scissor lifts to 40-metre boom lifts across UAE.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <Card
              key={service.id}
              className="group relative overflow-hidden border-gray-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-600/10 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              <CardContent className="p-6 lg:p-8 space-y-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-brand-700 group-hover:bg-brand-700 group-hover:text-white transition-colors shrink-0">
                    {iconMap[service.icon]}
                  </div>
                  <Badge variant="outline" className="shrink-0 font-bold text-brand-700">
                    {service.range}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-brand-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <Button variant="ghost" size="sm" asChild className="text-brand-700 hover:text-brand-700 hover:bg-brand-50 px-0">
                  {service.id === "boom-lift" ? (
                    <Link href="/manlift-rental-dubai" aria-label="Manlift rental Dubai">
                      <ArrowUpRight className="h-4 w-4" />
                      Manlift rental Dubai
                    </Link>
                  ) : (
                    <a href={`#fleet-${service.id}`} aria-label={`View ${service.title} in fleet`}>
                      <ArrowUpRight className="h-4 w-4" />
                      View equipment in fleet
                    </a>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
