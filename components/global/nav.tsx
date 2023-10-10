import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import settings from "@/fjord.json";

const Nav = () => {
  const links = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/posts", text: "Blog" },
    { href: "/contact", text: "Contact" },
  ];

  return (
    <nav className="sticky top-0 py-4 text-sm">
      <div className="container rounded-xl bg-opacity-75 border-2 backdrop-blur-md flex justify-between items-center m-auto p-4 bg-slate-200">
        <Link className="flex gap-2 items-center hover:opacity-75" href="/">
          <Image className="w-16" src={Logo} alt="logo"></Image>
          <p className="sr-only">{settings.site_name}</p>
        </Link>
        <ul className="flex gap-4">
          {links.map((link, index) => (
            <li key={index}>
              <Link className="" href={link.href}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <Link className="px-3 py-2 rounded-lg bg-slate-600 text-white" href="/">
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
