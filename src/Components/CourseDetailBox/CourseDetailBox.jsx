import React, { Children } from "react";

export default function CourseDetailBox({ title, text, children }) {
  return (
    <div className="bg-white flex flex-col justify-center items-center md:flex-row  md:justify-start  gap-3 mb-4 p-5 rounded-sm shadow-[0_5px_30px_rgba(70,72,77,0.08)]">
      <div>{children}</div>
      <div className="flex flex-col items-center md:items-start gap-y-2">
        <span className="font-bold">{title}</span>
        <span className="text-[14px] text-gray-500">{text}</span>
      </div>
    </div>
  );
}
