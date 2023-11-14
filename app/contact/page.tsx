import SecondaryHero from "@/components/sections/secondary-hero";
import ContactForm from "@/components/global/forms/contact-form";

export default function Page() {
  return (
    <>
      <SecondaryHero
        title="Contact Us"
        subtitle="Fill out the form to contact us."
      />

      <ContactForm />
    </>
  );
}
