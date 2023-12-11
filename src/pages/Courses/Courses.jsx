import React from "react";
import Breadcrumb from "../../Components/Breadcrumb/Breadcrumb";
import CourseBox from "../../Components/CourseBox/CourseBox";
import Pagination from "../../Components/Pagination/Pagination";
export default function Courses() {
  return (
    <>
      <Breadcrumb
        links={[
          { id: 1, title: "صفحه اصلی", to: "" },
          {
            id: 2,
            title: "همه دوره ها",
            to: "courses",
          },
        ]}
      />
      <div className="container max-w-7xl px-2">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-5 p-5">
          <CourseBox />
          <CourseBox />
          <CourseBox />
          <CourseBox />
          <CourseBox />
        </div>
        <Pagination />
      </div>
    </>
  );
}
