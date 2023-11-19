import React from "react";

export default function Pagination() {
  return (
    <div>
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
              className="border border-solid border-[#dee2e6] block p-2  mr-[-1px] rounded-tr-sm rounded-br-sm bg-mainColor text-white hover:text-mainColor hover:bg-gray-100 transition-colors"
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
  );
}
