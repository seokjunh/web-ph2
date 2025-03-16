"use client";

import HomeItem1 from "@/components/HomeItem1";
import HomeItem2 from "@/components/HomeItem2";
import { useEffect, useRef, useState } from "react";

const HomeContent = () => {
  const [page, setPage] = useState(() => {
    const savedPage = localStorage.getItem("page");
    return savedPage ? parseInt(savedPage, 10) : 0; // 값이 없으면 0으로 초기화
  });
  const lastPage = 1;
  const wheelRef = useRef(null);

  useEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();

      if (e.deltaY > 0) {
        setPage((prev) => Math.min(prev + 1, lastPage));
        console.log(page);
      } else {
        setPage((prev) => Math.max(prev - 1, 0));
        console.log(page);
      }
    };

    window.addEventListener("wheel", wheelHandler, { passive: false });

    localStorage.setItem("page", page.toString());

    return () => {
      window.removeEventListener("wheel", wheelHandler);
    };
  }, [page]);
  return (
    <div
      ref={wheelRef}
      className="relative space-y-[5.375rem] transition-all duration-1000"
      style={{ top: `${page * -100}vh` }}
    >
      <HomeItem1 />
      <HomeItem2 />
    </div>
  );
};
export default HomeContent;
