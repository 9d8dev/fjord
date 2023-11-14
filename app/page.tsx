import Hero from "@/components/sections/hero";
import Feature from "@/components/sections/feature";
import FAQ from "@/components/sections/faq";
import CTA from "@/components/sections/cta";
import RecentPosts from "@/components/content/recent-posts";
import Main from "@/components/global/layout/main";

export default function Home() {
  return (
    <Main>
      <Hero />
      <Feature />
      <RecentPosts />
      <FAQ />
      <CTA />
    </Main>
  );
}
