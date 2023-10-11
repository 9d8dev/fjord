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
        className: `grid max-w-7xl m-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 my-8 ${className}`,
      },
      rest
    ),
    children
  );
};

export default ContentGrid;
