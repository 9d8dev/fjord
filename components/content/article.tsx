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
    <article className="grid gap-6">
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
          <img
            className="my-8"
            src={
              post._embedded["wp:featuredmedia"][0].media_details.sizes.full
                .source_url
            }
            alt="Post image"
          />
        )}
      <div
        className="prose prose-slate lg:prose-lg"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      ></div>
    </article>
  );
};

export default Article;
