import { Blog } from "@/components/sections/blog";
import { Community } from "@/components/sections/community";
import { CTA } from "@/components/sections/cta";
import { Education } from "@/components/sections/education";
import { Examples } from "@/components/sections/examples";
import { Experience } from "@/components/sections/experience";
import { Features } from "@/components/sections/features";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Logos } from "@/components/sections/logos";
import { Pricing } from "@/components/sections/pricing";
import { Statistics } from "@/components/sections/statistics";
import { Testimonials } from "@/components/sections/testimonials";
import { UseCases } from "@/components/sections/use-cases";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      {/* <Logos /> */}
      <Blog />
      <Examples />
      <Experience />
      <Education />
      {/* <UseCases /> */}
       <Features />
      
        {/* <Statistics /> */}
      <Testimonials />
      {/* <Pricing /> */}
      {/* <Community /> */}
      
      <CTA />
      <Footer />
    </main>
  );
}
