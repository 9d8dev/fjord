"use client";

import React, { useEffect } from "react";
import Iframe from "react-iframe";

type TallyFormProps = {
  formId: string;
};

const TallyForm: React.FC<TallyFormProps> = ({ formId }) => {
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
    <Iframe
      url={`https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
      loading="lazy"
      width="100%"
      height="695"
      title="All Veteran | Partner with Us"
    />
  );
};

export default TallyForm;
