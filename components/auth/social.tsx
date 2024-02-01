import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";

function Social() {
  return (
    <div className="flex space-x-2 w-full ">
      <Button className="w-full" variant={"outline"}>
        <FcGoogle className="w-6 h-6" />
      </Button>
      <Button className="w-full" variant={"outline"}>
        <FaGithub className="w-6 h-6" />
      </Button>
    </div>
  );
}

export default Social;
