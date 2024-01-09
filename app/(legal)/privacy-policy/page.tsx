"use client";

import * as Craft from "@/components/craft/layout";
import Content from "@/content/terms-of-service.mdx";

const Privacy = () => {
  return (
    <Craft.Section>
      <Craft.Container>
        <Craft.Article>
          <Content />
        </Craft.Article>
      </Craft.Container>
    </Craft.Section>
  );
};

export default Privacy;
