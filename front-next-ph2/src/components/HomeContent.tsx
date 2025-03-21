"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { useEffect, useState } from "react";
import { Mousewheel, Pagination } from "swiper/modules";
import HomeItem1 from "./HomeItem1";
import HomeItem2 from "./HomeItem2";
import HomeItem3 from "./HomeItem3";
import HomeItem4 from "./HomeItem4";
import Footer from "./Footer";

const HomeContent = () => {
  const [isSwiperEnabled, setIsSwiperEnabled] = useState(true);
  const swiper = useSwiper();
  const items = ["MAIN", "ABOUT US", "BUSINESS", "PERFORMANCE"];

  const pagination = {
    clickable: true,
    bulletClass: "custom_bullet",
    bulletActiveClass: "swiper-pagination-custom-bullet-active",
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + items[index] + "</span>";
    },
  };

  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth < 850) {
        setIsSwiperEnabled(false);
      } else {
        setIsSwiperEnabled(true);
      }
    };

    resizeHandler();

    window.addEventListener("resize", resizeHandler, { passive: true });

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  useEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      if (e.deltaY < 0 && swiper) {
        swiper.mousewheel.enable();
        console.log(e.deltaY);
      }
    };

    window.addEventListener("wheel", wheelHandler);

    return () => {
      window.removeEventListener("wheel", wheelHandler);
    };
  }, [swiper]);

  return (
    <>
      {isSwiperEnabled ? (
        <>
          <Swiper
            direction={"vertical"}
            pagination={pagination}
            mousewheel={{ enabled: true }}
            slidesPerView={1}
            speed={1500}
            modules={[Mousewheel, Pagination]}
            className="h-[calc(100vh-6.25rem)]"
            onReachEnd={(swiper) => {
              swiper.mousewheel.disable();
            }}
          >
            <SwiperSlide>
              <HomeItem1 />
            </SwiperSlide>
            <SwiperSlide>
              <HomeItem2 />
            </SwiperSlide>
            <SwiperSlide>
              <HomeItem3 />
            </SwiperSlide>
            <SwiperSlide>
              <HomeItem4 />
            </SwiperSlide>
          </Swiper>
          <Footer />
        </>
      ) : (
        <div>
          <HomeItem1 />
          <HomeItem2 />
          <HomeItem2 />
          <HomeItem2 />
        </div>
      )}
    </>
  );
};
export default HomeContent;
