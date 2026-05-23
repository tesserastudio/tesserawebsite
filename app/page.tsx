import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { MarqueeTrust } from "@/components/sections/MarqueeTrust";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyTessera } from "@/components/sections/WhyTessera";
import { FAQ } from "@/components/sections/FAQ";
import { WhoWeWorkWith } from "@/components/sections/WhoWeWorkWith";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeTrust />
      <Services />
      <Process />
      <WhoWeWorkWith />
      <Portfolio />
      <WhyTessera />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
