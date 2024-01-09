import fjord from "@/fjord.config";
import * as Craft from "@/components/craft/layout";
import ButtonLink from "@/components/global/elements/button-link";

// Change the content here by editing `@/fjord.config.ts`

const CTA = () => {
  return (
    <Craft.Section>
      <Craft.Container className="bg-primary-200 dark:bg-primary-950 rounded-lg md:rounded-xl p-6 md:p-12">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">{fjord.content.main_cta}</h3>
          <h4 className="text-2xl font-thin opacity-70">
            {fjord.content.cta_summary}
          </h4>
          <ButtonLink href={fjord.links.main_cta}>
            {fjord.links.main_cta_text}
          </ButtonLink>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default CTA;
