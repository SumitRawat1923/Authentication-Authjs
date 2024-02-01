import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Social from "./social";
import BackButton from "./back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

function CardWrapper({
  children,
  backButtonHref,
  backButtonLabel,
  headerLabel,
  showSocial,
}: CardWrapperProps) {
  return (
    <Card className="w-[450px] shadow-md">
      <CardHeader>
        <CardTitle className="font-semibold text-4xl">Authentication</CardTitle>
        <CardDescription>{headerLabel} !</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Social />
        <BackButton  label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
}

export default CardWrapper;
