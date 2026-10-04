import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BentoGrid />
      <Pricing />
      <FAQ />
    </>
  );
}