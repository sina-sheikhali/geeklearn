import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import SectionHeader from "../SectionHeader/SectionHeader";
import CourseBox from "../CourseBox/CourseBox";
export default function LatestCourses() {
  return (
    <div className="container max-w-[1280px] mt-20 p-5">
      <SectionHeader />
      <div className="mt-5 p-2.5 flex">
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <CourseBox />
          </SwiperSlide>
          <SwiperSlide>
            <CourseBox />
          </SwiperSlide>
          <SwiperSlide>
            <CourseBox />
          </SwiperSlide>
          <SwiperSlide>
            <CourseBox />
          </SwiperSlide>
          <SwiperSlide>
            <CourseBox />
          </SwiperSlide>
          <SwiperSlide>
            <CourseBox />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
