import BackButton from "../global/back-button";

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
    <section className="grid gap-6 pb-24 max-w-7xl m-auto">
      <BackButton />
      <h1
        className="text-4xl mb-6"
        dangerouslySetInnerHTML={{ __html: page.title.rendered }}
      ></h1>
      <div className="flex gap-2">
        <p>{date.toDateString()}</p> |{author && <p>{author.name}</p>}
      </div>
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
        className="prose prose-slate prose-headings:font-normal lg:prose-lg"
        dangerouslySetInnerHTML={{ __html: page.content.rendered }}
      ></div>
    </section>
  );
};

export default PageBody;
