"use client";
import Image from "next/image";

export default function BrandBooth() {
  return (
    <div className="w-full h-full  overflow-hidden bg-white flex flex-col items-center">
      <div className="w-full max-w-full  flex items-center justify-center bg-white rounded-2xl shadow-xl p-8">
        <Image
          src="/images/booth.svg"
          alt="booth Logo"
          width={800}
          height={300}
          className="object-contain "
        />
      </div>
    </div>
  );
}
