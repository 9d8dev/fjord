import BackButton from "@/components/global/back-button";
import RecentPosts from "@/components/sections/recent-posts";

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
    <article className="grid gap-6 max-w-7xl m-auto">
      <div className="p-6">
        <BackButton />
        <h1
          className="text-4xl"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        ></h1>
        <div className="flex gap-2">
          <p>{date.toDateString()}</p> |{author && <p>{author.name}</p>}
        </div>
        {post._embedded?.["wp:featuredmedia"] &&
          post._embedded["wp:featuredmedia"][0]?.media_details?.sizes?.full
            ?.source_url && (
            // eslint-disable-next-line @next/next/no-img-element
            <div className="w-full h-96 relative my-12">
              <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={
                  post._embedded["wp:featuredmedia"][0].media_details.sizes.full
                    .source_url
                }
                alt="Post image"
              />
            </div>
          )}
        <div
          className="prose prose-slate lg:prose-lg"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        ></div>
      </div>
      <RecentPosts className="bg-slate-200" />
    </article>
  );
};

export default Article;
