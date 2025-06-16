"use client";

import React from "react";
import CpuIcon from "../icon/s1/cpu.svg";
import HardDisk from "../icon/s1/hard-disk.svg";
import Vgscard from "../icon/s1/vga-card.svg";
import M2 from "../icon/s1/m2.svg";
import Case from "../icon/s1/case.svg";
import Coler from "../icon/s1/cpu-liquid-cooler.svg";
import Solid from "../icon/s1/ssd.svg";
import Main from "../icon/s1/main-board.svg";

import Coler2 from "../icon/s2/cpu-cooler.svg";
import Moniter from "../icon/s2/monitor.svg";
import Powee from "../icon/s2/power-supply.svg";
import Memory from "../icon/s2/memory.svg";
import Keyboard from "../icon/s2/keyboard.svg";
import Mouse from "../icon/s2/mouse.svg";
import Ram from "../icon/s2/ram.svg";

type Category = {
  id: number;
  name: string;
  Images: React.FC<React.SVGProps<SVGSVGElement>>;
};

type Category2 = {
  id: number;
  name: string;
  Images: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const categories2: Category2[] = [
  { id: 1, name: "RAM", Images: Ram },
  { id: 7, name: "CPU Cooler", Images: Coler2 },
  { id: 2, name: "Memory", Images: Memory },
  { id: 3, name: "Power Supply", Images: Powee },
  { id: 4, name: "Monitor", Images: Moniter },
  { id: 5, name: "Keyboard", Images: Keyboard },
  { id: 6, name: "Mouse", Images: Mouse },
];

const categories: Category[] = [
  {
    id: 1,
    name: "CPU",
    Images: CpuIcon,
  },
  {
    id: 2,
    name: "Hard Disk",
    Images: HardDisk,
  },
  {
    id: 3,
    name: "VGA Card",
    Images: Vgscard,
  },
  {
    id: 4,
    name: "M.2",
    Images: M2,
  },
  {
    id: 5,
    name: "Mainboard",
    Images: Main,
  },
  {
    id: 6,
    name: "Case",
    Images: Case,
  },
  {
    id: 7,
    name: "Solid State Drive",
    Images: Solid,
  },
  {
    id: 8,
    name: "Coler",
    Images: Coler,
  },
];

export default function ProductCategories() {
  return (
    <section className="w-full max-w-7xl mx-auto ">
      <h6 className="text-2xl text-center font-bold text-gray-900 mb-10">
        หมวดหมู่สินค้า
      </h6>

      {/* แถวบน */}
      <div className="flex flex-wrap justify-center gap-6 mb-10 ">
        {categories.map(({ id, name, Images }) => (
          <div
            key={id}
            className="flex flex-col items-center relative w-[80px]"
          >
            {name === "VGA Card" && (
              <span
                className="absolute -top-2 right-0 text-[10px] px-1.5 py-0.5 rounded-full font-bold shadow-md 
             text-white bg-red-500 
             animate-[flash_1s_ease-in-out_infinite]"
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
            <div className="bg-gray-100 rounded-full w-[80px] h-[80px] flex items-center justify-center">
              <Images />
            </div>
            <p className="mt-2 text-xs font-bold text-[#1c128a] text-center uppercase">
              {name}
            </p>
          </div>
        ))}
      </div>

      {/* แถวล่าง */}
      <div className="flex flex-wrap justify-center gap-6 ">
        {categories2.map(({ id, name, Images }) => (
          <div key={id} className="flex flex-col items-center  w-[80px]">
            <div className="bg-gray-100 rounded-full w-[80px] h-[80px] flex items-center justify-center">
              <Images />
            </div>
            <p className="mt-2 text-xs font-bold text-[#1c128a] text-center uppercase">
              {name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
