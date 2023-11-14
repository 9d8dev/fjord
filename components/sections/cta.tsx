import fjord from "@/fjord.config";
import Section from "@/components/global/layout/section";
import Container from "@/components/global/layout/container";
import ButtonLink from "@/components/global/elements/button-link";

const CTA = () => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">this is an example cta section</h3>
          <h4 className="text-2xl">
            here is some more example text. you can use this section to call out
            a specific action you want the user to take.
          </h4>
          <ButtonLink href={fjord.links.main_cta}>
            {fjord.links.main_cta_text}
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
};

export default CTA;
