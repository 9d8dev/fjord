import React from "react";
import * as Craft from "@/components/craft/layout";

const ContentGrid: React.FC<ContentGridProps> = ({
  children,
  id,
  className,
  ...rest
}) => {
  return (
    <Craft.Section>
      <Craft.Container>
        <div
          id={id}
          className={`grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-6 md:gap-y-8 ${className}`}
          {...rest}
        >
          {children}
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default ContentGrid;
