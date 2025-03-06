"use client";

import Image from "next/image";

import { useState } from "react";
import ViewMoreButton from "./ViewMoreButton";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const items = [
  {
    title1: "데이터 기반 디지털 전환으로",
    title2: "제조현장을 재정의합니다.",
    desc: "나무아이앤씨는 데이터 기반하여 디지털 전환을 실현하는 최고의 파트너입니다.",
    img: "/image/img1.png",
  },
  {
    title1: "제조현장의 고도화,",
    title2: "제조현장을 재정의합니다.",
    desc: "나무아이앤씨는 데이터로 제조 혁신의 새 기준을 제시합니다.",
    img: "/image/img2.png",
  },
  {
    title1: "데이터 기반의 신속한 의사결정을 제시하고",
    title2: "고객에게 최고의 서비스를 제공합니다.",
    desc: "나무아이앤씨는 고객의 가치를 최우선으로 생각하는 스마트팩토리 전문기업입니다.",
    img: "/image/img3.png",
  },
];

const HomeSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      loop
      speed={2500}
      onSlideChange={(swiper) => {
        setActiveIndex(swiper.realIndex);
      }}
    >
      {items.map((item, idx) => (
        <SwiperSlide className="relative" key={idx}>
          <div className="relative h-[50vh] md:h-screen">
            <Image
              src={item.img}
              alt=""
              fill
              className="object-cover brightness-50"
              priority={idx === 0}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center space-y-20 text-white">
            <div
              className={`space-y-4 ${activeIndex === idx && "animate-fadeInUp"} `}
            >
              <div className="text-xl font-semibold sm:space-y-4 md:text-4xl xl:text-6xl">
                <div>{item.title1}</div>
                <div>{item.title2}</div>
              </div>
              <div className="text-[0.6rem] md:text-[0.9rem] xl:text-[1.5rem]">
                {item.desc}
              </div>
              <ViewMoreButton />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default HomeSwiper;
