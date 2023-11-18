import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Category.css";
import Footer from "../../Components/Footer/Footer";
import CourseBox from "../../Components/CourseBox/CourseBox";
export default function Category() {
  return (
    <div className="">
      <Navbar />
      <div className="mt-5 container max-w-[1280px] px-2">
        <div className="p-3 shadow-[0_0_13px_8px_rgba(70,72,77,0.08)]">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-3">
              <div className="border border-solid border-gray-300 px-2 py-1.5 bg-blue-600 text-white">
                <i class="fas fa-border-all"></i>
              </div>
              <div className="border border-solid border-gray-300 px-2 py-1.5">
                <i class="fas fa-align-left"></i>
              </div>
              <div>
                <span className="flex items-center gap-x-2 border border-solid border-gray-300 p-2 text-sm">
                  مرتب سازی پیش فرض
                  <i className="fas fa-angle-down"></i>
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
                <i className="fa fa-search w-3 h-3 text-gray-500"></i>
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
        <nav className="flex items-center justify-center p-1 mt-5">
          <ul className="flex">
            <li className="">
              <a
                href="#"
                className="border border-solid border-[#dee2e6] block p-2  text-[#56626E] mr-[-1px] rounded-tr-sm rounded-br-sm hover:text-mainColor hover:bg-gray-100 transition-colors"
              >
                صفحه قبل
              </a>
            </li>
            <li className="">
              <a
                href="#"
                className="border border-solid border-[#dee2e6] block p-2 text-[#56626E] mr-[-1px] rounded-tr-sm rounded-br-sm hover:text-mainColor hover:bg-gray-100 transition-colors"
              >
                1
              </a>
            </li>
            <li className="">
              <a
                href="#"
                className="border border-solid border-[#dee2e6] block p-2 text-[#56626E] mr-[-1px] rounded-tr-sm rounded-br-sm bg-mainColor text-white hover:text-mainColor hover:bg-gray-100 transition-colors"
              >
                2
              </a>
            </li>
            <li className="">
              <a
                href="#"
                className="border border-solid border-[#dee2e6] block p-2 text-[#56626E] mr-[-1px] rounded-tr-sm rounded-br-sm hover:text-mainColor hover:bg-gray-100 transition-colors"
              >
                3
              </a>
            </li>
            <li className="">
              <a
                href="#"
                className="border border-solid border-[#dee2e6] block p-2 text-[#56626E] mr-[-1px] rounded-tr-sm rounded-br-sm hover:text-mainColor hover:bg-gray-100 transition-colors"
              >
                صفحه بعد
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <Footer />
    </div>
  );
}
