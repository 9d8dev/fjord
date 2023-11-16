import SecondaryHero from "@/components/sections/secondary-hero";
import Main from "@/components/global/layout/main";
import TallyForm from "@/components/global/forms/tally-form";
import InlineLink from "@/components/global/elements/inline-link";
import type { Metadata } from "next";
import fjord from "@/fjord.config";

export const metadata: Metadata = {
  title: `Contact Us | ${fjord.site_name}`,
  description: `Contact ${fjord.site_name} today. ${fjord.site_description}`,
};

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
