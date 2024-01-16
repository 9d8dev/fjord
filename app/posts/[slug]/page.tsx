// Fjord Config
import fjord from "@/fjord.config";

// Component Imports
import Article from "@/components/content/article-wrapper";
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

  const data: PostProps[] = await res.json();

  return data.map((post) => ({
    slug: post?.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post: PostProps = await fetchPostBySlug(params?.slug);
  if (!post) {
    return notFound();
  }

  const date = new Date(post.date);
  const author = post._embedded?.author?.[0] ?? null;

  const metadata: Metadata = {
    title: `${post.title.rendered} | ${fjord.site_name}`,
    description: post.excerpt?.rendered,
  };

  // Ensure that the excerpt and author are not undefined before passing to the Article component
  if (!post.excerpt || !author) {
    return notFound();
  }

  return (
    <div>
      <Article
        post={{
          ...post,
          excerpt: post.excerpt || { rendered: "" },
        }}
        date={date}
        author={author}
      />
      <RecentPosts excludeId={post.id} />
      <CTA />
    </div>
  );
}
