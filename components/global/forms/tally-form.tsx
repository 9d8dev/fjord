"use client";

import React, { useEffect, useState } from "react";
import Iframe from "react-iframe";
import Craft.Section from "../layout/section";
import Craft.Container from "../layout/container";
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
    <Craft.Section className="!pt-0">
      <Craft.Container>
        <div className="flex max-w-xl flex-col gap-4">
          {isLoading ? (
            <div className="flex w-full h-[720px] items-center justify-center p-6">
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
      </Craft.Container>
    </Craft.Section>
  );
};

export default TallyForm;
