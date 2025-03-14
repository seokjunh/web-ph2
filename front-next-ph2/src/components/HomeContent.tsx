"use client";

import HomeItem1 from "@/components/HomeItem1";
import HomeItem2 from "@/components/HomeItem2";
import { useEffect, useRef } from "react";

const HomeContent = () => {
  const wheelRef = useRef(null);

  const wheelHandler = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const { deltaY } = e;
    const { scrollTop } = wheelRef.current;
    const pageHeight = window.innerHeight;

    if (deltaY > 0) {
      console.log(deltaY, scrollTop, pageHeight);
    } else {
      console.log(deltaY, scrollTop, pageHeight);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", wheelHandler);

    return () => {
      window.removeEventListener("whell", wheelHandler);
    };
  });
  return (
    <div ref={wheelRef}>
      <HomeItem1 />
      <HomeItem2 />
    </div>
  );
};
export default HomeContent;
