import settings from "@/fjord.json";
import Link from "next/link";

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
  tags: Array<number>;
};

type Tag = {
  id: number;
  name: string;
};

async function getTags() {
  const res = await fetch(`https://${settings.url}/wp-json/wp/v2/tags`);

  if (!res.ok) {
    throw new Error("Failed to fetch tags");
  }

  const tags: Tag[] = await res.json();
  return tags;
}

async function getPosts() {
  const res = await fetch(
    `https://${settings.url}/wp-json/wp/v2/posts?_embed&per_page=${settings.limit}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const posts: Post[] = await res.json();
  // Sort posts by date
  posts.sort(
    (a: Post, b: Post) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return posts;
}

export default async function Posts() {
  const data = await getPosts();
  const tags = await getTags();
  const date = new Date(data[0]?.date);

  return (
    <main>
      <h1 className="mb-12">Posts</h1>

      <div className="grid grid-cols-3 gap-6">
        {data.map((post: Post) => (
          <Link
            href={`posts/${post.slug}`}
            className="p-6 border hover:bg-slate-200 flex flex-col gap-4"
            key={post.id}
          >
            {post._embedded["wp:featuredmedia"]?.[0]?.media_details?.sizes
              ?.medium?.source_url && (
                <img
                  src={
                    post._embedded["wp:featuredmedia"]?.[0]?.media_details?.sizes
                      ?.medium?.source_url
                  }
                  alt="Post image"
                />
              )}
            <h3
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              className="mb-2 text-lg font-semibold"
            ></h3>
            <p>{date.toDateString()}</p>
            <div
              dangerouslySetInnerHTML={{
                __html: post.excerpt.rendered.split(".")[0],
              }}
            />
            {post.tags && post.tags.length > 0 && (
              <div>
                <h4>Tags:</h4>
                <ul>
                  {post.tags.map((tagId, index) => {
                    const tag = tags.find((t) => t.id === tagId);
                    return <li key={index}>{tag?.name}</li>;
                  })}
                </ul>
              </div>
            )}
          </Link>
        ))}
      </div>
    </main>
  );
}
