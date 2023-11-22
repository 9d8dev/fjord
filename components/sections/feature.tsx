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
    icon: <TokensIcon className="w-6 h-6" />,
    title: "One-click Deploy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    icon: <TokensIcon className="w-6 h-6" />,
    title: "Simple Config File",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    icon: <TokensIcon className="w-6 h-6" />,
    title: "Design with Ease",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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

          <div className="grid md:grid-cols-3 mt-6 gap-6 md:mt-12">
            {featureText.map(({ icon, title, description }, index) => (
              <div className="grid gap-4" key={index}>
                {icon}
                <h4 className="text-xl text-primary-500">{title}</h4>
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
