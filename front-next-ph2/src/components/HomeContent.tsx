"use client";

import { useEffect, useState } from "react";
import HomeSwiper from "./HomeSwiper";
import HomeNotSwiper from "./HomeNotSwiper";

const HomeContent = () => {
  const [isSwiperEnabled, setIsSwiperEnabled] = useState(true);

  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth < 850) {
        setIsSwiperEnabled(false);
      } else {
        setIsSwiperEnabled(true);
      }
    };

    resizeHandler();

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return <>{isSwiperEnabled ? <HomeSwiper /> : <HomeNotSwiper />}</>;
};
export default HomeContent;
