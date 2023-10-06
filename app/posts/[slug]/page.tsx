import settings from "@/config/settings.json";

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

async function getPost(slug: string) {
  console.log(slug, settings.url);
  const res = await fetch(
    `https://${settings.url}/wp-json/wp/v2/posts/?${slug}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data?.[0];
}

export async function generateStaticParams() {
  const res = await fetch(`https://${settings.url}/wp-json/wp/v2/posts`);

  const data: Post[] = await res.json();

  return data.map((post) => ({
    slug: post?.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post: Post = await getPost(params?.slug);
  console.log(post);

  return (
    <div>
      <h1>{post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
    </div>
  );
}
