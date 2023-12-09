import React from "react";
import ArticleBox from "../ArticleBox/ArticleBox";
import SectionHeader from "../SectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
export default function LastArticle() {
  return (
    <div className="container max-w-[1280px] bg-[url('https://xigmalearn.ir/themes/education/eduBerg/assets/img/blog-bg.svg')] bg-left-bottom bg-contain bg-no-repeat my-20 p-5 ">
      <SectionHeader
        title={"جدیدترین مقالات"}
        desc={"پیش به سوی ارتقای دانش"}
        btnTitle={"همه مقالات"}
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
            <ArticleBox />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleBox />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleBox />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleBox />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleBox />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleBox />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

/*container max-w-[1280px]  mb-20 pb-40 */
/*mt-12 grid grid-cols-1 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-x-5 */
