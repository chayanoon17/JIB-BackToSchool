"use client";
import React, { useRef } from "react";
import Image from "next/image";

const promoItems = [
  { id: 1, image: "/images/jib/promo1.png" },
  { id: 2, image: "/images/jib/promo2.png" },
  { id: 3, image: "/images/jib/promo3.png" },
  { id: 4, image: "/images/jib/promo4.png" },
  { id: 5, image: "/images/jib/promo5.png" },
  { id: 6, image: "/images/jib/promo6.png" },
  { id: 7, image: "/images/jib/promo7.png" },
  { id: 8, image: "/images/jib/promo8.png" },
];

const PromoScrollList = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (e: React.MouseEvent) => {
    isDown = true;
    if (!containerRef.current) return;
    startX = e.pageX - containerRef.current.offsetLeft;
    scrollLeft = containerRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
  };

  const handleMouseUp = () => {
    isDown = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll speed
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      className="overflow-x-auto scroll-smooth whitespace-nowrap py-6 cursor-grab active:cursor-grabbing select-none"
      style={{
        scrollbarWidth: "none", // Firefox
        msOverflowStyle: "none", // IE 10+
      }}
    >
      <style>
        {`
          /* Hide scrollbar in webkit browsers */
          ::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <div className="flex gap-4 w-max">
        {promoItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[180px] h-[180] overflow-hidden shadow"
          >
            <Image
              src={item.image}
              alt={`Promotion ${item.id}`}
              width={200}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoScrollList;
