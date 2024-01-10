import * as Craft from "@/components/craft/layout";

const CTA = () => {
  return (
    <Craft.Section className="border-t">
      <Craft.Container>
        <div className="flex flex-col gap-6">
          <h3 className="!mt-0">Main CTA</h3>
          <p className="text-2xl font-thin opacity-70">Text </p>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default CTA;
