import { ArrowRight } from "lucide-react";

const content = {
  title: "Data to enrich your online business",
  subtitle: "Anim aute id magna aliqua ad ad non deserunt sunt.",
  readMore: {
    text: "Read more",
    link: "#",
  },
  description:
    "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
  buttons: [
    {
      text: "Get started",
      link: "#",
      style:
        "rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600",
    },
    {
      text: "Learn more ->",
      link: "#",
      style: "text-sm font-semibold leading-6 text-secondary-900",
    },
  ],
  image:
    "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80",
};

export default function Hero() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-12 pt-8 lg:col-span-7 lg:px-0 lg:py-24 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="hidden sm:flex">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-secondary-500 ring-1 ring-secondary-900/10 hover:ring-secondary-900/20">
                {content.subtitle}{" "}
                <a
                  href={content.readMore.link}
                  className="whitespace-nowrap font-semibold text-primary-600"
                >
                  <span className="absolute inset-0 flex gap-2 items-center" aria-hidden="true" />
                  {content.readMore.text} <ArrowRight className="w-4 inline -mt-px" />
                </a>
              </div>
            </div>
            <h1 className="mt-8 text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              {content.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              {content.description}
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              {content.buttons.map((button, index) => (
                <a key={index} href={button.link} className={button.style}>
                  {button.text}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            className="aspect-[3/2] w-full bg-secondary-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src={content.image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
