"use client";

import React, {  useState } from "react";
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

  const handleSlideChange = (swiper: { realIndex: React.SetStateAction<number>; }) => {
    setActiveIndex(swiper.realIndex); // ใช้ realIndex เพื่อให้ได้ index ของสไลด์ปัจจุบัน
  };

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] ">
      {/* Background gradient */}
      <div className="absolute inset-0  z-30 flex items-center justify-end pr-4 sm:pr-10 md:pr-20 lg:pr-70 pointer-events-none">
        <div className="text-white w-[480px] p-1 mb-6 sm:p-6 rounded-xl  max-w-xs sm:max-w-md text-left pointer-events-auto flex flex-col items-start">
          <div className="mt-2  flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`w-[21px] h-[5px] px-2  rounded-full transition-all duration-500 transform ${
                activeIndex === i ? "bg-amber-400 scale-165" : "bg-white/70"
              }`}
            />
          ))}
        </div>

          <div>
            <Image
              src="/images/shop/logobc.svg"
              alt="JIB Logo"
              width={80}
              height={80}
              className="mt-2"
            />
          </div>
          <div className="mt-2 flex flex-col gap-[4.041504383087158px]">
            <p className="text-md font-bold">อุปกรณ์คอมพิวเตอร์ชั้นนำของประเทศ</p>
            <h1 className="font-bold text-2xl">ที่คัดสรรมาเพื่อคุณ</h1>
          </div>
          <div className="w-full mt-4">
            <CountdownTimer />
          </div>
          <div className="text-white p-4 sm:p-6 rounded-xl max-w-xs sm:max-w-md text-left flex flex-col items-start">
            <div className="mt-4 right-5 relative bg-gray-400 rounded-full h-2 dark:bg-gray-400">
              {/* Progress bar */}
              <div
                className="bg-gradient-to-r from-red-500 via-pink-500 to-transparent h-2 rounded-full"
                style={{ width: "44%" }}
              ></div>
              {/* Fire animation */}
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
      <div className="absolute  left-1/6 inset-0 z-10 bg-gradient-to-l from-[#221692]/90" />

      {/* Swiper */}
      <Swiper
        loop={true}
        autoplay={{
          delay: 5000,
        }}
        speed={4000}
        modules={[Navigation, Autoplay, Pagination]}
        onSlideChange={handleSlideChange} // ติดตามการเปลี่ยนแปลงของสไลด์
        className="w-full h-full z-0 mySwiper"
      >
        {["backtoschool", "commar", "summer"].map((img, i) => (
          <SwiperSlide key={i}>
            <div className="w-full h-full ">
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
