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
    <div className="h-[calc(100vh-6.25rem)]">
      <div className="relative mx-auto my-auto aspect-[16/9] max-h-[47rem] w-full max-w-[110rem] overflow-hidden rounded-4xl bg-black">
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
            <div className="absolute top-[30%] left-[10%] space-y-4 p-4 text-left text-white sm:p-6 md:p-8">
              <div>
                <p className="text-lg font-bold sm:text-xl md:text-5xl">
                  Innovate
                </p>
                <p className="text-3xl font-extrabold sm:text-4xl md:text-7xl">
                  for Tomorrow
                </p>
              </div>
              <p className="text-lg font-bold sm:text-xl md:text-2xl">
                고객의 가치를 최우선으로 실현하는 최고의 전문 파트너
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HomeItem1;
