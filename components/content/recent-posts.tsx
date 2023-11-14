import settings from "@/fjord.config";
import Section from "../global/layout/section";
import PostCard from "@/components/content/post-card";
import Container from "../global/layout/container";

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
    <Section>
      <Container>
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">latest blog posts</h3>
          <p>read the latest from our blog.</p>
          <div className="m-auto grid max-w-6xl gap-6 sm:grid-cols-2 md:grid-cols-3">
            {data.map((post: Post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
