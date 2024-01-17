import * as Craft from "@/components/craft/layout";
import Image from "next/image";
import Placeholder from "@/public/placeholder-2.jpg";

const About = () => {
  return (
    <Craft.Section className="border-b">
      <Craft.Container>
        <div className="not-prose flex flex-col gap-6">
          <div className="my-8 h-96 w-full overflow-hidden rounded-lg border md:rounded-xl md:h-[480px]">
            <Image
              className="h-full w-full object-cover object-center"
              src={Placeholder}
              width={1920}
              height={1080}
              alt="hero image"
              placeholder="blur"
            />
          </div>
          <h3 className="text-3xl">Fjord is a headless WordPress template</h3>
          <h4 className="text-xl opacity-70">
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
      </Craft.Container>
    </Craft.Section>
  );
};

export default About;
