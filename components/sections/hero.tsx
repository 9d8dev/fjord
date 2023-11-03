import Image from "next/image";
import { HamburgerMenuIcon, ArrowDownIcon } from "@radix-ui/react-icons";

// Import your hero image here
import Placeholder from "@/public/placeholder.jpg";

const content = {
  title: "One",
  subText:
    "This is a marketing website component library using NextJS and Tailwind CSS.",
  getStartedLink: "#",
  menuLink: "#",
  mainImage: Placeholder,
  scrollText: "Scroll to See More ",
};

const One = () => {
  return (
    <section className="grid h-full max-h-[1080px] w-full max-w-full gap-12 bg-neutral-100 px-12 py-12 dark:bg-neutral-800 dark:text-white">
      <div className="grid w-full grid-cols-3">
        <h1 className="text-6xl font-light uppercase">{content.title}</h1>
        <h2 className="text-2xl font-extralight">{content.subText}</h2>
        <div className="flex justify-end gap-4">
          <a
            className="block h-fit w-fit bg-neutral-300 px-4 py-2 text-black transition-all hover:-mt-1 hover:mb-1 focus:scale-105 dark:bg-neutral-300"
            href={content.getStartedLink}
          >
            Get Started
          </a>
          <a
            className="flex h-fit w-fit items-center gap-2 bg-neutral-300 px-4 py-2 transition-all hover:-mt-1 hover:mb-1 focus:scale-105 dark:bg-neutral-500"
            href={content.menuLink}
          >
            Menu <HamburgerMenuIcon />
          </a>
        </div>
      </div>
      <div className="overflow-hidden">
        <Image
          objectFit="cover"
          src={content.mainImage}
          alt=""
          placeholder="blur"
        ></Image>
      </div>
      <div className="flex items-center gap-2">
        <p>{content.scrollText}</p>
        <ArrowDownIcon className="animate-pulse" />
      </div>
    </section>
  );
};

export default One;
