// Fjord Config
import fjord from "@/fjord.config";

// Component Imports
import Article from "@/components/content/article";
import RecentPosts from "@/components/sections/recent-posts";
import CTA from "@/components/sections/cta";

// Next Imports
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Data Imports
import { fetchPostBySlug } from "@/lib/data";

export async function generateStaticParams() {
  const res = await fetch(`${fjord.wordpress_url}/wp-json/wp/v2/posts?_embed`, {
    next: { revalidate: 3600 },
  });

  const data: Post[] = await res.json();

  return data.map((post) => ({
    slug: post?.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post: Post = await fetchPostBySlug(params?.slug);
  if (!post) {
    return notFound();
  }

  const date = new Date(post.date);
  const author = post._embedded?.author[0];

  const metadata: Metadata = {
    title: `${post.title.rendered} | ${fjord.site_name}`,
    description: post.excerpt.rendered,
  };

  return (
    <div>
      <Article post={post} date={date} author={author} />
      <RecentPosts />
      <CTA />
    </div>
  );
}
