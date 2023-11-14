import Section from "@/components/global/layout/section";
import Container from "@/components/global/layout/container";
import InlineLink from "../global/elements/inline-link";

const Hero = () => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-6">
          <h1 className="text-6xl">welcome to fjord</h1>
          <h2 className="text-3xl">
            fjord is an opinionated Next JS and Wordpress starter. It's built to
            be a solid foundation for your next project.
          </h2>
          <p>
            You can learn more about fjord by visiting{" "}
            <InlineLink href="https://fjord.dev">fjord.dev</InlineLink>
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
