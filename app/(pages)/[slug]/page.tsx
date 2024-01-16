import fjord from "@/fjord.config";
import { Metadata } from "next";
import { fetchPageBySlug } from "@/lib/data";
import CTA from "@/components/sections/cta";
import * as Craft from "@/components/craft/layout";
import { notFound } from "next/navigation";

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
  const page: PageProps = await fetchPageBySlug(params?.slug);
  if (!page) {
    return notFound();
  }

  const date = new Date(page.date);
  const author = page._embedded?.author?.[0] ?? null;

  const metadata: Metadata = {
    title: `${page.title.rendered} | ${fjord.site_name}`,
    description: page.excerpt?.rendered,
  };

  return (
    <Craft.Main>
      <Craft.Section>
        <Craft.Container>
          <h1 dangerouslySetInnerHTML={{ __html: page.title.rendered }}></h1>
          <div
            dangerouslySetInnerHTML={{ __html: page.content.rendered }}
          ></div>
        </Craft.Container>
      </Craft.Section>

      <CTA />
    </Craft.Main>
  );
}
