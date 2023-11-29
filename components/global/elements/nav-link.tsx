import Link from "next/link";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
};

const NavLink = ({ href, children, className, onClick }: NavLinkProps) => {
  return (
    <div onClick={onClick}>
      <Link
        href={href}
        className={`${className} hover:opacity-75 transition-all`}
      >
        {children}
      </Link>
    </div>
  );
};

export default NavLink;
