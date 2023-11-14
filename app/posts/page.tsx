import fjord from "@/fjord.config";
import PostCard from "@/components/content/post-card";
import SecondaryHero from "@/components/sections/secondary-hero";
import ContentGrid from "@/components/content/content-grid";
import Main from "@/components/global/layout/main";
import Link from "next/link";
import Section from "@/components/global/layout/section";
import Pagination from "@/components/content/pagination";

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
  const res = await fetch(`${fjord.wordpress_url}/wp-json/wp/v2/tags`);

  if (!res.ok) {
    throw new Error("Failed to fetch tags");
  }

  const tags: Tag[] = await res.json();
  return tags;
}

async function getPosts(perPage: number, offset: number) {
  const res = await fetch(
    `${fjord.wordpress_url}/wp-json/wp/v2/posts?_embed&per_page=${perPage}&offset=${offset}&orderby=date`,
    {
      next: { revalidate: 3600 },
    }
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
  const offset = (page - 1) * fjord.posts_per_page;
  const { data, totalPosts } = await getPosts(fjord.posts_per_page, offset);
  const lastPage = Math.ceil(totalPosts / fjord.posts_per_page);
  const tags = await getTags();

  return (
    <Main>
      <SecondaryHero title="all posts" subtitle={`${fjord.site_name} blog`}>
        all posts from {fjord.site_name}. these are all the posts from your
        WordPress site.
      </SecondaryHero>

      <ContentGrid className="p-6" id="posts">
        {data.map((post: Post) => (
          <PostCard key={post.id} post={post} tags={tags} />
        ))}
      </ContentGrid>

      <Pagination page={page} totalPosts={totalPosts} lastPage={lastPage} />
    </Main>
  );
}
