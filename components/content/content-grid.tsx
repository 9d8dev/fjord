import React from "react";

type ContentGridProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

const ContentGrid = ({
  children,
  id,
  className,
  ...rest
}: ContentGridProps) => {
  return React.createElement(
    "div",
    Object.assign(
      {
        id,
        className: `grid max-w-4xl p-6 md:p-0 m-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 ${className}`,
      },
      rest
    ),
    children
  );
};

export default ContentGrid;
