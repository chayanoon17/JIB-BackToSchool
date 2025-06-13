"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import CountdownTimer from "./coundown";
import MoFire from "./mofire";

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3); // มี 3 จุด
    }, 5000); // ทุก 5 วินาที

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative  w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
      {/* Background gradient */}

      {/* Overlay content */}
      <div className="absolute inset-0 z-30 flex items-center justify-end pr-4 sm:pr-10 md:pr-20 lg:pr-70 pointer-events-none">
        <div className="text-white p-4 sm:p-6 rounded-xl w-full max-w-xs sm:max-w-md text-left pointer-events-auto flex flex-col items-start">
          <div className="mt-2 flex gap-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`w-6 h-2 rounded-full transition-all duration-500 ${
                  activeIndex === i ? "bg-amber-400" : "bg-white/30"
                }`}
              />
            ))}
          </div>
          <div className="">
            <Image
            src="/images/shop/logobc.svg"
            alt="JIB Logo"
            width={80}
            height={80}
            className="mt-2"
          />
          </div>
          <div className="mt-2">
            <p className="text-md font-bold">อุปกรณ์คอมพิวเตอร์ชั้นนำของประเทศ</p>
            <h1 className="font-bold text-2xl">ที่คัดสรรมาเพื่อคุณ</h1>
          </div>
          <div className="w-full">
            <CountdownTimer />
          </div>
          <div className="text-white p-4 sm:p-6 rounded-xl max-w-xs sm:max-w-md text-left flex flex-col items-start">
            <div className="mt-4 right-5 relative bg-gray-400 rounded-full h-1.5 dark:bg-gray-400">
              {/* แถบ progress */}
              <div
                className="bg-gradient-to-r from-red-500 via-pink-500 to-transparent h-1.5 rounded-full"
                style={{ width: "44%" }}
              ></div>
              {/* เปลวไฟ */}
              <div className="absolute -top-10 left-1/4 sm:left-1/3 md:left-1/4 lg:left-1/4 xl:left-1/4">
                <MoFire />
              </div>

              <Image
                src="/images/contact.svg"
                alt="Clock Icon"
                width={2400}
                height={240}
                className="mt-2 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-1/4 inset-0 z-10 bg-gradient-to-l from-[#221692]/90" />

      {/* Swiper */}
      <Swiper
        loop={true}
        autoplay={{
          delay: 5000,
        }}
        modules={[Navigation, Autoplay, Pagination]}
        className="w-full h-full z-0 mySwiper"
      >
        {["backtoschool", "commar", "summer"].map((img, i) => (
          <SwiperSlide key={i}>
            <div className="w-full h-full relative">
              <Image
                src={`/images/${img}.jpg`}
                alt={`Banner ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
