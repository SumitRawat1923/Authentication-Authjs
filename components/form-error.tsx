import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";

function FormError({ message }: { message: string |undefined }) {
  if (!message) return null;
  return (
    <div className="flex items-center w-full bg-destructive/15 text-sm text-destructive rounded-md p-3 gap-2">
        <FaExclamationTriangle className="w-4 h-4"/>
        <p>{message}</p>
    </div>
  );
}

export default FormError;
