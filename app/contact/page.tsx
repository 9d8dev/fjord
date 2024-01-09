import SecondaryHero from "@/components/sections/secondary-hero";
import * as Craft from "@/components/craft/layout";
import TallyForm from "@/components/global/forms/tally-form";
import type { Metadata } from "next";
import fjord from "@/fjord.config";

export const metadata: Metadata = {
  title: `Contact Us | ${fjord.site_name}`,
  description: `Contact ${fjord.site_name} today. ${fjord.site_description}`,
};

export default function Page() {
  return (
    <Craft.Main>
      <SecondaryHero
        title="Contact us"
        subtitle="Fill out the form to contact us"
      >
        This is the contact page! it uses{" "}
        <a href="https://tally.so">tally.so</a> to pull the embedded form. To
        change this form simply change the `formId` prop.
      </SecondaryHero>
      <TallyForm formId="mVP2d6" />
    </Craft.Main>
  );
}
