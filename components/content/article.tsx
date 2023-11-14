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
        }
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
      <article className="grid gap-6 pb-24 max-w-6xl m-auto">
        <div className="p-6">
          <BackButton />
          <h1
            className="text-4xl mb-6"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          ></h1>
          <div className="flex gap-2">
            <p>{date.toDateString()}</p> |{author && <p>{author.name}</p>}
          </div>
          {post._embedded?.["wp:featuredmedia"] &&
            post._embedded["wp:featuredmedia"][0]?.media_details?.sizes?.full
              ?.source_url && (
              <div className="w-full h-96 md:h-[500px] relative my-12">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src={
                    post._embedded["wp:featuredmedia"][0].media_details.sizes
                      .full.source_url
                  }
                  alt="Post image"
                />
              </div>
            )}
          <div
            className="prose prose-p:font-light prose-headings:font-normal prose-strong:font-normal lg:prose-lg prose-headings:text-primary-700 prose-headings:dark:text-primary-300 text-secondary-900 dark:text-secondary-100 prose-a:text-secondary-900 prose-a:dark:text-secondary-100 prose-figure:text-secondary-900 prose-figure:dark:text-secondary-100 prose-code:text-secondary-900 prose-code:dark:text-secondary-200 prose-blockquote:text-secondary-900 prose-blockquote:dark:text-secondary-100"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          ></div>
        </div>
      </article>
      <RecentPosts />
    </>
  );
};

export default Article;
