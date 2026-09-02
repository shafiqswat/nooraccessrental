import type { Metadata } from "next";
import {
  ServiceLandingPage,
  buildServiceMetadata,
} from "@/components/service-landing-page";
import { SCISSOR_LIFT_DUBAI } from "@/lib/pages/service-pages";

export const metadata: Metadata = buildServiceMetadata(SCISSOR_LIFT_DUBAI);

export default function ScissorLiftRentalDubaiPage() {
  return <ServiceLandingPage config={SCISSOR_LIFT_DUBAI} />;
}
