import settings from "@/fjord.json";
import Link from "next/link";

type Author = {
  id: number;
  name: string;
  posts: Array<Post>;
};

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

export default async function AuthorPosts() {
  async function getAuthorPosts() {
    const res = await fetch(
      `https://${settings.url}/wp-json/wp/v2/users?_embed&per_page=${settings.limit}`
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
            <Link href={`/author/${author.id}`}>
              <p>{author.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
