import * as Craft from "@/components/craft/layout";
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import Photo from "@/public/placeholder.jpg";

export default function Home() {
  return (
    <Craft.Main>
      <Craft.Section className="border-b">
        <Craft.Container>
          <h1 className="lg:text-7xl">
            <Balancer>Next JS App Router Meets Headless WordPress</Balancer>
          </h1>
          <h2>
            <Balancer>
              Fjord is a NextJS template with a WordPress backend. It&apos;s a
              great starting point for your next headless WordPress project.
            </Balancer>
          </h2>
          <div className="relative border shadow-sm w-full lg:h-96 md:h-72 h-48 rounded-xl overflow-hidden">
            <Image
              src={Photo}
              alt="homepage image for craft ui"
              className="not-prose object-cover object-bottom max-w-full h-full"
              placeholder="blur"
            />
          </div>
        </Craft.Container>
      </Craft.Section>

      <Craft.Section>
        <Craft.Container>
          <Craft.Article>
            <h2 className="mt-0">
              <Balancer>
                Craft was created by{" "}
                <a className="not-prose" href="https://bridger.to">
                  Bridger
                </a>{" "}
                and{" "}
                <a className="not-prose" href="https://cameronyoungblood.com">
                  {" "}
                  Cameron
                </a>{" "}
                at <a href="https://9d8.dev">9d8</a> and{" "}
                <a href="https://alpine.dev">Alpine Codex</a>.
              </Balancer>
            </h2>
            <p>
              Fjord is built around the idea of a headless WordPress backend
              with a NextJS frontend. It makes use of the WordPress REST API to
              fetch data and NextJS to render the frontend.
            </p>
            <h4>Key Features</h4>
            <ul>
              <li>
                Automatic Typographic styling use a modified version of{" "}
                <a href="https://tailwindcss.com/docs/typography-plugin">
                  Tailwind Typography
                </a>
              </li>
              <li>
                Components and design system by{" "}
                <a href="https://craftui.com">Craft UI</a> and{" "}
                <a href="https://ui.shadcn.com">shadcn/ui</a>
              </li>
              <li>Cached articles and revalidation via Next JS</li>
            </ul>
            <blockquote>
              <p>
                Fjord has been a game changer for our team. We&apos;ve been able
                to build sites faster than ever before.
              </p>
            </blockquote>
          </Craft.Article>
        </Craft.Container>
      </Craft.Section>
    </Craft.Main>
  );
}
