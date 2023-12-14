import React from "react";
import "./Category.css";
import CourseBox from "../../Components/CourseBox/CourseBox";
import Pagination from "../../Components/Pagination/Pagination";
import { FaBorderAll } from "react-icons/fa6";
import { MdFormatAlignLeft } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
export default function Category() {
  return (
    <div className="">
      <div className="mt-5 container max-w-[1280px] px-2">
        <div className="p-3 shadow-[0_0_13px_8px_rgba(70,72,77,0.08)]">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-3">
              <div className="border border-solid border-gray-300 px-2 py-1.5 bg-blue-600 text-white">
                <FaBorderAll />
              </div>
              <div className="border border-solid border-gray-300 px-2 py-1.5">
                <MdFormatAlignLeft />
              </div>
              <div>
                <span className="flex items-center gap-x-2 border border-solid border-gray-300 p-2 text-sm">
                  مرتب سازی پیش فرض
                  <FaAngleDown />
                </span>
                <ul className="hidden">
                  <li>مرتب سازی پیش فرض</li>
                  <li>مربت سازی بر اساس محبوبیت</li>
                  <li>مربت سازی بر اساس امتیاز</li>
                  <li>مربت سازی بر اساس آخرین</li>
                  <li>مربت سازی بر اساس ارزان ترین</li>
                  <li>مربت سازی بر اساس گران ترین</li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="جستجوی دوره ..."
                className="py-1 px-1 border border-solid border-gray-300"
              />
              <button className="absolute top-2 left-2">
                <IoSearchSharp className="text-gray-500" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-5 p-5">
          <CourseBox />
          <CourseBox />
          <CourseBox />
          <CourseBox />
          <CourseBox />
        </div>
      </div>
      <Pagination />
    </div>
  );
}
