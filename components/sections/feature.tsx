// Layout
import Section from "@/components/global/layout/section";
import Container from "@/components/global/layout/container";

// Icons
import { TokensIcon } from "@radix-ui/react-icons";

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const featureText: FeatureText[] = [
  {
    icon: <TokensIcon />,
    title: "Feature 1",
    description: "This is the first feature",
  },
  {
    icon: <TokensIcon />,
    title: "Feature 2",
    description: "This is the second feature",
  },
  {
    icon: <TokensIcon />,
    title: "Feature 3",
    description: "This is the third feature",
  },
];

const Feature = () => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">
            What if Headless WordPress was as easy as 1, 2, 3?{" "}
          </h3>
          <h4 className="text-2xl opacity-70">
            Fjord was designed with the developer experience in mind.
          </h4>
          <div className="grid grid-cols-3">
            {featureText.map(({ icon, title, description }, index) => (
              <div key={index}>
                {icon}
                <h5>{title}</h5>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Feature;
