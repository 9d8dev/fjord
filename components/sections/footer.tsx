import SubscribeForm from "@/components/global/forms/subscribe-form";
import fjord from "@/fjord.config";
import Image from "next/image";
import Link from "next/link";
import NavLink from "../global/elements/nav-link";
import Section from "../global/layout/section";
import Container from "../global/layout/container";

const Footer = () => {
  const links = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/posts", text: "Blog" },
    { href: "/contact", text: "Contact" },
    { href: "/all", text: "All Pages" },
  ];

  const otherLinks = [
    { href: fjord.links.privacy_policy, text: fjord.links.privacy_policy_text },
    {
      href: fjord.links.terms_of_service,
      text: fjord.links.terms_of_service_text,
    },
    {
      href: fjord.links.cookie_policy,
      text: fjord.links.cookie_policy_text,
    },
  ];

  return (
    <footer>
      <Section isAlt={true}>
        <Container className="m-auto grid w-full max-w-6xl justify-between gap-6 md:grid-cols-3 xl:px-0">
          <div>
            <Link href="/">
              <Image
                priority
                className="mb-4 w-16 dark:hidden"
                width={200}
                height={200}
                src={fjord.theme.primary_logo}
                alt="logo"
              ></Image>
              <Image
                priority
                className="mb-4 hidden w-16 dark:block"
                width={200}
                height={200}
                src={fjord.theme.dark_mode_logo}
                alt="logo"
              ></Image>
            </Link>
            <p className="text-secondary-400 text-sm md:w-3/4">
              {fjord.site_description}
            </p>
          </div>
          <ul className="space-y-1">
            {links.map((link, index) => (
              <li
                className="w-fit underline-offset-4 transition-all hover:underline"
                key={index}
              >
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className="flex md:justify-between gap-6">
            <p suppressHydrationWarning>
              © {new Date().getFullYear()} | {fjord.site_name} |{" "}
              <a href="https://cameronyoungblood.com">Created</a>{" "}
              <a href="https://bridger.to">by</a>{" "}
              <a href="https://alpinecodex.com">Alpine Codex</a>
            </p>
            <ul className="flex gap-4">
              {otherLinks.map((link, index) => (
                <li className="w-fit" key={index}>
                  <NavLink href={link.href}>{link.text}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>
    </footer>
  );
};

export default Footer;
