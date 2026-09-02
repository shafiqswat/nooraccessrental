import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { TOPIC_CLUSTERS } from "@/lib/site-pages";
import { ArrowRight, Layers } from "lucide-react";

export function TopicsHub() {
  return (
    <section id="topics" className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="outline" className="text-brand-700 border-brand-200 mb-4">
            <Layers className="h-3 w-3 mr-1" />
            Equipment Topics
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            Manlift &amp; Aerial Platform{" "}
            <span className="text-brand-700">Rental Guides</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Dedicated pages for Dubai, Sharjah and UAE — built so Google and customers find exactly
            what they need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {TOPIC_CLUSTERS.map((cluster) => (
            <div key={cluster.name} className="space-y-4">
              <h3 className="font-display text-xl font-bold text-gray-900">{cluster.name}</h3>
              <p className="text-sm text-gray-500">{cluster.description}</p>
              <ul className="space-y-2">
                {cluster.pages.map((page) => (
                  <li key={page.path}>
                    <Link
                      href={page.path}
                      className="flex items-center gap-2 text-brand-700 hover:underline font-medium text-sm group"
                    >
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
