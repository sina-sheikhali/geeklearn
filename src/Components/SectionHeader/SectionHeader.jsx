import React from "react";
import { Link } from "react-router-dom";

export default function SectionHeader({ title, desc, btnTitle, btnHref }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col items-start gap-2">
        <h3 className="md:text-3xl text-xl font-bold">{title}</h3>
        <span className="hidden sm:block">{desc}</span>
      </div>

      {btnTitle ? (
        <div>
          <Link
            to={`/${btnHref}`}
            className="bg-mainColor hover:bg-hoverColor text-white py-1.5 px-3 rounded-md"
          >
            {btnTitle}
          </Link>
        </div>
      ) : null}
    </div>
  );
}
