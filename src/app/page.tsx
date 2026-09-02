import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { CeoSection } from "@/components/sections/ceo-section";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";
import { Gallery } from "@/components/sections/gallery";
import { TopicsHub } from "@/components/sections/topics-hub";
import { FaqSection } from "@/components/sections/faq-section";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { HOMEPAGE_FAQS } from "@/lib/pages/types";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CeoSection />
        <Services />
        <WhyUs />
        <Gallery />
        <TopicsHub />
        <FaqSection
          title="Manlift & Equipment Rental — FAQ"
          subtitle="Common questions about aerial platform rental in UAE"
          faqs={HOMEPAGE_FAQS}
        />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
