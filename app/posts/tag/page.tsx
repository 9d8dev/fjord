import settings from "@/fjord.json";
import Link from "next/link";
import Image from "next/image";

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
          medium: {
            source_url: string;
          };
        };
      };
    }>;
  };
};

type Tag = {
  id: number;
  name: string;
  slug: string;
};

export default async function Posts({ tagId }: { tagId: number }) {
  async function getPostsByTag() {
    const res = await fetch(
      `https://${settings.url}/wp-json/wp/v2/posts?_embed&tags=${tagId}&per_page=${settings.limit}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }

  async function getAllTags() {
    const res = await fetch(`https://${settings.url}/wp-json/wp/v2/tags`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }

  let data;
  let tags;
  try {
    data = await getPostsByTag();
    tags = await getAllTags();
  } catch (error) {
    console.error(error);
  }

  if (!data || !tags) {
    return <div>Loading...</div>;
  }

  return (
    <main className="p-12">
      <h1 className="mb-12">Tags</h1>
      <ul>
        {tags.map((tag: Tag) => (
          <li key={tag.id}>
            <Link href={`/posts/tag/${tag.slug}`}>
              <a>{tag.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
