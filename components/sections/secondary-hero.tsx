import * as Craft from "@/components/craft/layout";
import { InfoCircledIcon } from "@radix-ui/react-icons";

export default function SecondaryHero({
  title,
  subtitle,
  children,
  className,
}: {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Craft.Section>
      <Craft.Container>
        <div className="mx-auto max-w-4xl lg:mx-0">
          <p className="mx-1 flex w-fit items-center gap-1 opacity-70">
            <InfoCircledIcon />
            {subtitle}
          </p>
          <h2 className="text-primary-500 mt-2 text-4xl tracking-tight sm:text-6xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-8">{children}</p>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
}
