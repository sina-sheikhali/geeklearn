import React from "react";
import { Link } from "react-router-dom";

export default function CourseBox() {
  return (
    <div className="border border-solid border-[#00000020] rounded-lg overflow-hidden">
      <div>
        <Link to="/course-info/:courseName" className="flex overflow-hidden">
          <img
            src="https://xigmalearn.ir/themes/education/eduBerg/assets/img/procuct-php-start-500x286.png"
            alt=""
            className="rounded-t-lg hover:scale-[1.15] hover:rotate-2 transition-transform w-full"
          />
        </Link>
      </div>
      <div className="p-4 border border-solid border-[#00000020]">
        <a
          href="#"
          className="text-lg block whitespace-nowrap overflow-hidden text-ellipsis mb-[30px] hover:text-mainColor transition-colors"
        >
          دوره آموزش دیجیتال مارکتینگ واقعی
        </a>
        <div className="flex items-center justify-between">
          <div>
            <i className="fa-regular fa-star text-[#F9A134]"></i>
            <i className="fa-regular fa-star text-[#F9A134]"></i>
            <i className="fa-regular fa-star text-[#F9A134]"></i>
            <i className="fa-regular fa-star text-[#F9A134]"></i>
            <i className="fa-regular fa-star text-[#F9A134]"></i>
          </div>
          <span className="flex items-center gap-1">
            <i className="fa fa-video"></i>
            محمد گلهایی
          </span>
        </div>
      </div>
      <div className="p-5 flex justify-between items-center">
        <span className="flex items-center gap-1">
          <i className="fa-regular fa-user"></i>
          417
        </span>
        <span>123,000 تومان</span>
      </div>
    </div>
  );
}