"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic"; // นำเข้า dynamic จาก next/dynamic
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import CountdownTimer from "./coundown";

// ใช้ dynamic import สำหรับ Lottie เพื่อไม่ให้เกิดข้อผิดพลาดที่ SSR
const FireIcon = dynamic(() => import("./freIcon"), { ssr: false });

export default function SwiperApp() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // สร้าง function เพื่อให้ progress วิ่งจาก 0-100% ใน 2 นาที
  useEffect(() => {
    const duration = 120000; // 2 นาที = 120,000 มิลลิวินาที
    const intervalTime = duration / 100; // เพิ่ม progress ทีละ 1% ทุก 1200ms

    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(oldProgress + 1, 100); // เพิ่มค่าทีละ 1%
      });
    }, intervalTime); // ทุก 1,200ms เพิ่ม progress ทีละ 1%

    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (swiper: { realIndex: React.SetStateAction<number>; }) => {
    setActiveIndex(swiper.realIndex); // ใช้ realIndex เพื่อให้ได้ index ของสไลด์ปัจจุบัน
  };

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
      {/* Background gradient */}
      <div className="absolute inset-0 z-30 flex items-center justify-end pr-4 sm:pr-10 md:pr-20 lg:pr-70 pointer-events-none">
        <div className="text-white w-[480px] p-1 mb-6 sm:p-6 rounded-xl max-w-xs sm:max-w-md text-left pointer-events-auto flex flex-col items-start">
          <div className="mb-4 flex gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`w-5 h-1 px-2 rounded-full transition-all duration-500 transform ${
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
          <div className="mt-2">
            <p className="text-md font-semibold">อุปกรณ์คอมพิวเตอร์ชั้นนำของประเทศ</p>
            <span className="font-semibold text-2xl">ที่คัดสรรมาเพื่อคุณ</span>
          </div>
          <div className="w-full mt-4 ml-4">
            <CountdownTimer />
          </div>
          {/* Progress bar with FireIcon */}
          <div className="w-[95%] relative mt-10">
            <div className="w-full bg-gray-200  rounded-full h-2.5 dark:bg-gray-400">
              <div
                className="bg-gradient-to-r from-red-600 via-pink-500 to-pink-400  h-2.5 rounded-full"
                style={{ width: `${progress}%`, transition: "width 1s ease" }} // เพิ่ม transition
              ></div>
            </div>
            {/* FireIcon ที่เคลื่อนที่ตาม progress bar */}
            <div
              className="absolute top-0 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${progress}%`,  // เคลื่อนที่ตาม progress
                transition: "left 0.1s ease", // ทำให้ FireIcon เคลื่อนที่อย่างลื่นไหล
              }}
            >
              <FireIcon
               
              />
            </div>
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

      <div
        className="absolute left-3/8 inset-0 z-10"
        style={{
          background: 'linear-gradient(90deg, #2c1a7000 0%, #2c1a70cc 38.73%)',
        }}
      />

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
      <div className="">
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
