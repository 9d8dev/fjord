import BackButton from "@/components/global/elements/back-button";
import Section from "@/components/global/layout/section";
import Container from "@/components/global/layout/container";
import Link from "next/link";

const Article = ({ post, date, author }: ArticleProps) => {
  return (
    <Section className="!pt-0">
      <Container>
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
        <div>
          <p>
            About the Author:{" "}
            <Link href={`/posts/authors/${author.slug}`}>{author.name}</Link>{" "}
          </p>
          <p>{author.description}</p>
          <img
            src={author.avatar_urls?.[96]}
            alt={`profile icon of ${author.name}`}
          />
          {author.social_links && (
            <div className="flex gap-2">
              {author.social_links.linkedin && (
                <a
                  href={author.social_links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              )}
              {author.social_links.facebook && (
                <a
                  href={author.social_links.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              )}
              {author.social_links.twitter && (
                <a
                  href={author.social_links.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              )}
              {author.social_links.instagram && (
                <a
                  href={author.social_links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              )}
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};

export default Article;
