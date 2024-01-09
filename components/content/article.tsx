import * as Craft from "@/components/craft/layout";
import Link from "next/link";
import BackButton from "../global/elements/back-button";

const Article = ({ post, date, author }: ArticleProps) => {
  return (
    <Craft.Section className="!pt-0">
      <Craft.Container>
        <article className="grid gap-6">
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
        </article>

        {/* About the Author Craft.Section */}
        <div className="flex gap-6 md:max-w-lg items-center p-6 bg-secondary-200 dark:bg-secondary-800 rounded-lg mt-12">
          <img
            className="w-24 h-24 rounded-full"
            src={author.avatar_urls?.[96]}
            alt={`profile icon of ${author.name}`}
          />
          <div className="grid gap-2 py-4">
            <p className="text-xs opacity-70">About the Author</p>
            <Link
              className="block text-2xl hover:opacity-70 transition-all"
              href={`/posts/authors/${author.slug}`}
            >
              {author.name}
            </Link>{" "}
            <p>{author.description}</p>
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default Article;
