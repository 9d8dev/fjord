"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BackButton = (className?: any) => {
  const router = useRouter();

  const handleBackButtonClick = () => {
    router.back();
  };

  return (
    <Button
      variant="outline"
      className={cn("not-prose text-sm", className)}
      onClick={handleBackButtonClick}
    >
      <ArrowLeftIcon className="w-4 mr-2" />
      <span>Go Back</span>
    </Button>
  );
};

export default BackButton;
