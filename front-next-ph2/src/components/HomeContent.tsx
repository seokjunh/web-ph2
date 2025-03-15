"use client";

import HomeItem1 from "@/components/HomeItem1";
import HomeItem2 from "@/components/HomeItem2";
import { useEffect, useRef } from "react";

const HomeContent = () => {
  const wheelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      if (wheelRef.current == null) {
        return;
      }
      const { deltaY } = e;
      const { scrollTop } = wheelRef.current;
      const pageHeight = window.innerHeight;

      if (deltaY > 0) {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          e.preventDefault();
          //현재 1페이지
          console.log("현재 1페이지, down");
          wheelRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          console.log("현재 2페이지, down");
          wheelRef.current.scrollTo({
            top: pageHeight * 2,
            left: 0,
            behavior: "smooth",
          });
        }
      } else {
        console.log(deltaY, scrollTop, pageHeight);
      }
    };

    const wheelRefCurrent = wheelRef.current;
    if (wheelRefCurrent == null) {
      return;
    }
    wheelRefCurrent.addEventListener("wheel", wheelHandler);

    return () => {
      wheelRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);
  return (
    <div ref={wheelRef}>
      <HomeItem1 />
      <HomeItem2 />
    </div>
  );
};
export default HomeContent;
