import React, { useState } from "react";
import ErrorLoadImage from "../ErrorLoadImage/ErrorLoadImage";
import CircleSpinner from "../CircleSpinner/CircleSpinner";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
export default function CourseBox() {
  const [isLoadedImage, setIsLoadedImage] = useState(false);
  const [isErrorImage, setIsErrorImage] = useState(false);
  const onLoadedImage = () => setIsLoadedImage(true);
  const onErrorImage = () => setIsErrorImage(true);

  return (
    <div className="border border-solid border-[#00000020] rounded-lg overflow-hidden">
      <div>
        <Link to="/course-info/js" className="flex overflow-hidden relative">
          <img
            src="https://xigmalearn.ir/themes/education/eduBerg/assets/img/procuct-php-start-500x286.png"
            alt="cover"
            className={`rounded-t-lg ${
              isLoadedImage && "hover:scale-[1.15] hover:rotate-2"
            } transition-transform w-full h-[250px] object-cover`}
            onLoad={onLoadedImage}
            onError={onErrorImage}
          />
          {isErrorImage && <ErrorLoadImage />}
          {!isLoadedImage && !isErrorImage && <CircleSpinner />}
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
          <div className="flex">
            <FaStar className="w-5 h-5 text-[#F9A134]" />
            <FaStar className="w-5 h-5 text-[#F9A134]" />
            <FaStar className="w-5 h-5 text-[#F9A134]" />
            <FaStar className="w-5 h-5 text-[#F9A134]" />
            <FaStar className="w-5 h-5 text-[#F9A134]" />
          </div>
          <span className="flex items-center gap-1">
            <FaChalkboardTeacher className="w-5 h-5 text-gray-500" />
            محمد گلهایی
          </span>
        </div>
      </div>
      <div className="p-5 flex justify-between items-center">
        <span className="flex items-center gap-1">
          <FaUserAlt className="text-gray-500" />
          417
        </span>
        <span>123,000 تومان</span>
      </div>
    </div>
  );
}
