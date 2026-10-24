import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BentoGrid />
      <Pricing />
      <FAQ />
      <Contact />
    </>
  );
}