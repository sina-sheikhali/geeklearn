import React, { useState } from "react";

export default function ({ menuItems, title }) {
  return (
    <div className="flex flex-col gap-5">
      <h5 className="text-xl relative pr-4 text-[#53565d] font-bold  before:block before:w-2.5 before:h-0.5 before:absolute before:top-4 before:right-[-5px] before:bg-mainColor  before:text-mainColor">
        {title}
      </h5>

      <div>
        <ul className="flex flex-col gap-3 px-4 shadow-[9px_0_14px_-18px_#36C9F4]">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href="#"
                className="text-[#8c8c8c] hover:text-mainColor transition-colors"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
