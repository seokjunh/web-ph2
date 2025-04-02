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
    <div className="lg:h-[calc(100vh-6.25rem)] lg:px-[5rem] lg:pb-[7rem]">
      <div className="relative mx-auto aspect-[16/9] h-full w-full overflow-hidden rounded-4xl bg-black">
        {images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute h-full w-full transition-opacity duration-[2s] ease-in-out ${currentIdx === idx ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={img}
              alt="Home banner image"
              fill
              className="object-cover brightness-50"
              loading="eager"
              priority={true}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 60vw"
              quality={75}
              placeholder="blur"
              blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='12'/%3E%3C/filter%3E%3Crect width='100%' height='100%' fill='%23333333'/%3E%3C/svg%3E"
            />
            <div className="absolute top-[30%] left-[5%] space-y-4 text-white lg:top-[40%] lg:left-[10%]">
              <div>
                <p className="text-lg font-bold sm:text-xl md:text-5xl">
                  Innovate
                </p>
                <p className="text-3xl font-extrabold sm:text-4xl md:text-7xl">
                  for Tomorrow
                </p>
              </div>
              <p className="text-md font-bold sm:text-xl md:text-2xl">
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
