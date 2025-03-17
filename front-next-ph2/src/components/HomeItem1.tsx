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
    <div className="h-[calc(100vh-5.375rem)] px-[5.938rem] pt-[0.938rem] pb-[6.813rem]">
      <div className="relative h-full w-full overflow-hidden rounded-4xl bg-black">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute h-full w-full transition-opacity duration-[2s] ease-in-out ${currentIdx === idx ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={img}
              alt=""
              fill
              className="object-cover brightness-50"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default HomeItem1;
