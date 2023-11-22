"use client";

import React, { useState } from "react";
import Link from "next/link";
import NavLink from "../global/elements/nav-link";
import Image from "next/image";
import ButtonLink from "../global/elements/button-link";
import fjord from "@/fjord.config";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Section from "../global/layout/section";

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

  const renderLogo = (mode: any) => (
    <Image
      priority
      className={`w-16 ${
        mode === "dark" ? "hidden dark:block" : "dark:hidden"
      }`}
      width={200}
      height={200}
      src={
        mode === "dark" ? fjord.theme.dark_mode_logo : fjord.theme.primary_logo
      }
      alt="logo"
    />
  );

  const renderLinks = (isMobile: any) =>
    links.map((link, index) => (
      <li key={index}>
        <NavLink
          className={`${
            pathname === link.href
              ? "cursor-default opacity-75 hover:no-underline"
              : ""
          }`}
          href={link.href}
        >
          {link.text}
        </NavLink>
      </li>
    ));

  return (
    <nav className="sticky top-0 z-50">
      <Section className="bg-secondary-100 dark:bg-secondary-900 bg-opacity-50 !py-6 backdrop-blur-md">
        <div className="m-auto flex max-w-6xl justify-between">
          <Link
            className="flex items-center gap-2 transition-all hover:opacity-75"
            href="/"
          >
            {renderLogo("light")}
            {renderLogo("dark")}
            <p className="sr-only">{fjord.site_name}</p>
          </Link>
          <div className="flex items-center gap-4 lg:hidden">
            <button onClick={handleMobileMenuToggle}>
              <Menu />
            </button>
          </div>
          <div className="hidden items-center gap-4 lg:flex">
            <ul className="flex gap-4">{renderLinks(false)}</ul>
            <ButtonLink href={fjord.links.main_cta}>
              {fjord.links.main_cta_text}
            </ButtonLink>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {isMobileMenuOpen && (
          <div
            className={`bg-secondary-100 dark:bg-secondary-900 fixed inset-0 top-0 z-40 flex h-screen w-screen transform flex-col bg-opacity-95 p-6 text-lg backdrop-blur-md
          lg:hidden ${
            isMobileMenuOpen
              ? "translate-x-0 ease-out"
              : "-translate-x-full ease-in"
          } transition-all duration-300`}
          >
            <button
              className="absolute right-4 top-4"
              onClick={handleMobileMenuToggle}
            >
              <X />
            </button>
            <ul className="mt-12 flex flex-col space-y-4">
              {renderLinks(true)}
            </ul>
          </div>
        )}
      </Section>
    </nav>
  );
};

export default Nav;
