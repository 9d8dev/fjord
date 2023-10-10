import settings from "@/fjord.json";
import PostCard from "@/components/content/post-card";

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

  return (
    <main className="grid gap-6">
      <h1 className="text-4xl">All Posts</h1>
      <h2 className="text-2xl">All posts from {settings.site_name}. These are all the posts from your WordPress site.</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 my-8">
        {data.map((post: Post) => (
          <PostCard key={post.id} post={post} tags={tags} />
        ))}
      </div>
    </main>
  );
}
