import Section from "@/components/global/layout/section";
import Container from "@/components/global/layout/container";

const About = () => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">this is an example about section</h3>
          <h4 className="text-2xl">
            here is some more example text. you can use this section to explain
            who you are and what you do.
          </h4>
          <p className="font-light opacity-70 md:w-3/5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default About;
