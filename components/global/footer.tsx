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
    <footer>
      <div className="container flex justify-between m-auto p-6 bg-slate-200">
        <Link href="/">
          <Image className="w-16" src={Logo} alt="logo"></Image>
        </Link>
        <ul className="">
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
        <ul className="">
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
