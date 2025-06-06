"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import { Pagination, Navigation } from "swiper/modules";
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

  return (
    <div className="max-w-7xl mx-auto my-6 px-4 sm:px-6 lg:px-8">
      {/* Mobile Layout - Stack vertically */}
      <div className="block lg:hidden space-y-6">
        {/* Banner Swiper for Mobile */}
        <div className="w-full">
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            className="mySwiper w-full h-48 sm:h-56 rounded-lg"
          >
            <div className="absolute bottom-4 left-4 text-white z-10">
              <Image
                src="/images/shop/shot.svg"
                alt="image"
                width={1000}
                height={800}
                className=" object-cover"
              />
            </div>
            <div className="mt-2 flex justify-center items-center gap-1">
              <div className="w-6 h-2 rounded-full bg-amber-400" />
              <div className="w-6 h-2 rounded-full bg-white/30" />
              <div className="w-6 h-2 rounded-full bg-white/30" />
            </div>

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
                src="/images/shop/moniter.png"
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
            slidesPerView={1.2}
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
                <div className="bg-white rounded-lg overflow-hidden shadow-sm  h-auto">
                  {/* Logo + Heart */}
                  <div className="flex justify-between items-center p-2">
                    <Image
                      src="/images/shop/logox.png"
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
      <div className="hidden lg:grid lg:grid-cols-4 gap-6">
        {/* Banner Swiper Left */}
        <div className="col-span-1 flex flex-col justify-center items-center p-4 rounded-lg">
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{ clickable: true }}
            className="mySwiper w-full h-80 xl:h-96 rounded-lg"
          >
            <div className="absolute bottom-4 left-4 text-white z-10">
              <Image
                src="/images/shop/shot.svg"
                alt="image"
                width={1000}
                height={800}
                className=" object-cover"
              />

              <div className="mt-2 flex justify-center items-center gap-1">
                <div className="w-6 h-2 rounded-full bg-amber-400" />
                <div className="w-6 h-2 rounded-full bg-white/30" />
                <div className="w-6 h-2 rounded-full bg-white/30" />
              </div>
            </div>
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
                src="/images/shop/moniter.png"
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
        <div className="col-span-3 ">
          <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center mb-5 gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-2">
                <LaptopIcon className="w-6 h-6 text-black" />
                <h2 className="text-xl xl:text-2xl font-bold text-black">
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
                        ? "bg-blue-900 text-white"
                        : "bg-gray-100 text-blue-900"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <button className="text-blue-600 font-semibold self-start xl:self-center">
              ดูทั้งหมด &gt;
            </button>
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={2}
            grabCursor
            breakpoints={{
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            {[...Array(8)].map((_, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  {/* Logo + Heart */}
                  <div className="flex justify-between items-center p-3">
                    <Image
                      src="/images/shop/logox.png"
                      alt="โลโก้"
                      width={50}
                      height={10}
                      className="object-cover"
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

                  {/* Product Image with Hover Effect */}
                  <div className="relative group">
                    <Image
                      src="/images/shop/rtxti.png"
                      alt="สินค้า"
                      width={300}
                      height={150}
                      className="w-full h-32 xl:h-36 object-cover transition-all duration-300 group-hover:brightness-75"
                    />

                    {/* Hover Overlay with Buttons */}
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
                  <Marquee speed={50} pauseOnHover>
                    <h4 className="text-sm font-semibold bg-black text-white w-full whitespace-nowrap">
                      {categories.find((c) => c.id === activeCategory)?.name} -
                      VGA GALAX RTX 3060 Ti {i + 1}
                    </h4>
                  </Marquee>

                  {/* Product Details */}
                  <div className="p-3">
                    <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                      VGA (การ์ดแสดงผล) GALAX GEFORCE RTX 3060
                    </p>
                    <div className="flex items-center justify-between mb-2">
                      <div className="bg-red-600 px-2 py-1 rounded-lg">
                        <p className="text-white font-bold">-70%</p>
                      </div>
                      <p className="text-red-600 font-bold text-lg">฿9,990</p>
                      <p className="text-gray-400 text-xs line-through">
                        ฿38,990
                      </p>
                    </div>
                    <p className="text-gray-400 text-xs">
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
    </div>
  );
}
