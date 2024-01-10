import Link from "next/link";
import React from "react";
import { ArrowTopRightIcon, CalendarIcon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";

const PostCard: React.FC<PostCardProps> = ({ post, tags = [] }) => {
  const featuredMedia =
    post._embedded["wp:featuredmedia"]?.[0]?.media_details?.sizes?.full
      ?.source_url;
  const firstSentenceOfExcerpt = post.excerpt.rendered.split(".")[0] + ".";

  return (
    <Link
      id="post-card"
      href={`/posts/${post.slug}`}
      className="group flex flex-col not-prose gap-2 transition-all hover:-mt-1 hover:mb-1"
      key={post.id}
    >
      {featuredMedia && (
        <div className="relative mb-2 h-56 overflow-hidden border shadow-sm rounded-md transition-all group-hover:opacity-75">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={featuredMedia}
            alt="Post image"
            className="absolute left-0 top-0 h-full w-full object-cover"
          />
          <div className="bg-primary absolute bottom-2 right-2 hidden items-center bg-opacity-75 text-sm backdrop-blur-md transition-all group-hover:flex rounded-sm">
            <p className="sr-only">Read More</p>{" "}
            <ArrowTopRightIcon className="dark:text-secondary w-5 h-5" />
          </div>
        </div>
      )}

      <h3
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        className="text-primary-500 mb-2 text-xl"
      ></h3>

      <Separator />

      <div
        className="opacity-75 text-sm"
        dangerouslySetInnerHTML={{
          __html: firstSentenceOfExcerpt,
        }}
      />
    </Link>
  );
};

export default PostCard;
