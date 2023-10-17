const testimonialsData = [
  {
    logo: "https://tailwindui.com/img/logos/tuple-logo-white.svg",
    testimonial:
      "Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu praesent at a. Ornare arcu gravida natoque erat et cursus tortor consequat at. Vulputate gravida sociis enim nullam ultricies habitant malesuada lorem ac. Tincidunt urna dui pellentesque sagittis.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "Judith Black",
    position: "CEO of Tuple",
  },
  {
    logo: "https://tailwindui.com/img/logos/reform-logo-white.svg",
    testimonial:
      "Excepteur veniam labore ullamco eiusmod. Pariatur consequat proident duis dolore nulla veniam reprehenderit nisi officia voluptate incididunt exercitation exercitation elit. Nostrud veniam sint dolor nisi ullamco.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "Joseph Rodriguez",
    position: "CEO of Reform",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-primary-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20"
            >
              <img className="h-12 self-start" src={testimonial.logo} alt="" />
              <figure className="mt-10 flex flex-auto flex-col justify-between">
                <blockquote className="text-lg leading-8 text-white">
                  <p>{testimonial.testimonial}</p>
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-x-6">
                  <img
                    className="h-14 w-14 rounded-full bg-primary-800"
                    src={testimonial.image}
                    alt=""
                  />
                  <div className="text-base">
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="mt-1 text-primary-400">
                      {testimonial.position}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
