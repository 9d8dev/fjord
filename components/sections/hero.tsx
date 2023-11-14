import Section from "@/components/global/layout/section";
import Container from "@/components/global/layout/container";
import InlineLink from "../global/elements/inline-link";
import Placeholder from "@/public/placeholder.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-6">
          <h1 className="text-6xl">welcome to fjord</h1>
          <h2 className="text-3xl">
            fjord is an opinionated Next JS and Wordpress starter. It&apos;s
            built to be a solid foundation for your next project.
          </h2>
          <div className="my-8 h-96 w-full overflow-hidden md:h-[480px]">
            <Image
              className="h-full w-full object-cover object-bottom"
              src={Placeholder}
              alt="hero image"
            />
          </div>
          <p>
            You can learn more about fjord by visiting{" "}
            <InlineLink href="https://fjord.dev">fjord.dev</InlineLink>. fjord
            pairs nicely with{" "}
            <InlineLink href="https://craftui.org">craft ui</InlineLink>.
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
