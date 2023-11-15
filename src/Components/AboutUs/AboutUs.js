import React from "react";
import AboutUsBox from "../AboutUsBox/AboutUsBox";
import SectionHeader from "../SectionHeader/SectionHeader";
export default function () {
  return (
    <div className=" bg-[#f8f9fa] container max-w-[1280px] mt-2.5 p-5">
      <SectionHeader></SectionHeader>
      <div className="mt-12 grid sm:grid-cols-1  lg:grid-cols-3  gap-x-8">
        <AboutUsBox />
        <AboutUsBox />
        <AboutUsBox />
      </div>
    </div>
  );
}
