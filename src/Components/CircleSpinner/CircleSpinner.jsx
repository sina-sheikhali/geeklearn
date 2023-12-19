import React from "react";
import { ImSpinner2 } from "react-icons/im";
export default function CircleSpinner() {
  return (
    <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex justify-center w-full">
      <ImSpinner2 className="text-red-400 animate-spin w-10 h-10" />
    </div>
  );
}
