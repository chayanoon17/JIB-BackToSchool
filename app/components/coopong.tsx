import React, { useState } from "react";
import Image from "next/image";

const coupons = [
  { id: 1, highlight: true },
  { id: 2 }, { id: 3 }, { id: 4 },
  { id: 5 }, { id: 6 }, { id: 7 }, { id: 8}
];

export default function CouponSection() {
  const [activeCategory, setActiveCategory] = useState("ส่วนลด");
  const categories = [
    { id: "ส่วนลด", name: "ส่วนลด" },
    { id: "ของแถม", name: "ของแถม" },
    { id: "แบรนด์ดัง", name: "แบรนด์ดัง" },
  ];

  return (
    <div className="scale-95 pt-10 px-4 max-w-screen-xl mx-auto text-center">

      <div className="flex justify-center items-center">
        
        <Image
          src="/images/coopong.svg"
          alt="coopong"
          width={30}
          height={30}
          className="object-contain"
        />
      </div>
      
      <h2 className="text-xl font-bold mb-6">คูปองส่วนลด</h2>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3 py-1 text-sm rounded-full font-semibold ${
              activeCategory === cat.id
                ? "bg-[#221690] text-white"
                : "bg-gray-100 text-[#221690]"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Coupon Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
        {coupons.map((coupon) => (
          <div key={coupon.id} className="relative">
            <Image alt="card" src="/images/cardcoopong.svg" width={300} height={30} className="w-full h-auto" />

            <Image
              alt="logo"
              src="/images/logo-jib.svg"
              width={230}
              height={200}
              className="absolute -top-7 right-0 z-0 overflow-hidden opacity-15"
            />

            {/* Right - Button */}
            <div>
              <button className="bg-[#FFAE1E] absolute hover:bg-[#221690] top-8 right-7 text-white text-xs font-light rounded-lg px-3 py-2">
                เก็บคูปอง
              </button>
            </div>

            <div className="absolute bg-yellow-300/30 px-2 rounded-lg top-3 left-4">
              <span className="text-yellow-500 text-xs">พิเศษเฉพาะคุณ</span>
            </div>

            <div className="absolute top-10 left-4">
              <span className="text-white text-xs font-bold">รับส่วนลด 10 % สูงสุด 100 ฿</span>
            </div>

            <div className="absolute top-15 left-4">
              <span className="text-white text-xs font-light">สามารถใช้งานได้ถึง 12 Dec 2025</span>
            </div>

            {/* "แนะนำ" Badge */}
            {coupon.highlight && (
              <span
                className="absolute -top-2 right-1 bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-md"
                style={{
                  animationName: "flash",
                  animationDuration: "1s",
                  animationTimingFunction: "ease-in-out",
                  animationIterationCount: "infinite",
                }}
              >
                แนะนำ
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
