import Link from "next/link";
import { Link1Icon } from "@radix-ui/react-icons";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const NavLink = ({ href, children, className }: NavLinkProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} hover:opacity-75 transition-all`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
