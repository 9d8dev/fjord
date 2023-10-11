import settings from "@/fjord.json";
import PostCard from "@/components/content/post-card";
import ContentGrid from "@/components/content/content-grid";

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
          full: {
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

async function getPosts() {
  const res = await fetch(
    `https://${settings.url}/wp-json/wp/v2/posts?_embed&per_page=3`
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

export default async function RecentPosts({
  className,
}: {
  className?: string;
}) {
  const data = await getPosts();

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <main className={`px-6 py-24 max-w-7xl m-auto ${className}`}>
      <div className="mx-auto max-w-2xl lg:text-center mb-24">
        <h2 className="text-base font-semibold leading-7 text-slate-600">
          Most Recent Posts
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Read the Latest from blog.
        </p>
      </div>
      <div className="grid max-w-7xl m-auto sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">
        {data.map((post: Post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
