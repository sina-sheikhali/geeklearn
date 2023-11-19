import React from "react";
import { Link } from "react-router-dom";
export default function Breadcrumb({ links }) {
  return (
    <div className="bg-[#f9f9fa] py-5 border-b border-solid border-gray-200">
      <div className="container max-w-7xl px-2 md:px-4 flex items-center">
        <div className="bg-[#f0f2f7] flex w-full flex-col gap-y-4 p-4 rounded-md">
          <h3 className="font-bold text-xl">محصولات</h3>
          <div className="inline-flex items-center gap-x-4">
            <div className="bg-white p-1.5 rounded-lg">
              <i className="fa fa-home text-[#909aa7]"></i>
            </div>
            <ul className="text-[#909aa7] flex items-center gap-x-3 text-sm">
              {links.map((link) => (
                <li className="flex items-center gap-x-2" key={link.id}>
                  <Link
                    to={`/${link.to}`}
                    className="text-gray-800 hover:text-mainColor transition-colors"
                  >
                    {link.title}
                  </Link>
                  <i className="fas fa-angle-left"></i>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
