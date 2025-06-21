"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

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
  const duplicatedItems = [...promoItems, ...promoItems, ...promoItems];

  return (
    <div className="w-full overflow-hidden">
      <Marquee speed={30} pauseOnHover className="w-full">
        <div className="flex gap-5 items-center px-4">
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="flex-none w-[160px] sm:w-[180px] md:w-[200px] h-auto"
            >
              <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                <Image
                  src={item.image}
                  alt={`Promotion ${item.id}`}
                  width={500}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default PromoScrollList;
