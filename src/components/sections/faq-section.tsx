import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { FaqItem } from "@/lib/seo";
import { ChevronDown } from "lucide-react";

type FaqSectionProps = {
  title?: string;
  subtitle?: string;
  faqs: FaqItem[];
  id?: string;
  className?: string;
};

export function FaqSection({
  title = "Frequently Asked Questions",
  subtitle,
  faqs,
  id = "faq",
  className,
}: FaqSectionProps) {
  return (
    <section id={id} className={cn("py-20 bg-white", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-12 space-y-3">
          <Badge variant="outline" className="text-brand-700 border-brand-200">
            FAQ
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900">
            {title}
          </h2>
          {subtitle && <p className="text-gray-600">{subtitle}</p>}
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-gray-100 bg-gray-50/50 open:bg-white open:shadow-sm open:border-brand-100 transition-all"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold text-gray-900 marker:content-none">
                <span>{faq.question}</span>
                <ChevronDown className="h-5 w-5 shrink-0 text-brand-600 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-5 pb-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
