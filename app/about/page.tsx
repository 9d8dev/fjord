import CTA from "@/components/sections/cta";
import FAQ from "@/components/sections/faq";
import SecondaryHero from "@/components/sections/secondary-hero";

export default function Page() {
  return (
    <>
      <SecondaryHero title="About Us" subtitle="Learn More ->" />
      <FAQ />
      <CTA />
    </>
  );
}
