"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import Box from "@mui/material/Box";

const brands = [
  "/images/slide/b1.svg",
  "/images/slide/b2.svg",
  "/images/slide/b3.svg",
  "/images/slide/b4.svg",
  "/images/slide/b5.svg",
  "/images/slide/b6.svg",
  "/images/slide/b7.svg",
  "/images/slide/b8.svg",
  "/images/slide/b9.svg",
  "/images/slide/b11.svg",
];
const brands1 = [
  "/images/slide2/b1.svg",
  "/images/slide2/b2.svg",
  "/images/slide2/b3.svg",
  "/images/slide2/b4.svg",
  "/images/slide2/b5.svg",
  "/images/slide2/b6.svg",
  "/images/slide2/b7.svg",
  "/images/slide2/b8.svg",
  "/images/slide2/b9.svg",
  "/images/slide2/b11.svg",
  "/images/slide2/b12.svg",
  "/images/slide2/b13.svg",
];

export default function BrandSlider() {
  return (
    <Box sx={{ backgroundColor: "#fff", py: 6 }}>
            <div className="absolute left-3/4 inset-0 z-10 bg-gradient-to-l from-[#ffff]/100 to-transparent" />
            <div className="absolute right-3/4 inset-0 z-10 bg-gradient-to-r from-[#ffff]/100 to-transparent" />
      <div className="px-4 space-y-10 opacity-[0.40] ">
        {/* แถวบน เลื่อนไปทางขวา */}
        <Marquee speed={30}  gradient={false} pauseOnHover>
          {brands.map((src, index) => (
            <Box
              key={`top-${index}`}
              sx={{
                mx: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                
              }}
            >
              <Image  src={src} alt={`brand-top-${index}`} width={190} height={70} layout="intrinsic"
              />
            </Box>
          ))}
        </Marquee>

        {/* แถวล่าง เลื่อนไปทางซ้าย */}
        <Marquee direction="right" speed={30} gradient={false} pauseOnHover>
          {brands1.map((src, index) => (
            <Box
              key={`bottom-${index}`}
              sx={{
                mx: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image src={src} alt={`brand-bottom-${index}`} width={190} height={70} layout="intrinsic" 
             />
            </Box>
          ))}
        </Marquee>
      </div>
    </Box>
  );
}
