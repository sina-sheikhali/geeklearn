import React from "react";
import Header from "../../Components/Header/Header";
import "./Index.css";
import LatestCourses from "../../Components/LatestCourses/LatestCourses";
export default function Index() {
  return (
    <div>
      <Header />
      <LatestCourses />
    </div>
  );
}
