import Link from "next/link";
import React from "react";
import { Calendar, ArrowUpRight } from "lucide-react";

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

interface PostCardProps {
  post: Post;
  tags?: Tag[];
}

const PostCard: React.FC<PostCardProps> = ({ post, tags = [] }) => {
  const date = new Date(post.date);
  const featuredMedia =
    post._embedded["wp:featuredmedia"]?.[0]?.media_details?.sizes?.full
      ?.source_url;
  const firstSentenceOfExcerpt = post.excerpt.rendered.split(".")[0] + ".";

  return (
    <Link
      href={`/posts/${post.slug}`}
      className="group flex flex-col gap-2 transition-all hover:-mt-1 hover:mb-1"
      key={post.id}
    >
      {featuredMedia && (
        <div className="relative mb-2 h-56">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={featuredMedia}
            alt="Post image"
            placeholder="blur"
            className="absolute left-0 top-0 h-full w-full object-cover"
          />
          <div className="bg-primary-200 absolute bottom-2 right-2 hidden items-center bg-opacity-75 text-sm backdrop-blur-md transition-all group-hover:flex">
            <p className="sr-only">Read More</p>{" "}
            <ArrowUpRight className="dark:text-secondary-800" />
          </div>
        </div>
      )}
      <p className="text-primary-500 dark:text-primary-300 flex items-center gap-1 text-xs">
        <Calendar suppressHydrationWarning className="w-3" />
        {date.toDateString()}
      </p>
      <h3
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        className="text-secondary-600 dark:text-secondary-100 mb-2 text-lg font-semibold group-hover:underline group-hover:underline-offset-4"
      ></h3>

      <div
        className="text-secondary-700 dark:text-secondary-400 text-sm"
        dangerouslySetInnerHTML={{
          __html: firstSentenceOfExcerpt,
        }}
      />

      {post.tags && post.tags.length > 0 && (
        <div>
          <ul>
            {post.tags.map((tagId, index) => {
              const tag = tags.find((t) => t.id === tagId);
              return (
                <li key={index}>
                  <Link
                    className="bg-primary-200 w-fit px-2 py-1 text-sm"
                    href="/"
                  >
                    {tag?.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </Link>
  );
};

export default PostCard;
