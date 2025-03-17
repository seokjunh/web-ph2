"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Mousewheel, Pagination } from "swiper/modules";
import HomeItem1 from "./HomeItem1";
import HomeItem2 from "./HomeItem2";

const HomeContent = () => {
  return (
    <Swiper
      direction={"vertical"}
      pagination={{
        clickable: true,
      }}
      mousewheel={true}
      slidesPerView={1}
      speed={1000}
      modules={[Pagination, Mousewheel]}
      className="h-screen"
    >
      <SwiperSlide>
        <HomeItem1 />
      </SwiperSlide>
      <SwiperSlide>
        <HomeItem2 />
      </SwiperSlide>
    </Swiper>
  );
};
export default HomeContent;
