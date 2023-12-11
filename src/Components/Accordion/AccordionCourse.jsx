import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default function AccordionCourse() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader
          className="flex items-center justify-between bg-gray-100 p-3 rounded-t-lg"
          onClick={() => handleOpen(1)}
        >
          <div className="flex items-center justify-between w-full">
            <span className="text-lg">فصل اول : مقدمه</span>
            <span className="text-[#7f8698] text-sm ml-2">12 جلسه</span>
          </div>
        </AccordionHeader>
        <AccordionBody className="flex flex-col gap-4 bg-gray-100 p-3 rounded-b-lg">
          <a
            href="#"
            className="flex items-center justify-between py-3 px-2 border-b border-solid border-gray-200"
          >
            <span className="flex items-center justify-center text-lg rounded-full bg-red-500 text-white w-7 h-7 ">
              1
            </span>
            <span className="block hover:text-mainColor transition-colors font-bold">
              مرور پیش نیاز های این دوره
            </span>
            <span className="block text-[#7f8698]">18:25</span>
          </a>
          <a href="#" className="flex items-center justify-between py-3 px-2">
            <span className="flex items-center justify-center text-lg rounded-full bg-red-500 text-white w-7 h-7 ">
              2
            </span>
            <span className="block hover:text-mainColor transition-colors font-bold">
              مرور پیش نیاز های این دوره
            </span>
            <span className="block text-[#7f8698]">12:05</span>
          </a>
        </AccordionBody>
      </Accordion>
    </>
  );
}
