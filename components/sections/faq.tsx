import Section from "@/components/global/layout/section";
import Container from "@/components/global/layout/container";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";

type contentType = {
  question: string;
  answer: string;
};

const content: contentType[] = [
  {
    question: "This is a question?",
    answer: "This is the answer.",
  },
  {
    question: "This is a second question?",
    answer: "This is another answer.",
  },
];

const FAQ = () => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">Frequently Asked Questions</h3>
          <h4 className="text-2xl font-thin opacity-70">
            What if all your questions were answered? What would you do then?
          </h4>
          {content.map((item, index) => (
            <div key={index}>
              <h4 className="flex gap-2 opacity-80 items-center">
                <QuestionMarkCircledIcon />
                {item.question}
              </h4>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FAQ;
