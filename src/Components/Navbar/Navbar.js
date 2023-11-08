import React from "react";

import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="shadow-md mx-1">
      <div className="container max-w-[1280px] flex justify-between">
        <div className="flex justify-start items-center px-1">
          <Link to="#">
            <img src="/images/logo.png" alt="" className="w-16 py-1" />
          </Link>
          <ul className="flex items-center h-full gap-x-5 mr-10 px-2 text-[1.1rem]">
            <li className="group flex items-center py-1 relative h-full">
              <Link
                to="#"
                className="group-hover:text-mainColor transition-colors"
              >
                فرانت
                <i className="fa fa-angle-down group-hover:rotate-180 group-hover:text-mainColor transition-transform duration-300 text-sm text-gray-500 mr-1.5"></i>
              </Link>
              <ul className="invisible group-hover:visible flex flex-col absolute w-52 top-[70px] right-0 bg-white shadow-xl rounded-sm shadow-[0 0 10px 0 rgba(0, 0, 0, 0.12)]">
                <li className="text-gray-600 text-sm hover:bg-mainColor hover:text-white px-2 transition-colors duration-200">
                  <Link
                    to="#"
                    className="flex py-3 px-2 border-b border-solid border-gray-200"
                  >
                    فهرست
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
                فرانت
                <i className="fa fa-angle-down group-hover:rotate-180 group-hover:text-mainColor transition-transform duration-300 text-sm text-gray-500 mr-1.5"></i>
              </Link>
              <ul className="invisible group-hover:visible flex flex-col absolute w-52 top-[70px] right-0 bg-white shadow-xl rounded-sm shadow-[0 0 10px 0 rgba(0, 0, 0, 0.12)]">
                <li className="text-gray-600 text-sm hover:bg-mainColor hover:text-white px-2 transition-colors duration-200">
                  <Link
                    to="#"
                    className="flex py-3 px-2 border-b border-solid border-gray-200"
                  >
                    فهرست
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
                فرانت
                <i className="fa fa-angle-down group-hover:rotate-180 group-hover:text-mainColor transition-transform duration-300 text-sm text-gray-500 mr-1.5"></i>
              </Link>
              <ul className="invisible group-hover:visible flex flex-col absolute w-52 top-[70px] right-0 bg-white shadow-xl rounded-sm shadow-[0 0 10px 0 rgba(0, 0, 0, 0.12)]">
                <li className="text-gray-600 text-sm hover:bg-mainColor hover:text-white px-2 transition-colors duration-200">
                  <Link
                    to="#"
                    className="flex py-3 px-2 border-b border-solid border-gray-200"
                  >
                    فهرست
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
          </ul>
        </div>
        <div className="flex items-center justify-center gap-4">
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
          <a
            href="#"
            className="flex items-center justify-center py-2.5 px-3.5 relative bg-mainColor text-white gap-x-2 hover:bg-[#00b2da] transition-colors rounded-sm"
          >
            <i className="fa fa-user-circle w-6 h-6"></i>
            ورود / ثبت نام
          </a>
        </div>
      </div>
    </div>
  );
}
