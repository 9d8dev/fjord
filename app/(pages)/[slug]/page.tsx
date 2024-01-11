import PageBody from "@/components/content/page-body";
import fjord from "@/fjord.config";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

async function getPage(slug: string) {
  const res = await fetch(
    `${fjord.wordpress_url}/wp-json/wp/v2/pages?slug=${slug}&_embed`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data?.[0];
}

export async function generateStaticParams() {
  const res = await fetch(`${fjord.wordpress_url}/wp-json/wp/v2/pages?_embed`, {
    next: { revalidate: 3600 },
  });

  const data: PageProps[] = await res.json();

  return data.map((page) => ({
    slug: page?.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const page: PageProps = await getPage(params?.slug);
  if (!page) {
    return notFound();
  }
  const date = new Date(page.date);
  const metadata: Metadata = {
    title: `${page.title.rendered} | ${fjord.site_name}`,
    description: page.excerpt.rendered,
  };

  return (
    <div className="p-6">
      <PageBody {...page} date={date.toISOString()} />
    </div>
  );
}
