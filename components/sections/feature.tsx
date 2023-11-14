import Section from "@/components/global/layout/section";
import Container from "@/components/global/layout/container";

const Feature = () => {
  return (
    <Section isAlt={true}>
      <Container>
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">this is an example feature section</h3>
          <h4 className="text-2xl">
            here is some more example text. you can use this section to show off
            features of your project.
          </h4>
        </div>
      </Container>
    </Section>
  );
};

export default Feature;
