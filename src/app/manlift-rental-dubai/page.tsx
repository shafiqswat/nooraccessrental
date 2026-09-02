import type { Metadata } from "next";
import {
  ServiceLandingPage,
  buildServiceMetadata,
} from "@/components/service-landing-page";
import { MANLIFT_DUBAI } from "@/lib/pages/service-pages";

export const metadata: Metadata = buildServiceMetadata(MANLIFT_DUBAI);

export default function ManliftRentalDubaiPage() {
  return <ServiceLandingPage config={MANLIFT_DUBAI} />;
}
