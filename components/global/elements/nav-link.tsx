import Link from "next/link";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const NavLink = ({ href, children, className }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className={`${className} hover:opacity-75 transition-all`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
