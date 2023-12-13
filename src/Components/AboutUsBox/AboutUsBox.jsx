import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function AboutUsBox() {
  return (
    <div className="group flex flex-col items-center justify-center gap-4  rounded-md shadow-[0_0_10px_0_rgba(62,28,131,0.07)] my-7 p-10 hover:bg-mainColor transition-colors duration-300">
      <i className="fa fa-star w-8 h-8  group-hover:bg-white group-hover:text-mainColor bg-mainColor p-2 text-white rounded-full border-[10px] border-solid border-[#e1f6ff]"></i>
      <h4 className="text-2xl group-hover:text-white">بهینه سازی سایت</h4>
      <p className="text-justify leading-5 group-hover:text-white">
        طراحی و پیاده سازی انواع سایت ها با جدیدترین متد روز و بهینه ترین روش
        های برنامه نویسی و طراحی
      </p>
    </div>
  );
}
