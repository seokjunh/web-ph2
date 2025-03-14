"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = ["/image/img1.png", "/image/img2.png", "/image/img3.png"];

const HomeItem1 = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="h-[calc(100vh-5.375rem)] px-[10rem] pt-[3rem] pb-[5rem]">
      <div className="relative h-full w-full overflow-hidden rounded-4xl">
        <Image
          src={images[currentIdx]}
          alt=""
          fill
          className="object-cover brightness-50"
        />
      </div>

      {/* <div className="flex overflow-hidden rounded-2xl">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`transition-transform ${currentIdx == idx ? `translate-x-${currentIdx * 100}%` : ""}`}
          >
            <Image
              src={img}
              alt=""
              fill
              className="object-cover brightness-50"
            />
          </div>
        ))}
      </div> */}
    </div>
  );
};
export default HomeItem1;
