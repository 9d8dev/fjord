import * as Craft from "@/components/craft/layout";
import Balancer from "react-wrap-balancer";
import Image from "next/image";
import Photo from "@/public/placeholder.jpg";

export default function Home() {
  return (
    <Craft.Main>
      <Craft.Section className="border-b">
        <Craft.Container>
          <h1 className="font-serif text-5xl lg:text-8xl">
            <Balancer>Welcome to Craft UI</Balancer>
          </h1>
          <h2>
            <Balancer>
              Craft UI is a design system for NextJS Websites. It is built using
              shadcn/ui, radix ui, and tailwindcss.
            </Balancer>
          </h2>
          <div className="relative border shadow-sm w-full lg:h-96 md:h-72 h-48 rounded-xl overflow-hidden">
            <Image
              src={Photo}
              alt="homepage image for craft ui"
              className="not-prose object-cover object-center max-w-full h-full"
              placeholder="blur"
            />
          </div>
        </Craft.Container>
      </Craft.Section>

      <Craft.Section className="border-b">
        <Craft.Container>
          <h3 className="mt-0">This is an example of an H3</h3>
          <h4>This is an example of an H4</h4>
          <h5>This is an example of an H5</h5>
          <h6>This is an example of an H6</h6>
          <p className="mb-0">
            This is a paragraph with an <a href="/">inline link</a>. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nulla nec justo eget
            justo cursus ornare. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla nec justo eget justo cursus ornare. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec justo
            eget justo cursus ornare.
          </p>
        </Craft.Container>
      </Craft.Section>

      <Craft.Section>
        <Craft.Container>
          <Craft.Article>
            <h2 className="mt-0">
              <Balancer>
                This is an example of the {"<Craft.Article/>"} Component
              </Balancer>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
              justo eget justo cursus ornare.
            </p>
            <h4>This is an Unordered List</h4>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
            <h4>This is an Ordered List</h4>
            <ol>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ol>
            <blockquote>
              <p>
                Prose is a Tailwind CSS utility that styles your content to make
                it look beautiful and readable by default.
              </p>
            </blockquote>
            <p>
              Here&apos;s a link: <a href="#">Visit Tailwind CSS</a>
            </p>
          </Craft.Article>
        </Craft.Container>
      </Craft.Section>
    </Craft.Main>
  );
}
