import React, { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
};

const Section = ({ children }: SectionProps) => {
  return <section>{children}</section>;
};

export default Section;
