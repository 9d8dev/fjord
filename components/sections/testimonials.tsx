// Layout
import Section from "@/components/global/layout/section";
import Container from "@/components/global/layout/container";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import fjord from "@/fjord.config";

type TestimonialsText = {
  logo: string;
  name: string;
  quote: string;
  title: string;
};

const testimonialsText: TestimonialsText[] = [
  {
    logo: Logo,
    name: "Amanda Smith",
    title: "Developer at Jade",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    logo: Logo,
    name: "Andrew Williams",
    title: "Founder at Emerald",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const Testimonials = () => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">Don't just take our word for it.</h3>
          <h4 className="text-2xl font-thin opacity-70">
            Find out why so many trust {fjord.site_name} for their headless
            WordPress setup.
          </h4>

          <div className="grid md:grid-cols-2 mt-6 gap-6 md:mt-12">
            {testimonialsText.map(({ logo, name, quote, title }, index) => (
              <div className="grid gap-4" key={index}>
                <h5 className="text-lg font-thin">"{quote}"</h5>
                <div>
                  <h4 className="text-xl text-primary-500">{name}</h4>
                  <p className="font-light opacity-70">{title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials;
