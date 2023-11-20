import BackButton from "@/components/global/elements/back-button";
import RecentPosts from "@/components/content/recent-posts";
interface ArticleProps {
  post: {
    title: {
      rendered: string;
    };
    _embedded?: {
      "wp:featuredmedia"?: [
        {
          media_details: {
            sizes: {
              full: {
                source_url: string;
              };
            };
          };
        },
      ];
    };
    content: {
      rendered: string;
    };
  };
  date: Date;
  author: {
    name: string;
  };
}

const Article = ({ post, date, author }: ArticleProps) => {
  return (
    <>
      <article className="m-auto grid max-w-6xl gap-6 pb-24">
        <div className="p-6">
          <BackButton />
          <h1
            className="mb-6 text-4xl"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          ></h1>
          <div className="flex gap-2">
            <p>{date.toDateString()}</p> |{author && <p>{author.name}</p>}
          </div>
          {post._embedded?.["wp:featuredmedia"] &&
            post._embedded["wp:featuredmedia"][0]?.media_details?.sizes?.full
              ?.source_url && (
              <div className="relative my-12 h-96 w-full md:h-[500px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  placeholder="blur"
                  className="absolute left-0 top-0 h-full w-full object-cover"
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
      <RecentPosts />
    </>
  );
};

export default Article;
