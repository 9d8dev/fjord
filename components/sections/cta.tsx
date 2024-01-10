import fjord from "@/fjord.config";
import * as Craft from "@/components/craft/layout";

const CTA = () => {
  return (
    <Craft.Section>
      <Craft.Container className="bg-primary-200 dark:bg-primary-950 rounded-lg md:rounded-xl p-6 md:p-12">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">Main CTA</h3>
          <h4 className="text-2xl font-thin opacity-70">Text </h4>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default CTA;
