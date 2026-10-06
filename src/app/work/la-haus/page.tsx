import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CasePlate } from "@/components/CasePlate";
import { caseStudies, site } from "@/content/site";

const study = caseStudies["la-haus"];

export const metadata: Metadata = {
  title: `${study.company} case — ${site.name}`,
  description: study.lead,
};

export default function LaHausCasePage() {
  if (!study) notFound();
  return <CasePlate study={study} />;
}
