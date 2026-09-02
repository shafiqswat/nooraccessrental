import type { Metadata } from "next";
import { GuidePage, buildGuideMetadata } from "@/components/guide-page";
import { BOOM_LIFT_COST_GUIDE } from "@/lib/pages/guide-pages";

export const metadata: Metadata = buildGuideMetadata(BOOM_LIFT_COST_GUIDE);

export default function BoomLiftCostGuidePage() {
  return <GuidePage config={BOOM_LIFT_COST_GUIDE} />;
}
