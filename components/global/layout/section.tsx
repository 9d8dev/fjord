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
  bgColor = "",
}: SectionProps) => {
  const backgroundColor = isAlt
    ? "bg-secondary-200 dark:bg-secondary-700"
    : bgColor;

  return (
    <section
      className={`${className} m-auto items-center px-6 py-12 text-sm md:px-12 md:py-24 ${backgroundColor}`}
    >
      {children}
    </section>
  );
};

export default Section;
