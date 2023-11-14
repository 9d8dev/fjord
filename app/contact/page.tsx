import SecondaryHero from "@/components/sections/secondary-hero";
import Main from "@/components/global/layout/main";
import TallyForm from "@/components/global/forms/tally-form";
import InlineLink from "@/components/global/elements/inline-link";

export default function Page() {
  return (
    <Main>
      <SecondaryHero
        title="contact us"
        subtitle="fill out the form to contact us"
      >
        This is the contact page! it uses{" "}
        <InlineLink href="https://tally.so">tally.so</InlineLink> to pull the
        embedded form. to change this ro your form simply change the `formId`
        prop.
      </SecondaryHero>

      <TallyForm
        formTitle="contact us form"
        formDescription="fill out this form to get in touch"
        formId="mVP2d6"
      />
    </Main>
  );
}
