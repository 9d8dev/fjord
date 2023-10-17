import settings from "@/fjord.json";
import PostCard from "@/components/content/post-card";
import SecondaryHero from "@/components/sections/secondary-hero";
import ContentGrid from "@/components/content/content-grid";
import Link from "next/link";

type Post = {
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
          full: {
            source_url: string;
          };
        };
      };
    }>;
  };
  tags: Array<number>;
};

type Tag = {
  id: number;
  name: string;
};

async function getTags() {
  const res = await fetch(`${settings.wp_url}/wp-json/wp/v2/tags`);

  if (!res.ok) {
    throw new Error("Failed to fetch tags");
  }

  const tags: Tag[] = await res.json();
  return tags;
}

async function getPosts(perPage: number, offset: number) {
  const res = await fetch(
    `${settings.wp_url}/wp-json/wp/v2/posts?_embed&per_page=${perPage}&offset=${offset}&orderby=date`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: Post[] = await res.json();
  const totalPosts = Number(res.headers.get("X-WP-Total"));

  // Sort posts by date
  data.sort(
    (a: Post, b: Post) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return { data, totalPosts };
}

export default async function Posts({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page =
    typeof searchParams.page === "string" && +searchParams.page > 1
      ? +searchParams.page
      : 1;
  const offset = (page - 1) * settings.per_page;
  const { data, totalPosts } = await getPosts(settings.per_page, offset);
  const lastPage = Math.ceil(totalPosts / settings.per_page);
  const tags = await getTags();

  return (
    <main className="grid gap-6">
      <SecondaryHero title="All Posts" subtitle={`${settings.site_name} blog`}>
        All posts from {settings.site_name}. These are all the posts from your
        WordPress site.
      </SecondaryHero>

      <ContentGrid className="p-6" id="posts">
        {data.map((post: Post) => (
          <PostCard key={post.id} post={post} tags={tags} />
        ))}
        {/* Pagination */}
      </ContentGrid>

      <section className="flex justify-between items-center max-w-7xl m-auto w-full p-6 border-t">
        <p className="text-sm text-secondary-700">
          Showing{" "}
          <span className="font-semibold">
            {(page - 1) * settings.per_page + 1}
          </span>{" "}
          to{" "}
          <span className="font-semibold">
            {Math.min(page * settings.per_page, totalPosts)}
          </span>{" "}
          of <span className="font-semibold">{totalPosts}</span> posts
        </p>
        <div className="space-x-2 ">
          {page === 1 ? (
            <button className="bg-white hover:bg-secondary-50 border-secondary-300 border px-3 py-2 inline-flex items-center justify-center text-sm text-secondary-900 font-semibold rounded-md opacity-50 pointer-events-none">
              Previous
            </button>
          ) : (
            <Link
              href={
                page > 2 ? `/posts/?page=${page - 1}#posts` : "/posts#posts"
              }
              className="bg-white hover:bg-secondary-50 border-secondary-300 border px-3 py-2 inline-flex items-center justify-center text-sm text-secondary-900 font-semibold rounded-md"
            >
              Previous
            </Link>
          )}
          {page < lastPage ? (
            <Link
              href={
                page < lastPage
                  ? `/posts/?page=${page + 1}#posts`
                  : `/posts/?page=${page}#posts`
              }
              className="bg-white hover:bg-secondary-50 border-secondary-300 border px-3 py-2 inline-flex items-center justify-center text-sm text-secondary-900 font-semibold rounded-md"
            >
              Next
            </Link>
          ) : (
            <button className="bg-white hover:bg-secondary-50 border-secondary-300 border px-3 py-2 inline-flex items-center justify-center text-sm text-secondary-900 font-semibold rounded-md opacity-50 pointer-events-none">
              Next
            </button>
          )}
        </div>
      </section>
    </main>
  );
}
