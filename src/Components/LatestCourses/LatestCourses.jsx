import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SectionHeader from "../SectionHeader/SectionHeader";
import CourseBox from "../CourseBox/CourseBox";
import "swiper/css";
import "swiper/css/navigation";

export default function LatestCourses() {
  return (
    <div className="container max-w-[1280px] my-20 p-5">
      <SectionHeader
        title={"جدیدترین دوره ها"}
        desc={"رشد شما با یادگیری آغاز میشود..."}
        btnTitle={"همه دوره ها"}
        btnHref={"courses"}
      />
      <div className="mt-5 p-2.5 flex">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
            },

            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1150: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={20}
          navigation={true}
          loop={true}
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
