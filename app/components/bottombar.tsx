"use client";
import Image from "next/image";
import { Grid3X3, Settings, ShoppingBag, User } from "lucide-react";

export default function BottomBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden">
      <div className="relative bg-white border-t border-gray-200 rounded-t-3xl shadow-md px-4 pt-3 pb-6 flex justify-around items-center">
        {/* ซ้ายสุด */}
        <div className="flex flex-col items-center text-xs text-blue-900 font-bold w-1/5">
          <Grid3X3 className="w-6 h-6 mb-1" />
          <span>หมวดหมู่สินค้า</span>
        </div>

        {/* กลางซ้าย */}
        <div className="flex flex-col items-center text-xs text-gray-700 w-1/5">
          <Settings className="w-6 h-6 mb-1" />
          <span>จัดสเปค</span>
        </div>

        {/* ตำแหน่งว่างเผื่อโลโก้ */}
        <div className="w-1/5" />

        {/* กลางขวา */}
        <div className="flex flex-col items-center text-xs text-gray-700 w-1/5">
          <ShoppingBag className="w-6 h-6 mb-1" />
          <span>ตะกร้า</span>
        </div>

        {/* ขวาสุด */}
        <div className="flex flex-col items-center text-xs text-gray-700 w-1/5">
          <User className="w-6 h-6 mb-1" />
          <span>บัญชี</span>
        </div>

        {/* โลโก้ลอยกลาง */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-white rounded-full p-2 shadow-xl">
            <Image
              src="/images/jiblogo.jpg"
              alt="JIB"
              width={56}
              height={56}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
