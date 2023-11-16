import React, { ReactNode } from "react";

type ProseProps = {
  children: ReactNode;
  className?: string;
};

const Prose = ({ children, className }: ProseProps) => {
  return (
    <div
      id="prose"
      className={`${className} prose prose-p:font-light prose-headings:font-normal prose-strong:font-normal lg:prose-lg dark:prose-invert`}
    >
      {children}
    </div>
  );
};

export default Prose;
