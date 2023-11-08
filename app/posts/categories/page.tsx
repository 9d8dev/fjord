import fjord from "@/fjord.config";
import Link from "next/link";

type Category = {
  id: number;
  name: string;
  slug: string;
};

export default async function CategoryPosts() {
  async function getCategoryPosts() {
    const res = await fetch(
      `${fjord.wp_url}/wp-json/wp/v2/categories?_embed&per_page=${fjord.per_page}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }

  let data;
  try {
    data = await getCategoryPosts();
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
      <h1 className="mb-12">Category Posts</h1>
      <ul>
        {data.map((category: Category) => (
          <li key={category.id}>
            <Link href={`/category/${category.slug}`}>
              <p>{category.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
