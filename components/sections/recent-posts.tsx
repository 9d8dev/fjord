import settings from "@/fjord.config";
import * as Craft from "@/components/craft/layout";
import PostCard from "@/components/content/post-card";
import fjord from "@/fjord.config";
import { fetchPosts } from "@/lib/data";

export default async function RecentPosts({
  className,
}: {
  className?: string;
}) {
  const posts = await fetchPosts(3, 0);

  return (
    <Craft.Section>
      <Craft.Container>
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">Latest posts from {fjord.site_name}</h3>
          <h4 className="text-2xl font-thin opacity-70">
            Read the latest from our blog.
          </h4>
          <div className="m-auto grid max-w-6xl gap-6 sm:grid-cols-2 md:grid-cols-3 mt-6 md:mt-12">
            {posts.data.map((post: PostProps) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
}
