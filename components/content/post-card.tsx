import Link from "next/link";
import React from "react";
import { ArrowTopRightIcon, CalendarIcon } from "@radix-ui/react-icons";

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
            className="absolute left-0 top-0 h-full w-full object-cover rounded-md"
          />
          <div className="bg-primary-200 absolute bottom-2 right-2 hidden items-center bg-opacity-75 text-sm backdrop-blur-md transition-all group-hover:flex rounded-sm">
            <p className="sr-only">Read More</p>{" "}
            <ArrowTopRightIcon className="dark:text-secondary-800 w-5 h-5" />
          </div>
        </div>
      )}
      <p className="text-secondary-500 flex items-center gap-1 text-xs">
        <CalendarIcon suppressHydrationWarning className="w-3" />
        {date.toDateString()}
      </p>
      <h3
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        className="text-primary-500 mb-2 text-xl group-hover:underline group-hover:underline-offset-4"
      ></h3>

      <div
        className="text-secondary-700 dark:text-secondary-400 text-sm"
        dangerouslySetInnerHTML={{
          __html: firstSentenceOfExcerpt,
        }}
      />
    </Link>
  );
};

export default PostCard;
