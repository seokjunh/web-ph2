"use client";

import HomeItem1 from "./HomeItem1";
import HomeItem2 from "./HomeItem2";
import HomeSwiper from "./HomeSwiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import useSwiperStore from "@/stores/swiperStroe";

const HomeContent = () => {
  const { setSwiperIndex } = useSwiperStore();

  return (
    <>
      <Swiper
        direction={"vertical"}
        modules={[Mousewheel]}
        className="h-screen"
        mousewheel
        speed={1200}
        onActiveIndexChange={(e) => setSwiperIndex(e.realIndex)}
      >
        <SwiperSlide>
          <HomeSwiper />
        </SwiperSlide>
        <SwiperSlide>
          <HomeItem1 />
        </SwiperSlide>
        <SwiperSlide>
          <HomeItem2 />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default HomeContent;
