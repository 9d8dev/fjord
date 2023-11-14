import Section from "../global/layout/section";
import Container from "../global/layout/container";
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
    <Section isAlt={true}>
      <Container>
        <div className="mx-auto max-w-xl lg:mx-0">
          <p className="flex gap-1 opacity-75 items-center mx-1">
            <InfoCircledIcon />
            {subtitle}
          </p>
          <h2 className="mt-2 text-4xl tracking-tight sm:text-6xl">{title}</h2>
          <p className="mt-6 text-lg leading-8">{children}</p>
        </div>
      </Container>
    </Section>
  );
}
