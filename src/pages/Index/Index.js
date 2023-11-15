import React from "react";
import Header from "../../Components/Header/Header";
import "./Index.css";
import LatestCourses from "../../Components/LatestCourses/LatestCourses";
import AboutUs from "../../Components/AboutUs/AboutUs";
import LastArticle from "../../Components/LastArticle/LastArticle";
import Footer from "../../Components/Footer/Footer";
export default function Index() {
  return (
    <div>
      <Header />
      <LatestCourses />
      <LatestCourses />
      <AboutUs />
      <LatestCourses />
      <LastArticle />
      <Footer />
    </div>
  );
}
