import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const equipment = [
  {
    src: "/images/gallery1.jpg",
    alt: "Skyjack SJ66 T+ Telescopic Boom Lift - Rental UAE",
    title: "Skyjack SJ66 T+",
    type: "Telescopic Boom Lift",
  },
  {
    src: "/images/gallery1.jpg",
    alt: "Articulating Boom Lift rental Dubai Sharjah",
    title: "Articulating Boom",
    type: "Boom Lift",
  },
  {
    src: "/images/gallery1.jpg",
    alt: "Scissor lift rental Abu Dhabi UAE",
    title: "Scissor Lift",
    type: "Vertical Access",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge className="text-sm">Our Fleet</Badge>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Premium <span className="text-brand-600">Equipment</span> Ready to Deploy
          </h2>
          <p className="text-lg text-gray-600">
            Well-maintained manlifts and aerial platforms from leading brands,
            available for immediate rental across UAE.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipment.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-900/5 border border-gray-100 hover:shadow-xl hover:shadow-brand-600/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-50 to-brand-50 p-6">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={400}
                  height={300}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 border-t border-gray-100">
                <p className="text-xs font-semibold text-brand-600 uppercase tracking-wider">
                  {item.type}
                </p>
                <h3 className="font-display text-xl font-bold text-gray-900 mt-1">
                  {item.title}
                </h3>
              </div>
              <div className="absolute top-4 right-4 bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                Available
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
