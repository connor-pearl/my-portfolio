import { Correspondence } from "@/components/Correspondence";
import { CoverPlate } from "@/components/CoverPlate";
import { Deployments } from "@/components/Deployments";
import { Instrumentation } from "@/components/Instrumentation";
import { OriginPlate } from "@/components/OriginPlate";
import { SignalPlate } from "@/components/SignalPlate";

export default function Home() {
  return (
    <main>
      <CoverPlate />
      <SignalPlate />
      <Deployments />
      <Instrumentation />
      <OriginPlate />
      <Correspondence />
    </main>
  );
}
