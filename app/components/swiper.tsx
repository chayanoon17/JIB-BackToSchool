"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

export default function App() {
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef(null);

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
      {/* Background gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-l from-[#221692]/90 to-transparent" />

      {/* Overlay content */}
      <div className="absolute inset-0 z-30 flex items-center justify-end pr-4 sm:pr-10 md:pr-20 lg:pr-40 pointer-events-none">
        <div className="text-white p-4 sm:p-6 rounded-xl w-full max-w-xs sm:max-w-md text-left pointer-events-auto flex flex-col items-start">
          <Image
            src="/images/shop/logobc.svg"
            alt="JIB Logo"
            width={100}
            height={100}
          />
          <p className="mt-2 text-sm sm:text-base">
            อุปกรณ์คอมพิวเตอร์ชั้นนำของประเทศ
          </p>
          <h2 className="text-xl sm:text-2xl font-bold leading-snug mb-4">
            ที่คัดสรรมาเพื่อคุณ
          </h2>
          <div className="flex justify-center gap-2 sm:gap-4 text-xs sm:text-sm mb-2">
            {["03", "08", "19", "12"].map((t, i) => (
              <React.Fragment key={i}>
                <div className="bg-black/50 px-2 py-1 sm:px-3 sm:py-2 rounded-lg">
                  <div className="text-lg sm:text-xl text-amber-300 font-bold">{t}</div>
                </div>
                {i < 3 && (
                  <div className="text-lg sm:text-xl text-gray-300 font-bold">:</div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* 🔥 Custom Progress Bar */}
          <div className="relative mt-4 sm:mt-6 h-2 sm:h-3 rounded-full bg-gray-300 overflow-hidden w-full">
            <div
              className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-fuchsia-500"
              style={{
                width: `${progress * 100}%`,
                transition: "width 0.1s linear",
              }}
            />
            {/* Flame icon */}
            <div
              className="absolute -top-3 sm:-top-2 z-10 text-lg sm:text-2xl"
              style={{
                left: `calc(${progress * 100}% - 12px)`,
                transition: "left 0.1s linear",
              }}
            >
              🔥
            </div>
          </div>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        ref={swiperRef}
        navigation
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="w-full h-full z-0"
        onAutoplayTimeLeft={(s, time, progressVal) => {
          setProgress(1 - progressVal); // flip progress
        }}
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