import React, { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  bgColor?: string;
  isAlt?: boolean;
};

const Section = ({
  children,
  isAlt,
  className,
  bgColor = "bg-secondary-300 dark:bg-secondary-800",
}: SectionProps) => {
  const backgroundColor = isAlt
    ? "bg-secondary-200 dark:bg-secondary-700"
    : bgColor;

  return (
    <section
      className={`${className} p-6 md:p-12 text-sm items-center m-auto ${backgroundColor}`}
    >
      {children}
    </section>
  );
};

export default Section;
