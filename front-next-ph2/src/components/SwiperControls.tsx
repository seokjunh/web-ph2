"use client";

import { useEffect, useRef } from "react";
import { useSwiper } from "swiper/react";

const SwiperControls = () => {
  const swiper = useSwiper();
  const scrollingFromFooter = useRef(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (swiper.isEnd) {
        if (e.deltaY > 0) {
          scrollingFromFooter.current = true;
          swiper.mousewheel.disable();
          return;
        } else if (scrollingFromFooter.current) {
          // 푸터에서 위로 스크롤하여 다시 스와이퍼 영역으로 돌아오는 경우
          const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
          if (scrollTop === 0) {
            scrollingFromFooter.current = false;

            // 약간의 지연 후 마우스휠 활성화 (스크롤 이벤트 충돌 방지)
            setTimeout(() => {
              swiper.mousewheel.enable();
            }, 50);
          }
        }
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => window.removeEventListener("wheel", handleWheel);
  }, [swiper]);

  return null;
};

export default SwiperControls;
