import fjord from "@/fjord.config";
import Link from "next/link";
import SecondaryHero from "@/components/sections/secondary-hero";
import CTA from "@/components/sections/cta";

type Page = {
  id: number;
  title: {
    rendered: string;
  };
  date: string;
  slug: string;
  excerpt: {
    rendered: string;
  };
  _embedded: {
    "wp:featuredmedia": Array<{
      media_details: {
        sizes: {
          medium: {
            source_url: string;
          };
        };
      };
    }>;
  };
};

export default async function Pages() {
  async function getPages() {
    const res = await fetch(
      `${fjord.wp_url}/wp-json/wp/v2/pages?_embed&per_page=${fjord.per_page}`
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
    <main className="grid gap-6 m-auto">
      <SecondaryHero title="All Pages" subtitle={`${fjord.site_name} blog`}>
        All pages from {fjord.site_name}. These are all the pages from your
        WordPress site.
      </SecondaryHero>

      <div className="grid gap-6 p-6 max-w-7xl m-auto">
        {data.map((page: Page) => (
          <Link
            href={`/${page.slug}`}
            className="hover:bg-primary-50 transition-all rounded-r-md flex flex-col gap-2 p-4 border-l-2"
            key={page.id}
          >
            <div className="flex items-baseline gap-2">
              <h3
                className="mb-2 text-lg underline underline-offset-4 font-semibold"
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
      </div>
      <CTA />
    </main>
  );
}
