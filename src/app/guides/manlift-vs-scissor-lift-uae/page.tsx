import type { Metadata } from "next";
import { GuidePage, buildGuideMetadata } from "@/components/guide-page";
import { MANLIFT_VS_SCISSOR_GUIDE } from "@/lib/pages/guide-pages";

export const metadata: Metadata = buildGuideMetadata(MANLIFT_VS_SCISSOR_GUIDE);

export default function ManliftVsScissorGuidePage() {
  return <GuidePage config={MANLIFT_VS_SCISSOR_GUIDE} />;
}
