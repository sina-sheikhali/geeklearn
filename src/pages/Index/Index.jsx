import React from "react";
import "./Index.css";
import LatestCourses from "../../Components/LatestCourses/LatestCourses";
import AboutUs from "../../Components/AboutUs/AboutUs";
import LastArticle from "../../Components/LastArticle/LastArticle";
import SuggestedCourses from "../../Components/SuggestedCourses/SuggestedCourses";
import FreeCourses from "../../Components/FreeCourses/FreeCourses";
export default function Index() {
  return (
    <div>
      <LatestCourses />
      <SuggestedCourses />
      <AboutUs />
      <FreeCourses />
      <LastArticle />
    </div>
  );
}
