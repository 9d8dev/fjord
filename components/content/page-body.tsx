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
    <section className="grid gap-6 pb-24 max-w-6xl m-auto">
      <BackButton />
      <h1
        className="text-4xl mb-6"
        dangerouslySetInnerHTML={{ __html: page.title.rendered }}
      ></h1>
      <div className="flex gap-2">
        <p suppressHydrationWarning>{date.toDateString()}</p> |
        {author && <p>{author.name}</p>}
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
        className="prose prose-headings:font-normal prose-strong:font-normal lg:prose-lg prose-headings:text-primary-700 prose-headings:dark:text-primary-300 text-secondary-900 dark:text-secondary-100 prose-a:text-secondary-900 prose-a:dark:text-secondary-100 prose-figure:text-secondary-900 prose-figure:dark:text-secondary-100 prose-code:text-secondary-900 prose-code:dark:text-secondary-200"
        dangerouslySetInnerHTML={{ __html: page.content.rendered }}
      ></div>
    </section>
  );
};

export default PageBody;
