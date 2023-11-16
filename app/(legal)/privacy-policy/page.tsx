"use client";

import Container from "@/components/global/layout/container";
import Section from "@/components/global/layout/section";
import Content from "@/content/privacy-policy.mdx";

const Terms = () => {
  return (
    <Section>
      <Container>
        <div className="prose dark:prose-invert">
          <Content />
        </div>
      </Container>
    </Section>
  );
};

export default Terms;
