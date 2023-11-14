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
        </div>
      </Container>
    </Section>
  );
};

export default About;
