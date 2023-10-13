import settings from "@/fjord.json";
import Link from "next/link";

type Tag = {
  id: number;
  name: string;
  slug: string;
};

export default async function TagPosts() {
  async function getTagPosts() {
    const res = await fetch(
      `${settings.url}/wp-json/wp/v2/tags?_embed&per_page=${settings.per_page}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }

  let data;
  try {
    data = await getTagPosts();
  } catch (error) {
    console.error(error);
    return <div>Error: Failed to fetch data</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(data)) {
    console.error("Invalid data format");
    return <div>Error: Invalid data format</div>;
  }

  return (
    <main className="p-12">
      <h1 className="mb-12">Tag Posts</h1>
      <ul>
        {data.map((tag: Tag) => (
          <li key={tag.id}>
            <Link href={`/tag/${tag.slug}`}>
              <p>{tag.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
