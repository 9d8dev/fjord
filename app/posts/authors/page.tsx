import fjord from "@/fjord.config";
import Link from "next/link";
import SecondaryHero from "@/components/sections/secondary-hero";
import Section from "@/components/global/layout/section";
import Container from "@/components/global/layout/container";
import ContentGrid from "@/components/content/content-grid";

export default async function AuthorPosts() {
  async function getAuthorPosts() {
    const res = await fetch(
      `${fjord.wordpress_url}/wp-json/wp/v2/users?_embed`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }

  let data;
  try {
    data = await getAuthorPosts();
  } catch (error) {
    console.error(error);
    return <div>Error: Failed to fetch data</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(data)) {
    console.error("Invalid data format");
    return <div>Error: Invalid data format</div>;
  }

  return (
    <main className="p-12">
      <SecondaryHero
        title={`${fjord.site_name} Authors`}
        subtitle="Our Writers and Authors"
      >
        Select an Author below to see a list of their posts.
      </SecondaryHero>

      <ContentGrid className="lg:grid-cols-2">
        {data.map((author: Author) => (
          <div key={author.id}>
            <Link
              className="flex items-center gap-4 rounded-lg md:rounded-xl border bg-secondary-100 dark:bg-secondary-900 transition-all hover:bg-secondary-200 dark:hover:bg-secondary-800 p-6"
              href={`./authors/${author.slug}`}
            >
              <img
                className="rounded-full"
                src={author.avatar_urls["96"]}
                alt={author.name}
              />
              <div className="grid gap-2">
                <p className="text-2xl text-primary-500">{author.name}</p>
                <p className="opacity-70">{author.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </ContentGrid>
    </main>
  );
}
