import React from "react";

export default function SectionHeader({ title, desc, btnTitle }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-3xl">{title}</h3>
        <span>{desc}</span>
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
