import React from "react";
import Craft.Section from "../global/layout/section";
import Craft.Container from "../global/layout/container";

const ContentGrid: React.FC<ContentGridProps> = ({
  children,
  id,
  className,
  ...rest
}) => {
  return (
    <Craft.Section className="!pt-0">
      <Craft.Container>
        <div
          id={id}
          className={`grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 ${className}`}
          {...rest}
        >
          {children}
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default ContentGrid;
