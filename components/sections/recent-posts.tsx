import settings from "@/fjord.config";
import * as Craft from "@/components/craft/layout";
import PostCard from "@/components/content/post-card";
import fjord from "@/fjord.config";

async function getPosts() {
  const res = await fetch(
    `${settings.wordpress_url}/wp-json/wp/v2/posts?_embed&per_page=3`,
    {
      next: { revalidate: 3600 },
    }
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
    <Craft.Section>
      <Craft.Container>
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">Latest posts from {fjord.site_name}</h3>
          <h4 className="text-2xl font-thin opacity-70">
            Read the latest from our blog.
          </h4>
          <div className="m-auto grid max-w-6xl gap-6 sm:grid-cols-2 md:grid-cols-3 mt-6 md:mt-12">
            {data.map((post: Post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
}
