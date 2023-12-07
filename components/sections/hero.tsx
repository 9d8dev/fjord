import Section from "@/components/global/layout/section";
import Container from "@/components/global/layout/container";
import Placeholder from "@/public/placeholder.jpg";
import Image from "next/image";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const Hero = () => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-6">
          <a
            href="https://fjord.dev"
            className="flex gap-1 text-xs items-center border w-fit rounded-lg px-2 py-1 opacity-70 hover:opacity-100 transition-all"
          >
            Discover the future of WordPress <ArrowRightIcon />
          </a>
          <h1 className="text-primary-500 text-4xl md:text-6xl">
            Fjord is a headless WordPress template built with NextJS 14 and
            Tailwind CSS.
          </h1>
          <h2 className="text-xl md:text-3xl font-light">
            Fjord was created by{" "}
            <a
              className="hover:opacity-70 transition-all"
              href="https://bridger.to"
            >
              Bridger Tower
            </a>{" "}
            and{" "}
            <a
              className="hover:opacity-70 transition-all"
              href="https://cameronyoungblood.com"
            >
              Cameron Youngblood
            </a>{" "}
            to be used by{" "}
            <a
              className="hover:opacity-70 transition-all"
              href="https://alpinecodex.com"
            >
              Alpine Codex
            </a>
            ,{" "}
            <a
              className="hover:opacity-70 transition-all"
              href="https://ampry.com"
            >
              Ampry
            </a>
            , and{" "}
            <a
              className="hover:opacity-70 transition-all"
              href="https://9d8.dev"
            >
              9d8
            </a>
            . If you are interested in obtaining the template please reach out
            at{" "}
            <a
              className="hover:opacity-70 transition-all"
              href="mailto:9d8dev@gmail.com"
            >
              9d8dev@gmail.com
            </a>
            .
          </h2>
          <div className="my-8 h-96 w-full overflow-hidden rounded-lg md:rounded-xl md:h-[480px]">
            <Image
              className="h-full w-full object-cover object-bottom"
              src={Placeholder}
              width={1920}
              height={1080}
              alt="hero image"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
