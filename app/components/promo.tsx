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
  return (
    <Marquee speed={30} pauseOnHover>
      <div className="flex gap-5 w-max mr-4 mb-15">
        {promoItems.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[180px] h-[180px] overflow-hidden"
          >
            <Image
              src={item.image}
              alt={`Promotion ${item.id}`}
              width={200}
              height={200}
              className="object-cover w-full h-full "
            />
          </div>
        ))}
      </div>
    </Marquee>
  );
};

export default PromoScrollList;
