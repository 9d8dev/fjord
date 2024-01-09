import fjord from "@/fjord.config";
import Link from "next/link";
import SecondaryHero from "@/components/sections/secondary-hero";
import CTA from "@/components/sections/cta";
import * as Craft from "@/components/craft/layout";
import { Metadata } from "next";

const metadata: Metadata = {
  title: `All Pages | ${fjord.site_name}`,
  description: `All pages from ${fjord.site_name}. ${fjord.site_description}`,
};

export default async function Pages() {
  async function getPages() {
    const res = await fetch(
      `${fjord.wordpress_url}/wp-json/wp/v2/pages?_embed&per_page=${fjord.posts_per_page},
    {
      next: { revalidate: 3600 },
    }`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }

  let data;
  try {
    data = await getPages();
  } catch (error) {
    console.error(error);
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Craft.Main>
      <SecondaryHero title="All Pages" subtitle={`${fjord.site_name} blog`}>
        All pages from {fjord.site_name}. These are all the pages from your
        WordPress.
      </SecondaryHero>

      <Craft.Container>
      {data.map((page: Page) => (
          <Link
            href={`/${page.slug}`}
            className="hover:bg-primary-50 hover:dark:bg-primary-800 flex flex-col gap-2 rounded-r-md border-l-2 p-4 transition-all"
            key={page.id}
          >
            <div className="flex items-baseline gap-2">
              <h3
                className="mb-2 text-lg font-semibold underline underline-offset-4"
                dangerouslySetInnerHTML={{
                  __html: page.title.rendered,
                }}
              ></h3>
              <p suppressHydrationWarning>
                date: {new Date(page.date).toLocaleDateString()}
              </p>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: page.excerpt.rendered,
              }}
            />
          </Link>
        ))}
      </Craft.Container>

      <CTA />
    </Craft.Main>
  );
}
