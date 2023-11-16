"use client";

import Prose from "@/components/global/elements/prose";
import Container from "@/components/global/layout/container";
import Section from "@/components/global/layout/section";
import Content from "@/content/terms-of-service.mdx";

const Cookies = () => {
  return (
    <Section>
      <Container>
        <Prose>
          <Content />
        </Prose>
      </Container>
    </Section>
  );
};

export default Cookies;
