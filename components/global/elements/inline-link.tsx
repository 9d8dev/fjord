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
      className={`${className} hover:opacity-75 underline underline-offset-4 transition-all`}
    >
      {children}
    </Link>
  );
};

export default InlineLink;
