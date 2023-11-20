import React from "react";

export default function SectionHeader({ title, desc, btnTitle }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col items-start gap-2">
        <h3 className="md:text-3xl text-xl font-bold">{title}</h3>
        <span className="hidden sm:block">{desc}</span>
      </div>

      {btnTitle ? (
        <div>
          <a
            href="#"
            className="bg-mainColor hover:bg-hoverColor text-white py-1.5 px-3 rounded-md"
          >
            {btnTitle}
          </a>
        </div>
      ) : null}
    </div>
  );
}
