import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.svg";

const Footer = () => {
  const links = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/posts", text: "Blog" },
  ];

  return (
    <footer className="px-4 py-24 text-sm items-center m-auto bg-slate-300">
      <div className="px-6 max-w-7xl xl:px-0 grid grid-cols-3 justify-between m-auto">
        <Link href="/">
          <Image className="w-16" src={Logo} alt="logo"></Image>
        </Link>
        <ul className="space-y-1">
          {links.map((link, index) => (
            <li
              className="hover:underline underline-offset-4 w-fit transition-all"
              key={index}
            >
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
        <ul className="space-y-1">
          {links.map((link, index) => (
            <li
              className="hover:underline underline-offset-4 w-fit transition-all"
              key={index}
            >
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
