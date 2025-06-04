"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import Box from "@mui/material/Box";

const brands = [
  "/images/b2.png",
  "/images/b3.png",
  "/images/b4.png",
  "/images/b5.png",
  "/images/b6.png",
  "/images/b7.png",
  "/images/b8.png",
  "/images/b9.png",
  "/images/b11.png",
  "/images/b12.png",
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
      <div className="px-4 space-y-6">
        {/* แถวบน เลื่อนไปทางขวา */}
        <Marquee speed={40} pauseOnHover gradient={false}>
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
        <Marquee direction="right" speed={40} pauseOnHover gradient={false}>
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
