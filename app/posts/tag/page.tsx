import settings from "@/config/settings.json";
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

  let data;
  try {
    data = await getPostsByTag();
  } catch (error) {
    console.error(error);
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <main className="p-12">
      <h1 className="mb-12">Posts</h1>

      <div className="grid grid-cols-3 gap-6">
        {data.map((post: Post) => (
          <Link
            href={`posts/${post.slug}`}
            className="p-6 border hover:bg-slate-200 flex flex-col gap-4"
            key={post.id}
          >
            <img
              src={
                post._embedded["wp:featuredmedia"][0].media_details.sizes.medium
                  .source_url
              }
              width={1080}
              height={400}
              alt="Post image"
            />
            <h3 className="mb-2 text-lg font-semibold" dangerouslySetInnerHTML={{
              __html: post.title.rendered,
            }}>
            </h3>
            <p>date: {new Date(post.date).toLocaleDateString()}</p>
            <div
              dangerouslySetInnerHTML={{
                __html: post.excerpt.rendered.split(".")[0],
              }}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
