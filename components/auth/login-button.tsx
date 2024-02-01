"use client";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  aschild?: boolean;
}

import { useRouter } from "next/navigation";
import React from "react";

function LoginButton({
  children,
  mode = "redirect",
  aschild,
}: LoginButtonProps) {
  const router = useRouter();
  const onClick = () => {
    router.push("/auth/login");
  };
  if (mode === "modal") {
    return <span>TODO : Implement modal</span>;
  }
  return <span onClick={onClick}>{children}</span>;
}

export default LoginButton;
