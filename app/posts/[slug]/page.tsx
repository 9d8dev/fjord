import Article from "@/components/content/article";
import fjord from "@/fjord.config";
import { notFound } from "next/navigation";

type Post = {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  date: string;
  slug: string;
  excerpt: {
    rendered: string;
  };
  _embedded: {
    "wp:featuredmedia"?: [
      {
        media_details: {
          sizes: {
            full: {
              source_url: string;
            };
          };
        };
      }
    ];
    author: Array<{
      name: string;
    }>;
  };
};

async function getPost(slug: string) {
  const res = await fetch(
    `${fjord.wp_url}/wp-json/wp/v2/posts?slug=${slug}&_embed`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data?.[0];
}

export async function generateStaticParams() {
  const res = await fetch(`${fjord.wp_url}/wp-json/wp/v2/posts?_embed`);

  const data: Post[] = await res.json();

  return data.map((post) => ({
    slug: post?.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post: Post = await getPost(params?.slug);
  if (!post) {
    return notFound();
  }
  const date = new Date(post.date);
  const author = post._embedded?.author[0];

  return (
    <div>
      <Article post={post} date={date} author={author} />
    </div>
  );
}
