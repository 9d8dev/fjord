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
    <article>
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h1>
      <p>{date.toDateString()}</p>
      {author && <p>{author.name}</p>}
      {post._embedded?.["wp:featuredmedia"] &&
        post._embedded["wp:featuredmedia"][0]?.media_details?.sizes?.full
          ?.source_url && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
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
