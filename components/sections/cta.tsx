const content = {
  title: "Boost your productivity.\nStart using our app today.",
  description:
    "Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.",
  buttons: [
    {
      text: "Get started",
      href: "#",
      className:
        "rounded-md bg-slate-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600",
    },
    {
      text: "Learn more ->",
      href: "#",
      className: "text-sm font-semibold leading-6 text-slate-900",
    },
  ],
};

export default function CTA() {
  return (
    <div className="bg-white">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {content.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600">
            {content.description}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {content.buttons.map((button, index) => (
              <a key={index} href={button.href} className={button.className}>
                {button.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
