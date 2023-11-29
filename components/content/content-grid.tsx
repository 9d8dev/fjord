import React from "react";
import Section from "../global/layout/section";
import Container from "../global/layout/container";

const ContentGrid: React.FC<ContentGridProps> = ({
  children,
  id,
  className,
  ...rest
}) => {
  return (
    <Section className="!pt-0">
      <Container>
        <div
          id={id}
          className={`grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 ${className}`}
          {...rest}
        >
          {children}
        </div>
      </Container>
    </Section>
  );
};

export default ContentGrid;
