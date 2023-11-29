import BackButton from "@/components/global/elements/back-button";
import RecentPosts from "@/components/sections/recent-posts";
import Section from "@/components/global/layout/section";
import CTA from "../sections/cta";
import Link from "next/link";

const Article = ({ post, date, author }: ArticleProps) => {
  return (
    <>
      <Section className="!pt-0">
        <article className="grid gap-6">
          <div className="p-6 md:p-8">
            <BackButton />
            <h1
              className="mb-6 text-4xl"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            ></h1>
            <div className="flex gap-2">
              <p>{date.toDateString()}</p> |
              {author && (
                <Link
                  className="transition-all hover:opacity-70"
                  href={`/posts/authors/${author.slug}`}
                >
                  {author.name}
                </Link>
              )}
            </div>
            {post._embedded?.["wp:featuredmedia"] &&
              post._embedded["wp:featuredmedia"][0]?.media_details?.sizes?.full
                ?.source_url && (
                <div className="relative my-12 h-96 w-full md:h-[500px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    placeholder="blur"
                    className="absolute left-0 top-0 h-full w-full object-cover rounded-lg"
                    src={
                      post._embedded["wp:featuredmedia"][0].media_details.sizes
                        .full.source_url
                    }
                    alt="Post image"
                  />
                </div>
              )}
            <div
              className="prose prose-p:font-light prose-headings:font-normal prose-strong:font-normal lg:prose-lg dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            ></div>
          </div>
        </article>
      </Section>
      <RecentPosts />
      <CTA />
    </>
  );
};

export default Article;
