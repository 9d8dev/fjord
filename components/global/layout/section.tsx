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
      className={`${className} m-auto items-center p-6 text-sm md:p-12 ${backgroundColor}`}
    >
      {children}
    </section>
  );
};

export default Section;
