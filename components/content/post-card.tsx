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
  return (
    <Link
      href={`/posts/${post.slug}`}
      className="flex flex-col gap-2 group transition-all hover:mb-1 hover:-mt-1"
      key={post.id}
    >
      {post._embedded["wp:featuredmedia"]?.[0]?.media_details?.sizes?.full
        ?.source_url && (
          <div className="h-56 relative mb-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={
                post._embedded["wp:featuredmedia"]?.[0]?.media_details?.sizes
                  ?.full?.source_url
              }
              alt="Post image"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg border"
            />
            <div className="hidden transition-all group-hover:flex text-sm items-center absolute bottom-2 right-2 rounded-md bg-primary-200 bg-opacity-75 backdrop-blur-md">
              <p className="sr-only">Read More</p> <ArrowUpRight className="" />
            </div>
          </div>
        )}
      <p className="text-xs text-primary-500 flex items-center gap-1">
        <Calendar className="w-4" />
        {date.toDateString()}
      </p>
      <h3
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        className="mb-2 text-primary-600 text-lg font-semibold group-hover:underline group-hover:underline-offset-4"
      ></h3>

      <div
        className="text-secondary-700 text-sm"
        dangerouslySetInnerHTML={{
          __html: post.excerpt.rendered.split(".")[0] + ".",
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
                    className="px-2 py-1 bg-primary-200 w-fit rounded-md text-sm"
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
