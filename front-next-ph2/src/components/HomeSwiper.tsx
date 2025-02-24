"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

const HomeSwiper = () => {
  return (
    <Swiper>
      <SwiperSlide>
        <Image
          src={"/image/img1.png"}
          alt=""
          width={2000}
          height={1200}
          className="max-h-screen"
        />
      </SwiperSlide>
    </Swiper>
  );
};
export default HomeSwiper;
