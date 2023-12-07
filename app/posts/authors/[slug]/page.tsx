import fjord from "@/fjord.config";
import { notFound } from "next/navigation";
import ContentGrid from "@/components/content/content-grid";
import PostCard from "@/components/content/post-card";
import SecondaryHero from "@/components/sections/secondary-hero";
import Pagination from "@/components/content/pagination";
import Main from "@/components/global/layout/main";
import CTA from "@/components/sections/cta";
import type { Metadata } from "next";

async function getAuthorPosts(slug: string, page: number = 1) {
  const offset = (page - 1) * fjord.posts_per_page;
  const res = await fetch(
    `${fjord.wordpress_url}/wp-json/wp/v2/posts?author_name=${slug}&_embed&per_page=${fjord.posts_per_page}&offset=${offset}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: Post[] = await res.json();
  const totalPosts = Number(res.headers.get("X-WP-Total"));
  const author = data[0]._embedded?.author[0];
  return { data, totalPosts, author };
}

export async function generateStaticParams() {
  const res = await fetch(`${fjord.wordpress_url}/wp-json/wp/v2/users?_embed`, {
    next: { revalidate: 60 },
  });

  const data: Author[] = await res.json();

  return data.map((author) => ({
    slug: author?.slug,
    name: author?.name,
  }));
}

export default async function Page({
  params,
}: {
  params: { slug: string; name: string; page: string };
}) {
  const page = parseInt(params?.page, 10) || 1;
  const {
    data: posts,
    totalPosts,
    author,
  } = await getAuthorPosts(params?.slug, page);
  if (!posts) {
    return notFound();
  }
  const lastPage = Math.ceil(totalPosts / fjord.posts_per_page);

  const metadata: Metadata = {
    title: `All Articles by ${author.name} | ${fjord.site_name}`,
    description: `The latest articles from ${author.name} on ${fjord.site_name}.`,
  };

  return (
    <Main>
      <SecondaryHero
        title={`All Articles by ${author.name}`}
        subtitle={`The latest from ${fjord.site_name}`}
      >
        {author.description}
      </SecondaryHero>

      <ContentGrid id="posts">
        {posts.map((post: Post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </ContentGrid>

      <Pagination page={page} totalPosts={totalPosts} lastPage={lastPage} />

      <CTA />
    </Main>
  );
}
