"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

const BackButton = () => {
  const router = useRouter();

  const handleBackButtonClick = () => {
    router.back();
  };

  return (
    <button
      className="text-sm flex gap-1 items-center my-6"
      onClick={handleBackButtonClick}
    >
      <ArrowLeftIcon className="w-4" />
      <span className="border-b">Go Back</span>
    </button>
  );
};

export default BackButton;
