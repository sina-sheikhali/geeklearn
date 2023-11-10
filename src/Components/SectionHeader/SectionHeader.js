import React from "react";

export default function SectionHeader() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-3xl">جدیدترین دوره ها</h3>
        <span>رشد شما با یادگیری آغاز میشود...</span>
      </div>
      <div>
        <a
          href="#"
          className="bg-mainColor hover:bg-hoverColor text-white py-1.5 px-3 rounded-md"
        >
          همه دوره ها
        </a>
      </div>
    </div>
  );
}
