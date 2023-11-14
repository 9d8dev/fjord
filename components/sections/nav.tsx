"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "../global/elements/nav-link";
import fjord from "@/fjord.config";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/posts", text: "Blog" },
    { href: "/contact", text: "Contact" },
  ];

  const pathname = usePathname();

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 p-6 md:px-12 z-50 text-sm bg-opacity-75 backdrop-blur-md m-auto bg-secondary-100 dark:bg-secondary-900">
      <div className="flex max-w-6xl justify-between m-auto">
        <Link
          className="flex gap-2 items-center hover:opacity-75 transition-all"
          href="/"
        >
          <Image
            priority
            className="w-16 dark:hidden"
            width={200}
            height={200}
            src={fjord.theme.primary_logo}
            alt="logo"
          ></Image>
          <Image
            priority
            className="w-16 hidden dark:block"
            width={200}
            height={200}
            src={fjord.theme.dark_mode_logo}
            alt="logo"
          ></Image>
          <p className="sr-only">{fjord.site_name}</p>
        </Link>
        <div className="flex gap-4 items-center lg:hidden">
          <button onClick={handleMobileMenuToggle}>
            <Menu />
          </button>
        </div>
        <div className="hidden lg:flex gap-4 items-center">
          <ul className="flex gap-4">
            {links.map((link, index) => (
              <li key={index}>
                <NavLink
                  className={`${
                    pathname === link.href
                      ? "opacity-75 hover:no-underline cursor-default"
                      : ""
                  }`}
                  href={link.href}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link
            className="px-3 py-2 rounded-lg bg-primary-600 text-white hover:mb-px hover:-mt-px transition-all"
            href="/"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div
          className={`fixed top-0 h-screen w-screen inset-0 bg-secondary-100 dark:bg-secondary-900 backdrop-blur-md bg-opacity-95 z-40 flex flex-col p-6 lg:hidden text-lg
          transform ${
            isMobileMenuOpen
              ? "translate-x-0 ease-out"
              : "-translate-x-full ease-in"
          } transition-all duration-300`}
        >
          <button
            className="absolute top-4 right-4"
            onClick={handleMobileMenuToggle}
          >
            <X />
          </button>
          <ul className="flex flex-col space-y-4 mt-12">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  className={`border-b flex items-center justify-between underline-offset-4 transition-all py-2 ${
                    pathname === link.href
                      ? "opacity-50 hover:no-underline cursor-default"
                      : ""
                  }`}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.text} <ArrowRight className="text-primary-500" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
