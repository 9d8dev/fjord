"use client";

import Prose from "@/components/global/elements/prose";
import Craft.Container from "@/components/global/layout/container";
import Craft.Section from "@/components/global/layout/section";
import Content from "@/content/terms-of-service.mdx";

const Terms = () => {
  return (
    <Craft.Section>
      <Craft.Container>
        <Prose>
          <Content />
        </Prose>
      </Craft.Container>
    </Craft.Section>
  );
};

export default Terms;
