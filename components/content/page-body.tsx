interface PageBodyProps {
  page: {
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

const PageBody = ({ page, date, author }: PageBodyProps) => {
  return (
    <section className="grid gap-6">
      <h1 className="text-4xl" dangerouslySetInnerHTML={{ __html: page.title.rendered }}></h1>
      <p>{date.toDateString()}</p>
      {author && <p>{author.name}</p>}
      {page._embedded?.["wp:featuredmedia"] &&
        page._embedded["wp:featuredmedia"][0]?.media_details?.sizes?.full
          ?.source_url && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={
              page._embedded["wp:featuredmedia"][0].media_details.sizes.full
                .source_url
            }
            alt="page image"
          />
        )}
      <div
        className="prose prose-slate lg:prose-lg"
        dangerouslySetInnerHTML={{ __html: page.content.rendered }}
      ></div>
    </section>
  );
};

export default PageBody;
