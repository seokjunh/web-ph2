"use client";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = ["/image/img1.png", "/image/img2.png", "/image/img3.png"];

const HomeContent = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="h-screen bg-black">
      {images.map((src, i) => (
        <div key={i} className="will">
          <Image
            src={src}
            alt=""
            fill
            className={`object-cover transition-all duration-[2s] ${idx === i ? "opacity-100" : "opacity-0"}`}
          />
        </div>
      ))}
    </div>
  );
};
export default HomeContent;
