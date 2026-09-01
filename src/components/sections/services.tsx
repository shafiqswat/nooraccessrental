import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SERVICES } from "@/lib/constants";
import { ArrowUpRight, Construction, Layers, Maximize2, Zap } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  boom: <Maximize2 className="h-6 w-6" />,
  articulating: <ArrowUpRight className="h-6 w-6" />,
  scissor: <Layers className="h-6 w-6" />,
  spider: <Zap className="h-6 w-6" />,
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
            <span className="text-brand-600">Rental Solutions</span>
          </h2>
          <p className="text-lg text-gray-600">
            From telescopic boom lifts to spider lifts — we provide all types of
            machinery at discounted rental rates across UAE.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <Card
              key={service.title}
              className="group relative overflow-hidden border-gray-100 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-600/5 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="pb-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  {iconMap[service.icon]}
                </div>
                <CardTitle className="text-lg mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
