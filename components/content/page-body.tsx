import BackButton from "@/components/global/elements/back-button";
import Image from "next/image";
import * as Craft from "@/components/craft/layout";

const PageBody = ({ page, date, author }: PageProps) => {
  return (
    <Craft.Section>
      <Craft.Container>
        <BackButton />
        <h1
          className="mb-6 text-4xl"
          dangerouslySetInnerHTML={{ __html: page.title.rendered }}
        ></h1>
        <div className="flex gap-2">
          <p>{new Date(date).toDateString()}</p> |
          {author && <p>{author.name}</p>}
        </div>
        {page._embedded?.["wp:featuredmedia"] &&
          page._embedded["wp:featuredmedia"][0]?.media_details?.sizes?.full
            ?.source_url && (
            <Image
              placeholder="blur"
              src={
                page._embedded["wp:featuredmedia"][0].media_details.sizes.full
                  .source_url
              }
              width={500}
              height={500}
              alt="page image"
              layout="responsive"
            />
          )}
        <div
          className="prose prose-p:font-light prose-headings:font-normal prose-strong:font-normal lg:prose-lg dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: page.content.rendered }}
        ></div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default PageBody;
