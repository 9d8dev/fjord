import Section from "@/components/global/layout/section";
import Container from "@/components/global/layout/container";

const About = () => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">Fjord is a headless WordPress template</h3>
          <h4 className="text-2xl font-thin opacity-70">
            This is an example about section. What do you want to say about your
            company?
          </h4>
          <p className="font-light opacity-70 md:w-3/5 mt-6 md:mt-12">
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
