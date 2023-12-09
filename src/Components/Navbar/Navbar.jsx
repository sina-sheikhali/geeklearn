import React from "react";

import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="shadow-md">
      <div className="container 2xl:max-w-[1280px] flex justify-between px-1">
        <div className="flex justify-start items-center px-1">
          <Link to="#">
            <img src="/images/logo.png" alt="" className="w-16 py-1" />
          </Link>
          <ul className="hidden lg:flex items-center h-full gap-x-6 mr-10 px-2 text-[1.1rem]">
            <li className="group flex items-center py-1 relative h-full">
              <Link
                to="#"
                className="group-hover:text-mainColor transition-colors "
              >
                فرانت
                <i className="fa fa-angle-down group-hover:rotate-180 group-hover:text-mainColor transition-transform duration-300 text-sm text-gray-500 mr-1.5"></i>
              </Link>
              <ul className="invisible group-hover:visible flex flex-col absolute w-52 top-[70px] right-0 bg-white rounded-sm shadow-[0_0_10px_0_rgba(0,0,0,0.12)] z-10">
                <li className="text-gray-600 text-sm hover:bg-mainColor hover:text-white px-2 transition-colors duration-200">
                  <Link
                    to="#"
                    className="flex py-3 px-2 border-b border-solid border-gray-200"
                  >
                    آموزش HTML
                  </Link>
                </li>
                <li className="text-gray-600 text-sm hover:bg-mainColor hover:text-white px-2 transition-colors duration-200">
                  <Link
                    to="#"
                    className="flex py-3 px-2 border-b border-solid border-gray-200"
                  >
                    آموزش CSS
                  </Link>
                </li>
                <li className="text-gray-600 text-sm hover:bg-mainColor hover:text-white px-2 transition-colors duration-200">
                  <Link
                    to="#"
                    className="flex py-3 px-2 border-b border-solid border-gray-200"
                  >
                    آموزش FlexBox
                  </Link>
                </li>
                <li className="text-gray-600 text-sm hover:bg-mainColor hover:text-white px-2 transition-colors duration-200">
                  <Link
                    to="#"
                    className="flex py-3 px-2 border-b border-solid border-gray-200"
                  >
                    آموزش Tailwind CSS
                  </Link>
                </li>
                <li className="text-gray-600 text-sm hover:bg-mainColor hover:text-white px-2 transition-colors duration-200">
                  <Link
                    to="#"
                    className="flex py-3 px-2 border-b border-solid border-gray-200"
                  >
                    آموزش Bootstrap
                  </Link>
                </li>
                <li className="text-gray-600 text-sm hover:bg-mainColor hover:text-white px-2 transition-colors duration-200">
                  <Link
                    to="#"
                    className="flex py-3 px-2 border-b border-solid border-gray-200"
                  >
                    آموزش Javascript
                  </Link>
                </li>
                <li className="text-gray-600 text-sm hover:bg-mainColor hover:text-white px-2 transition-colors duration-200">
                  <Link
                    to="#"
                    className="flex py-3 px-2 border-b border-solid border-gray-200"
                  >
                    آموزش React
                  </Link>
                </li>
                <li className="text-gray-600 text-sm hover:bg-mainColor hover:text-white px-2 transition-colors duration-200">
                  <Link
                    to="#"
                    className="flex py-3 px-2 border-b border-solid border-gray-200"
                  >
                    آموزش Vue
                  </Link>
                </li>
              </ul>
            </li>
            <li className="group flex items-center py-1 relative h-full">
              <Link
                to="#"
                className="group-hover:text-mainColor transition-colors"
              >
                امنیت
                <i className="fa fa-angle-down group-hover:rotate-180 group-hover:text-mainColor transition-transform duration-300 text-sm text-gray-500 mr-1.5"></i>
              </Link>
              <ul className="invisible group-hover:visible flex flex-col absolute w-52 top-[70px] right-0 bg-white rounded-sm shadow-[0_0_10px_0_rgba(0,0,0,0.12)] z-10">
                <li className="text-gray-600 text-sm hover:bg-mainColor hover:text-white px-2 transition-colors duration-200">
                  <Link
                    to="#"
                    className="flex py-3 px-2 border-b border-solid border-gray-200"
                  >
                    شبکه با گرایش امنیت
                  </Link>
                </li>
                <li className="text-gray-600 text-sm hover:bg-mainColor hover:text-white px-2 transition-colors duration-200">
                  <Link
                    to="#"
                    className="flex py-3 px-2 border-b border-solid border-gray-200"
                  >
                    لینوکس
                  </Link>
                </li>
                <li className="text-gray-600 text-sm hover:bg-mainColor hover:text-white px-2 transition-colors duration-200">
                  <Link
                    to="#"
                    className="flex py-3 px-2 border-b border-solid border-gray-200"
                  >
                    آموزش کالی لینوکس
                  </Link>
                </li>
                <li className="text-gray-600 text-sm hover:bg-mainColor hover:text-white px-2 transition-colors duration-200">
                  <Link
                    to="#"
                    className="flex py-3 px-2 border-b border-solid border-gray-200"
                  >
                    آموزش پایتون سیاه
                  </Link>
                </li>
                <li className="text-gray-600 text-sm hover:bg-mainColor hover:text-white px-2 transition-colors duration-200">
                  <Link
                    to="#"
                    className="flex py-3 px-2 border-b border-solid border-gray-200"
                  >
                    آموزش جاوااسکریپت سیاه
                  </Link>
                </li>
                <li className="text-gray-600 text-sm hover:bg-mainColor hover:text-white px-2 transition-colors duration-200">
                  <Link
                    to="#"
                    className="flex py-3 px-2 border-b border-solid border-gray-200"
                  >
                    فهرست
                  </Link>
                </li>
              </ul>
            </li>
            <li className="group flex items-center py-1 relative h-full">
              <Link
                to="#"
                className="group-hover:text-mainColor transition-colors"
              >
                پایتون
                <i className="fa fa-angle-down group-hover:rotate-180 group-hover:text-mainColor transition-transform duration-300 text-sm text-gray-500 mr-1.5"></i>
              </Link>
              <ul className="invisible group-hover:visible flex flex-col absolute w-52 top-[70px] right-0 bg-white rounded-sm shadow-[0_0_10px_0_rgba(0,0,0,0.12)] z-10">
                <li className="text-gray-600 text-sm hover:bg-mainColor hover:text-white px-2 transition-colors duration-200">
                  <Link
                    to="#"
                    className="flex py-3 px-2 border-b border-solid border-gray-200"
                  >
                    آموزش پایتون مقدماتی
                  </Link>
                </li>
                <li className="text-gray-600 text-sm hover:bg-mainColor hover:text-white px-2 transition-colors duration-200">
                  <Link
                    to="#"
                    className="flex py-3 px-2 border-b border-solid border-gray-200"
                  >
                    آموزش پایتون پیشرفته
                  </Link>
                </li>
                <li className="text-gray-600 text-sm hover:bg-mainColor hover:text-white px-2 transition-colors duration-200">
                  <Link
                    to="#"
                    className="flex py-3 px-2 border-b border-solid border-gray-200"
                  >
                    متخصص جنگو
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-2.5">
          <div>
            <a
              href="#"
              className="relative flex items-center justify-center p-2 bg-[#F8F9FB] text-[#acadb1]"
            >
              <i className="fa fa-shopping-cart w-6 h-6"></i>
              <span className="flex items-center justify-center rounded-full bg-[#ec4b5c] absolute bottom-0 right-0 h-5 w-5 text-xs text-white">
                2
              </span>
            </a>
          </div>
          <div>
            <a
              href="#"
              className="flex lg:hidden items-center justify-center p-2 bg-[#F8F9FB] text-[#acadb1]"
            >
              <i className="fa fa-bars w-6 h-6"></i>
            </a>
          </div>
          <a
            href="#"
            className="hidden lg:flex items-center justify-center py-2.5 px-3.5 relative bg-mainColor text-white gap-x-2 hover:bg-hoverColor transition-colors rounded-sm"
          >
            <i className="fa fa-user-circle w-6 h-6"></i>
            ورود / ثبت نام
          </a>
        </div>
      </div>
    </div>
  );
}
