"use client";
import Image from "next/image";

export default function BrandBooth() {
  return (
    <div className="w-full  overflow-hidden bg-white flex flex-col items-center pt-20">
      <div className="w-full max-w-full h-auto flex items-center justify-center bg-white rounded-2xl shadow-xl p-8">
        <Image
          src="/images/booth.svg"
          alt="booth Logo"
          width={1000}
          height={300}
          className="object-contain"
        />
      </div>
    </div>
  );
}
