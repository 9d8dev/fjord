import settings from "@/fjord.config";
import PostCard from "@/components/content/post-card";

const content = {
  description: "Most Recent Posts",
  title: "Read the latest from our blog.",
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
    `${settings.wordpress_url}/wp-json/wp/v2/posts?_embed&per_page=3`
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
    <main className={`m-auto px-6 py-24 ${className}`}>
      <div className="mx-auto mb-24 max-w-7xl lg:text-center">
        <h2 className="text-primary-600 text-base font-semibold leading-7">
          {content.description}
        </h2>
        <p className="text-secondary-900 mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          {content.title}
        </p>
      </div>
      <div className="m-auto my-8 grid max-w-7xl gap-6 sm:grid-cols-2 md:grid-cols-3">
        {data.map((post: Post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}
