// Fjord Config
import fjord from "@/fjord.config";

// Component Imports
import * as Craft from "@/components/craft/layout";
import ContentGrid from "@/components/content/content-grid";
import PostCard from "@/components/content/post-card";
import SecondaryHero from "@/components/sections/secondary-hero";
import PaginationWrapper from "@/components/content/pagination-wrapper";
import CTA from "@/components/sections/cta";
import { Separator } from "@/components/ui/separator";

// Next Imports
import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Data Imports
import { fetchPostsByAuthor } from "@/lib/data";

export async function generateStaticParams() {
  const res = await fetch(`${fjord.wordpress_url}/wp-json/wp/v2/users?_embed`, {
    next: { revalidate: 3600 },
  });

  const data: AuthorProps[] = await res.json();

  return data.map((author) => ({
    slug: author?.slug,
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
  } = await fetchPostsByAuthor(params?.slug, page);
  if (!posts) {
    return notFound();
  }
  const lastPage = Math.ceil(totalPosts / fjord.posts_per_page);

  const metadata: Metadata = {
    title: `All Articles by ${author?.name} | ${fjord.site_name}`,
    description: `The latest articles from ${author?.name} on ${fjord.site_name}.`,
  };

  return (
    <Craft.Main>
      <SecondaryHero
        title={`All Articles by ${author?.name}`}
        subtitle={`The latest from ${fjord.site_name}`}
      >
        {author?.description}
      </SecondaryHero>

      <Craft.Section>
        <Craft.Container>
          <ContentGrid id="posts">
            {posts.map((post: PostProps) => (
              <PostCard
                key={post.id}
                post={post}
                tags={post._embedded["wp:term"]?.[0] ?? []}
              />
            ))}
          </ContentGrid>
          <Separator className="my-6 md:my-12" />
          <PaginationWrapper page={page} lastPage={lastPage} />
        </Craft.Container>
      </Craft.Section>
      <CTA />
    </Craft.Main>
  );
}
