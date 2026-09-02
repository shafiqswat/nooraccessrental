import type { Metadata } from "next";
import {
  ServiceLandingPage,
  buildServiceMetadata,
} from "@/components/service-landing-page";
import { BOOM_LIFT_DUBAI } from "@/lib/pages/service-pages";

export const metadata: Metadata = buildServiceMetadata(BOOM_LIFT_DUBAI);

export default function BoomLiftRentalDubaiPage() {
  return <ServiceLandingPage config={BOOM_LIFT_DUBAI} />;
}
