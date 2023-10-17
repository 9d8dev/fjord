import settings from "@/fjord.json";
import Image from "next/image";
import Link from "next/link";
import SubscribeForm from "@/components/global/subscribe-form";

const Footer = () => {
  const links = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/posts", text: "Blog" },
    { href: "/contact", text: "Contact" },
    { href: "/all", text: "All Pages" },
  ];

  const otherLinks = [
    { href: "/privacy-policy", text: "Privacy Policy" },
    { href: "/terms-of-service", text: "Terms of Service" },
    { href: "/cookies", text: "Cookie Policy" },
  ];

  return (
    <footer
      suppressHydrationWarning
      className="px-4 py-24 text-sm items-center m-auto bg-primary-300 grid gap-12"
    >
      <div className="px-6 max-w-7xl xl:px-0 grid md:grid-cols-3 gap-6 justify-between w-full m-auto">
        <div>
          <Link href="/">
            <Image className="w-16 mb-4" width={200} height={200} src={settings.theme.logo} alt="logo"></Image>
          </Link>
          <p className="text-sm text-secondary-500 md:w-3/4">
            {settings.site_description}
          </p>
        </div>
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
        <div>
          <SubscribeForm />
        </div>
      </div>
      <div className="px-6 max-w-7xl xl:px-0 gap-6 flex-col-reverse md:flex-row flex justify-between w-full m-auto">
        <p>
          © {new Date().getFullYear()} | {settings.site_name} | <a href="https://cameronyoungblood.com">Created</a> <a href="https://bridger.to">by</a> <a href="https://alpinecodex.com">Alpine Codex</a>
        </p>
        <ul className="flex gap-4">
          {otherLinks.map((link, index) => (
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
