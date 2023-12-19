import React from "react";
import { TbAlertOctagon } from "react-icons/tb";
export default function ErrorLoadImage() {
  return (
    <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex items-center justify-center gap-1 w-full animate-pulse">
      <TbAlertOctagon className="text-yellow-300 bg-ye h-7 w-7" />
      <h3 className="">عدم برقراری ارتباط</h3>
      <TbAlertOctagon className="text-yellow-300 bg-ye h-7 w-7" />
    </div>
  );
}
