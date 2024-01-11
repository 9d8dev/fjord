import PageBody from "@/components/content/page-body";
import fjord from "@/fjord.config";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { fetchPage } from "@/lib/data";

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
  const page: PageProps = await fetchPage(params?.slug);
  if (!page) {
    return { notFound: true };
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
