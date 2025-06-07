"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import Box from "@mui/material/Box";

const brands = [
  "/images/slide/b2.svg",
  "/images/slide/b3.svg",
  "/images/slide/b4.svg",
  "/images/slide/b5.svg",
  "/images/slide/b6.svg",
  "/images/slide/b7.svg",
  "/images/slide/b8.svg",
  "/images/slide/b9.svg",
  "/images/slide/b11.svg",
  "/images/slide/b1.svg",
];
const brands1 = [
  "/images/slide2/b2.svg",
  "/images/slide2/b3.svg",
  "/images/slide2/b4.svg",
  "/images/slide2/b5.svg",
  "/images/slide2/b6.svg",
  "/images/slide2/b7.svg",
  "/images/slide2/b8.svg",
  "/images/slide2/b9.svg",
  "/images/slide2/b11.svg",
  "/images/slide2/b1.svg",
];

export default function BrandSlider() {
  return (
    <Box sx={{ backgroundColor: "#fff", py: 6 }}>
      <div className="px-4 space-y-6 ">
        {/* แถวบน เลื่อนไปทางขวา */}
        <Marquee speed={40}  gradient={false}>
          {brands.map((src, index) => (
            <Box
              key={`top-${index}`}
              sx={{
                mx: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                
              }}
            >
              <Image src={src} alt={`brand-top-${index}`} width={150} height={70} 
              style={{ opacity: 0.5 }}/>
            </Box>
          ))}
        </Marquee>

        {/* แถวล่าง เลื่อนไปทางซ้าย */}
        <Marquee direction="right" speed={40} gradient={false}>
          {brands1.map((src, index) => (
            <Box
              key={`bottom-${index}`}
              sx={{
                mx: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image src={src} alt={`brand-bottom-${index}`} width={150} height={70} 
              style={{ opacity: 0.5 }}/>
            </Box>
          ))}
        </Marquee>
      </div>
    </Box>
  );
}
