import Hero from "@/components/sections/hero";
import Feature from "@/components/sections/feature";
import FAQ from "@/components/sections/faq";
import RecentPosts from "@/components/sections/recent-posts";

export default function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <RecentPosts />
      <FAQ />
    </>
  );
}
