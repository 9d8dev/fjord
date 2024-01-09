import About from "@/components/sections/about";
import CTA from "@/components/sections/cta";
import FAQ from "@/components/sections/faq";
import SecondaryHero from "@/components/sections/secondary-hero";
import * as Craft from "@/components/craft/layout";
import type { Metadata } from "next";
import fjord from "@/fjord.config";

export const metadata: Metadata = {
  title: `About Us | ${fjord.site_name}`,
  description: `Learn more about ${fjord.site_name}. ${fjord.site_description}`,
};

export default function Page() {
  return (
    <Craft.Main>
      <SecondaryHero title="About us" subtitle="Learn More about Fjord">
        Welcome to the about page. this is where you can tell your users about
        your project.
      </SecondaryHero>
      <About />
      <FAQ />
      <CTA />
    </Craft.Main>
  );
}
