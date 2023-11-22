import Link from "next/link";

type InlineLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const InlineLink = ({ href, children, className }: InlineLinkProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} text-primary-500 underline-offset-4 transition-all hover:-mt-1 hover:mb-1 hover:opacity-75`}
    >
      {children}
    </Link>
  );
};

export default InlineLink;
