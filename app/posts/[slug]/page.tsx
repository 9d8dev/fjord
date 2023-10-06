import settings from "@/fjord.json";
import { parse } from "node-html-parser";

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
    "wp:featuredmedia"?: Array<{
      media_details: {
        sizes: {
          full: {
            source_url: string;
          };
        };
      };
    }>;
    author: Array<{
      name: string;
    }>;
  };
};

async function getPost(slug: string) {
  const res = await fetch(
    `https://${settings.url}/wp-json/wp/v2/posts?slug=${slug}&_embed`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data?.[0];
}

export async function generateStaticParams() {
  const res = await fetch(`https://${settings.url}/wp-json/wp/v2/posts?_embed`);

  const data: Post[] = await res.json();

  return data.map((post) => ({
    slug: post?.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post: Post = await getPost(params?.slug);
  const date = new Date(post.date);
  const author = post._embedded?.author[0];

  console.log(author?.name);

  // Parse the HTML content of the post
  const root = parse(post.content.rendered);
  // Extract all image URLs
  const imageUrls = root
    .querySelectorAll("img")
    .map((img) => img.getAttribute("src"));

  return (
    <div>
      <h1>{post.title.rendered}</h1>
      <p>{date.toDateString()}</p>
      {author && <p>{author.name}</p>}
      {post._embedded?.["wp:featuredmedia"] &&
        post._embedded["wp:featuredmedia"][0]?.media_details?.sizes?.full
          ?.source_url && (
          <img
            src={
              post._embedded["wp:featuredmedia"][0].media_details.sizes.full
                .source_url
            }
            alt="Post image"
          />
        )}
      {imageUrls.map((url, index) => (
        <img key={index} src={url} alt={`Post content image ${index}`} />
      ))}
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      ></div>
    </div>
  );
}
