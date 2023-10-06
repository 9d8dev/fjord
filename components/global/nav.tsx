import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.svg";

const Nav = () => {
  const links = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/posts", text: "Blog" },
  ];

  return (
    <nav className="sticky top-0">
      <div className="container flex justify-between items-center m-auto p-6 bg-slate-200">
        <Link href="/">
          <Image className="w-16" src={Logo} alt="logo"></Image>
        </Link>
        <ul className="flex gap-2">
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
