import type { Metadata } from "next";
import {
  ServiceLandingPage,
  buildServiceMetadata,
} from "@/components/service-landing-page";
import { MANLIFT_SHARJAH } from "@/lib/pages/service-pages";

export const metadata: Metadata = buildServiceMetadata(MANLIFT_SHARJAH);

export default function ManliftRentalSharjahPage() {
  return <ServiceLandingPage config={MANLIFT_SHARJAH} />;
}
