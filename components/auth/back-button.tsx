import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface BackButtonProps {
  label: string;
  href: string;
}

function BackButton({ href, label }: BackButtonProps) {
  return (
    <Button size={"sm"} className="w-full font-normal" asChild variant={"link"}>
      <Link href={href}>{label}</Link>
    </Button>
  );
}

export default BackButton;
