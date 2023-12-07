import PageBody from "@/components/content/page-body";
import fjord from "@/fjord.config";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Page = {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  date: string;
  slug: string;
  excerpt: {
    rendered: string;
  };
  _embedded: {
    "wp:featuredmedia"?: [
      {
        media_details: {
          sizes: {
            full: {
              source_url: string;
            };
          };
        };
      }
    ];
    author: Array<{
      name: string;
    }>;
  };
};

async function getPage(slug: string) {
  const res = await fetch(
    `${fjord.wordpress_url}/wp-json/wp/v2/pages?slug=${slug}&_embed`,
    {
      next: { revalidate: 60 },
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
    next: { revalidate: 60 },
  });

  const data: Page[] = await res.json();

  return data.map((page) => ({
    slug: page?.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const page: Page = await getPage(params?.slug);
  if (!page) {
    return notFound();
  }
  const date = new Date(page.date);
  const author = page._embedded?.author[0];
  const metadata: Metadata = {
    title: `${page.title.rendered} | ${fjord.site_name}`,
    description: page.excerpt.rendered,
  };

  return (
    <div className="p-6">
      <PageBody page={page} date={date} author={author} />
    </div>
  );
}
