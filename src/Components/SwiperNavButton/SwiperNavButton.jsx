import React from "react";
import { useSwiper } from "swiper/react";

export default function SwiperNavButton() {
  const swiper = useSwiper();
  return (
    <div className="bg-red-700">
      <button onClick={() => swiper.slidePrev()} className="w-10 h-10 bg-black">
        Prev
      </button>
      <button onClick={() => swiper.slideNext()}>Next</button>
    </div>
  );
}
