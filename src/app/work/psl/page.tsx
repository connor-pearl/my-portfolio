import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CasePlate } from "@/components/CasePlate";
import { caseStudies, site } from "@/content/site";

const study = caseStudies.psl;

export const metadata: Metadata = {
  title: `${study.company} case — ${site.name}`,
  description: study.lead,
};

export default function PslCasePage() {
  if (!study) notFound();
  return <CasePlate study={study} />;
}
