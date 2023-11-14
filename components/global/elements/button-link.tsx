import Link from "next/link";

type InlineLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const ButtonLink = ({ href, children, className }: InlineLinkProps) => {
  return (
    <Link
      className="px-3 py-2 rounded-lg bg-primary-600 text-white hover:mb-px hover:-mt-px transition-all"
      href="/"
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
