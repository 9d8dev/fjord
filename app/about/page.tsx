import About from "@/components/sections/about";
import CTA from "@/components/sections/cta";
import FAQ from "@/components/sections/faq";
import SecondaryHero from "@/components/sections/secondary-hero";

export default function Page() {
  return (
    <>
      <SecondaryHero title="About Us" subtitle="Learn More about Fjord">
        welcome to the about page. this is where you can tell your users about
        your project.
      </SecondaryHero>
      <About />
      <FAQ />
      <CTA />
    </>
  );
}
