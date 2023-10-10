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
    <footer className="p-4 text-sm">
      <div className="container rounded-xl bg-opacity-75 border-2 backdrop-blur-sm m-auto p-4 bg-slate-200 grid grid-cols-3 justify-between">
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
