import BackButton from "@/components/global/elements/back-button";

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
    <section className="m-auto grid max-w-6xl gap-6 pb-24">
      <div className="p-6 md:p-8">
        <BackButton />
        <h1
          className="mb-6 text-4xl"
          dangerouslySetInnerHTML={{ __html: page.title.rendered }}
        ></h1>
        <div className="flex gap-2">
          <p suppressHydrationWarning>{date.toDateString()}</p> |
          {author && <p>{author.name}</p>}
        </div>
        {page._embedded?.["wp:featuredmedia"] &&
          page._embedded["wp:featuredmedia"][0]?.media_details?.sizes?.full
            ?.source_url && (
            <img
              placeholder="blur"
              src={
                page._embedded["wp:featuredmedia"][0].media_details.sizes.full
                  .source_url
              }
              alt="page image"
            />
          )}
        <div
          className="prose prose-p:font-light prose-headings:font-normal prose-strong:font-normal lg:prose-lg dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: page.content.rendered }}
        ></div>
      </div>
    </section>
  );
};

export default PageBody;
