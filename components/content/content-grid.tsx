import React from "react";

type ContentGridProps = {
  children: React.ReactNode;
  className?: string;
};

const ContentGrid = ({ children, className, ...rest }: ContentGridProps) => {
  return React.createElement(
    "div",
    Object.assign(
      {
        className: `grid sm:grid-cols-2 md:grid-cols-3 gap-6 my-8 ${className}`,
      },
      rest
    ),
    children
  );
};

export default ContentGrid;
