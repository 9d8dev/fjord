import * as Craft from "@/components/craft/layout";

import {
  QuestionMarkCircledIcon,
  ArrowTopRightIcon,
} from "@radix-ui/react-icons";

type contentType = {
  question: string;
  answer: string;
  link?: string;
};

const content: contentType[] = [
  {
    question: "What is the meaning of life?",
    answer: "42 is the answer to life, the universe, and everything.",
    link: "#",
  },
  {
    question: "Why is the sky blue?",
    answer:
      "The sky appears blue to the human eye as the short waves of blue light are scattered more than other colors because they travel in smaller, shorter, wave lengths.",
  },
  {
    question: "How does gravity work?",
    answer:
      "Gravity is the force by which a planet or other body draws objects toward its center. The force of gravity keeps all of the planets in orbit around the sun.",
  },
  {
    question: "What is the speed of light?",
    answer: "The speed of light in a vacuum is 299,792 kilometers per second.",
  },
];

const FAQ = () => {
  return (
    <Craft.Section>
      <Craft.Container>
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">Frequently Asked Questions</h3>
          <h4 className="text-2xl font-thin opacity-70">
            What if all your questions were answered? What would you do then?
          </h4>
          <div className="mt-6 md:mt-12 flex flex-col gap-6">
            {content.map((item, index) => (
              <div key={index} className="grid gap-2">
                <h4 className="flex gap-2 opacity-80 items-center">
                  <QuestionMarkCircledIcon className="w-4" />
                  {item.question}
                </h4>
                <div className="flex flex-col md:flex-row ml-6 gap-1 items-baseline">
                  <p>{item.answer}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      className="opacity-60 hover:opacity-100 transition-all flex items-center"
                    >
                      Learn more <ArrowTopRightIcon />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default FAQ;
