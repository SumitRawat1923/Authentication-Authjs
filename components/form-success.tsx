import { CheckCircleIcon } from "lucide-react";
import React from "react";

function FormSuccess({ message }: { message: string | undefined }) {
  if (!message) return null;
  return (
    <div className="flex items-center w-full bg-emerald-500/15 text-sm text-emerald-500 rounded-md p-3 gap-2">
      <CheckCircleIcon className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
}

export default FormSuccess;
