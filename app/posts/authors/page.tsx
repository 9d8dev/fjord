import fjord from "@/fjord.config";
import Link from "next/link";

export default async function AuthorPosts() {
  async function getAuthorPosts() {
    const res = await fetch(
      `${fjord.wordpress_url}/wp-json/wp/v2/users?_embed`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }

  let data;
  try {
    data = await getAuthorPosts();
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
      <h1 className="mb-12">Author Posts</h1>
      <ul>
        {data.map((author: Author) => (
          <li key={author.id}>
            <Link href={`./authors/${author.slug}`}>
              <img src={author.avatar_urls["96"]} alt={author.name} />
              <p>{author.name}</p>
              <p>{author.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
