import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { CeoSection } from "@/components/sections/ceo-section";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";
import { Gallery } from "@/components/sections/gallery";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";

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
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
