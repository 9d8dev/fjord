"use client";

import React, { useEffect, useState } from "react";
import Iframe from "react-iframe";
import Section from "../layout/section";
import Container from "../layout/container";
import { ReloadIcon } from "@radix-ui/react-icons";

type TallyFormProps = {
  formId: string;
  formTitle?: string;
  formDescription?: string;
};

const TallyForm: React.FC<TallyFormProps> = ({
  formId,
  formDescription,
  formTitle,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const scriptId = "tally-script";

    // Check if script already exists to avoid re-adding it
    if (document.getElementById(scriptId)) {
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true; // Use async attribute for better performance
    script.onload = () => {
      // Check if the Tally object exists on the window before calling loadEmbeds
      if ((window as any).Tally) {
        (window as any).Tally.loadEmbeds();
        setIsLoading(false);
      }
    };
    script.onerror = () => {
      // Handle error (optional)
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup the script to prevent multiple appends
      const existingScript = document.getElementById(scriptId);
      if (existingScript) document.body.removeChild(existingScript);
    };
  }, []);

  return (
    <Section>
      <Container>
        <div className="m-auto flex flex-col gap-4 max-w-xl">
          <h3 className="text-2xl">{formTitle}</h3>
          <p>{formDescription}</p>
          {isLoading ? (
            <div className="p-6 w-full h-[720px] flex items-center justify-center">
              <ReloadIcon className="animate-spin" />
            </div>
          ) : (
            <Iframe
              url={`https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
              loading="lazy"
              width="100%"
              height="720"
              title="Your Title Here"
              className="p-0"
            />
          )}
        </div>
      </Container>
    </Section>
  );
};

export default TallyForm;
