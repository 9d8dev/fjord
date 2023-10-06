import settings from "@/fjord.json";
import Link from "next/link";
import Image from "next/image";

type Page = {
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
          medium: {
            source_url: string;
          };
        };
      };
    }>;
  };
};

export default async function Pages() {
  async function getPages() {
    const res = await fetch(
      `https://${settings.url}/wp-json/wp/v2/pages?_embed&per_page=${settings.limit}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }

  let data;
  try {
    data = await getPages();
  } catch (error) {
    console.error(error);
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <main className="p-12">
      <h1 className="mb-12">Pages</h1>

      <div className="grid grid-cols-3 gap-6">
        {data.map((page: Page) => (
          <Link
            href={`pages/${page.slug}`}
            className="p-6 border hover:bg-slate-200 flex flex-col gap-4"
            key={page.id}
          >
            <h3 className="mb-2 text-lg font-semibold">
              title: {page.title.rendered}
            </h3>
            <p>date: {new Date(page.date).toLocaleDateString()}</p>
            <div
              dangerouslySetInnerHTML={{
                __html: page.excerpt.rendered.split(".")[0],
              }}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
