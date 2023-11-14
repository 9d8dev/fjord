const faqs = [
  {
    question: "How do you make holy water?",
    answer:
      "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    question: "What is the meaning of life?",
    answer:
      "The meaning of life is subjective and can vary from person to person. It can be as simple as living a happy, fulfilling life or as complex as finding the ultimate truth of the universe.",
  },
  {
    question: "Why is the sky blue?",
    answer:
      "The sky appears blue because molecules in the Earth's atmosphere scatter sunlight in all directions and blue light is scattered more than other colors because it travels in shorter, smaller waves.",
  },
  {
    question: "How does gravity work?",
    answer:
      "Gravity is a force by which a planet or other body draws objects toward its center. The force of gravity keeps all of the planets in orbit around the sun.",
  },
];

const content = {
  title: "Frequently asked questions",
  description: "Can’t find the answer you’re looking for? Reach out to our",
  linkText: "customer support",
  linkUrl: "#",
};

export default function FAQ() {
  return (
    <div className="bg-primary-100">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-secondary-900">
              {content.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-secondary-600">
              {content.description}{" "}
              <a
                href={content.linkUrl}
                className="font-semibold text-primary-600 hover:text-primary-500"
              >
                {content.linkText}
              </a>{" "}
              team.
            </p>
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="space-y-10">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-base font-semibold leading-7 text-secondary-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-secondary-600">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
