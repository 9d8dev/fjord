"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import settings from "@/fjord.json";
import { usePathname } from "next/navigation";

const Nav = () => {
  const links = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/posts", text: "Blog" },
    { href: "/contact", text: "Contact" },
  ];
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 p-4 text-sm bg-opacity-75 backdrop-blur-md items-center m-auto bg-slate-100">
      <div className="container flex justify-between m-auto">
        <Link
          className="flex gap-2 px-6 xl:px-0 items-center hover:opacity-75 transition-all"
          href="/"
        >
          <Image priority className="w-16" src={Logo} alt="logo"></Image>
          <p className="sr-only">{settings.site_name}</p>
        </Link>
        <div className="flex gap-4 items-center">
          <ul className="flex gap-4">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  className={`hover:underline underline-offset-4 transition-all ${
                    pathname === link.href
                      ? "opacity-50 hover:no-underline cursor-default"
                      : ""
                  }`}
                  href={link.href}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            className="px-3 py-2 rounded-lg bg-slate-600 text-white hover:mb-px hover:-mt-px transition-all"
            href="/"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
