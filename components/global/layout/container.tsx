import React, { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: SectionProps) => {
  return (
    <div id="container" className={`${className} max-w-6xl m-auto`}>
      {children}
    </div>
  );
};

export default Container;
