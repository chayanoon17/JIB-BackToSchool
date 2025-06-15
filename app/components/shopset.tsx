"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import {  Navigation } from "swiper/modules";
import { LaptopIcon } from "lucide-react";
import Marquee from "react-fast-marquee";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import DataArrayIcon from "@mui/icons-material/DataArray";

export default function ShopSection() {
  const [activeCategory, setActiveCategory] = useState("game");
  const [liked, setLiked] = useState(false);
  const categories = [
    { id: "game", name: "สายเกม" },
    { id: "graphic", name: "สายกราฟิก" },
    { id: "anime", name: "สายอนิเมชั่น" },
  ];

    const [activeIndex, setActiveIndex] = useState(0);
  const handleSlideChange = (swiper: { realIndex: React.SetStateAction<number>; }) => {
      setActiveIndex(swiper.realIndex); // ใช้ realIndex เพื่อให้ได้ index ของสไลด์ปัจจุบัน
    };

  return (
    <div className="max-w-7xl mx-auto my-6 px-4 sm:px-6 lg:px-8">
      {/* Mobile Layout - Stack vertically */}
      <div className="block lg:hidden space-y-6">
        {/* Banner Swiper for Mobile */}
        <div className="w-full">
          <Swiper
          onSlideChange={handleSlideChange}
            modules={[ Navigation]}
            pagination={{ clickable: true }}
            className="mySwiper w-full h-full sm:h-56 rounded-lg"
          >
            <div className="absolute bottom-4 left-4 text-white z-10">
              <Image
                src="/images/shop/pic.svg"
                alt="image"
                width={1000}
                height={800}
                className=" object-cover"
              />
            </div>
<div className="flex justify-center items-center gap-1 mb-3">
                {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`w-5 h-1 px-2  rounded-full transition-all duration-500 transform ${
                activeIndex === i ? "bg-amber-400 scale-165" : "bg-white/30"
              }`}
            />
          ))}
              </div>

 <SwiperSlide>
              <Image
                src="/images/shop/moniter.png"
                alt="image"
                width={300}
                height={150}
                className="rounded-lg w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-full">
                <Image
                  src="/images/shop/keyboard.png"
                  alt="image"
                  width={300}
                  height={150}
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/images/shop/mouse.png"
                alt="image"
                width={300}
                height={150}
                className="rounded-lg w-full h-full object-cover"
              />
            </SwiperSlide>
           
            <SwiperSlide>
              <Image
                src="/images/shop/phone.png"
                alt="image"
                width={300}
                height={150}
                className="rounded-lg w-full h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Products Section for Mobile */}
        <div className="w-full">
          {/* Header */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <LaptopIcon className="w-5 h-5 text-black" />
              <h2 className="text-xl sm:text-2xl font-bold text-black">
                โน้ตบุ๊ค
              </h2>
            </div>

            {/* Category buttons - Stack on very small screens */}
            <div className="flex flex-wrap gap-2 mb-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1 text-sm rounded-full font-semibold ${
                    activeCategory === cat.id
                      ? "bg-blue-900 text-white"
                      : "bg-gray-100 text-blue-900"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <button className="text-blue-600 font-semibold text-sm">
              ดูทั้งหมด &gt;
            </button>
          </div>

          {/* Products Swiper for Mobile */}
          <Swiper

            modules={[Navigation]}
            spaceBetween={12}
            slidesPerView={2}
            grabCursor
            breakpoints={{
              480: {
                slidesPerView: 1.5,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
            }}
          >
            {[...Array(8)].map((_, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white rounded-lg overflow-hidden h-auto w-[]">
                  {/* Logo + Heart */}
                  <div className="flex justify-between items-center p-2">
                    <Image
                      src="/images/shop/logobc.svg"
                      alt="โลโก้"
                      width={35}
                      height={7}
                      className="object-cover h-4"
                    />
                    <button
                      className={`transition duration-300 ${
                        liked ? "text-red-600" : "text-black"
                      }`}
                      type="button"
                      onClick={() => setLiked(!liked)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill={liked ? "currentColor" : "none"}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.995 21.05l-.91-.837C5.39 14.856 2 11.738 2 7.865 2 5.107 4.136 3 6.867 3c1.564 0 3.07.766 4.128 2.013C11.06 3.766 12.566 3 14.13 3 16.864 3 19 5.107 19 7.865c0 3.873-3.39 6.99-9.085 12.348l-.92.837z"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Product Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      src="/images/shop/rtxti.png"
                      alt="สินค้า"
                      width={300}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                    <div className="text-xs h-52  absolute inset-0 bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <button className="flex bg-black text-white px-4 py-2 rounded-full font-medium  duration-200 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        <ShoppingBagIcon fontSize="small" />
                        <p>ใส่ตะกร้า</p>
                      </button>
                      <button className="flex bg-white text-black px-4 py-2 rounded-full font-medium  duration-200 transform translate-y-4 group-hover:translate-y-0 transition-transform delay-75">
                        <DataArrayIcon fontSize="small" />
                        <p>ดูตัวอย่าง</p>
                      </button>
                    </div>
                  </div>

                  {/* Product Title with Marquee */}
                  <Marquee speed={30} pauseOnHover>
                    <h4 className="text-xs font-semibold bg-black text-white w-96 whitespace-nowrap">
                      {categories.find((c) => c.id === activeCategory)?.name} -
                      VGA GALAX RTX 3060 Ti {i + 1}
                    </h4>
                  </Marquee>
                  {/* Product Details */}
                  <div className="p-2 space-y-1">
                    <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                      VGA (การ์ดแสดงผล) GALAX GEFORCE RTX 3060
                    </p>
                    <div className="flex items-center justify-between mb-2">
                      <div className="bg-red-600  px-2 py-1 rounded-lg ">
                        <p className="text-white font-bold ">-70%</p>
                      </div>
                      <p className="text-red-600 font-bold text-lg">฿9,990</p>
                      <p className="text-gray-400 text-xs line-through">
                        ฿38,990
                      </p>
                    </div>
                    <p className="text-gray-400 text-xs ">
                      ขายไปแล้ว 70/330 ชิ้น
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300">
                      <div
                        className="bg-blue-950 h-2.5 rounded-full"
                        style={{ width: "45%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Desktop/Tablet Layout - Side by side */}
      <div className="hidden lg:grid lg:grid-cols-4 gap-3 ">
        {/* Banner Swiper Left */}
        <div className="col-span-1 flex flex-col justify-center items-center p-2  rounded-lg">
          <Swiper
             onSlideChange={handleSlideChange} // ติดตามการเปลี่ยนแปลงของสไลด์

            modules={[ Navigation]}
            pagination={{ clickable: true }}
            className="mySwiper w-full h-90 xl:h-100 rounded-xl"
          >
            <div className="absolute bottom-0 left-0 text-white z-10">
              <Image
                src="/images/shop/pic.svg"
                alt="image"
                width={1000}
                height={800}
                className=" object-cover"
              />

                <div className="flex justify-center items-center gap-1 mb-3">
                {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`w-5 h-1 px-2  rounded-full transition-all duration-500 transform ${
                activeIndex === i ? "bg-amber-400 scale-165" : "bg-white/30"
              }`}
            />
          ))}
              </div>
            </div>
            <SwiperSlide>
              <Image
                src="/images/shop/moniter.png"
                alt="image"
                width={300}
                height={150}
                className="rounded-lg w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-full">
                <Image
                  src="/images/shop/keyboard.png"
                  alt="image"
                  width={300}
                  height={150}
                  className="rounded-lg w-full h-full object-cover"
                />

                {/* Overlay Text */}
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <Image
                src="/images/shop/mouse.png"
                alt="image"
                width={300}
                height={150}
                className="rounded-lg w-full h-full object-cover"
              />
            </SwiperSlide>
            
            <SwiperSlide>
              <Image
                src="/images/shop/phone.png"
                alt="image"
                width={300}
                height={150}
                className="rounded-lg w-full h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Products Swiper Right */}
        <div className="col-span-3 p-4 mt-10">
          <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 ">
              <div className="flex items-center gap-2">
                <LaptopIcon className="w-6 h-6 text-black" />
                <h2 className="text-xs xl:text-xl font-bold text-black ">
                  โน้ตบุ๊ค
                </h2>
              </div>

              {/* Category buttons */}
              <div className="flex gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-1 rounded-full font-semibold text-sm ${
                      activeCategory === cat.id
                        ? "bg-[#221690] text-white"
                        : "bg-gray-100 text-blue-900"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <span className="text-blue-600 text-[10px] font-semibold self-start xl:self-center">
              ดูทั้งหมด &gt;
            </span>
          </div>

          <div className="w-full ">
            <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={4.5}
            grabCursor
            breakpoints={{
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1280: {
                slidesPerView: 4.5,
                spaceBetween: 10,
              },
            }}
          >
            <div className="absolute left-3/4 inset-0 z-10 bg-gradient-to-l from-[#ffff]/100 to-transparent" />


            {[...Array(8)].map((_, i) => (
              <SwiperSlide key={i} 
              >
                <div className="relative bg-white rounded-lg overflow-hidden ">
                  {/* Logo + Heart */}
                  <div className="flex justify-between items-center p-3 ">
                    <Image
                      src="/images/shop/logobc.svg"
                      alt="โลโก้"
                      width={64}
                      height={29}
                      className="object-cover"
                    />
                    <button
                      className={`transition duration-300 ${
                        liked ? "text-black" : "text-black"
                      }`}
                      type="button"
                      onClick={() => setLiked(!liked)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill={liked ? "currentColor" : "none"}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.995 21.05l-.91-.837C5.39 14.856 2 11.738 2 7.865 2 5.107 4.136 3 6.867 3c1.564 0 3.07.766 4.128 2.013C11.06 3.766 12.566 3 14.13 3 16.864 3 19 5.107 19 7.865c0 3.873-3.39 6.99-9.085 12.348l-.92.837z"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Product Image with Hover Effect */}
                  <div className="relative group ">
                    <Image
                      src="/images/shop/rtxti.png"
                      alt="สินค้า"
                      width={300}
                      height={150}
                      className="w-full h-32 xl:h-36 object-cover transition-all duration-300 group-hover:brightness-75"
                    />

                    {/* Hover Overlay with Buttons */}
                    <div className="text-[10px] h-52 absolute inset-0 bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                    <button className="flex items-center w-auto bg-black text-white px-2 py-1 rounded-full font-medium text-[10px] duration-200 transform translate-y-3 group-hover:translate-y-0 transition-transform">
                      <ShoppingBagIcon fontSize="small" className="mr-1" />
                      <span>ใส่ตะกร้า</span>
                    </button>
                    <button className="flex items-center bg-white text-black px-2 py-1 rounded-full font-medium text-[10px] duration-200 transform translate-y-3 group-hover:translate-y-0 transition-transform delay-75">
                      <DataArrayIcon fontSize="small" className="mr-1" />
                      <span>ดูตัวอย่าง</span>
                    </button>
                  </div>

                  </div>

                  {/* Product Title with Marquee */}
                  <Marquee speed={50} pauseOnHover>
                    <h4 className="text-sm font-semibold bg-black text-white w-full whitespace-nowrap">
                      {categories.find((c) => c.id === activeCategory)?.name} -
                      VGA GALAX RTX 3060 Ti {i + 1}
                    </h4>
                  </Marquee>

                  {/* Product Details */}
                  <div className="p-3">
                    <p className="text-[10px] text-gray-600 line-clamp-2 mb-2">
                      VGA (การ์ดแสดงผล) GALAX GEFORCE RTX 3060
                    </p>
                    <p className="text-[9px] text-gray-600 mb-2">
                      ไม่มีหมวดหมู่
                    </p>
                    <div className="flex text-[10px] items-center justify-between mb-2">
                      <div className="bg-red-600 px-2 py-1 rounded-lg">
                        <p className="text-white font-bold">-70%</p>
                      </div>
                      <p className="text-red-600 font-bold text-[15px]">฿9,990</p>
                      <p className="text-gray-400 text-xs line-through">
                        ฿38,990
                      </p>
                    </div>
                    <p className="text-gray-400 text-[10px]">
                      ขายไปแล้ว 70/330 ชิ้น
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300">
                      <div
                        className="bg-blue-950 h-2.5 rounded-full"
                        style={{ width: "40%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
