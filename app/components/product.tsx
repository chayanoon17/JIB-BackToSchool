"use client";

import React from "react";
import CpuIcon from "../icon/s1/cpu.svg";
import HardDisk from "../icon/s1/harddisk.svg";
import Vgscard from "../icon/s1/vgscard.svg";
import M2 from "../icon/s1/m2.svg";
import Case from "../icon/s1/case.svg";
import Coler from "../icon/s1/coler.svg";
import Solid from "../icon/s1/solid.svg";
import Main from "../icon/s1/main.svg";

import Coler2 from "../icon/s2/coler2.svg";
import Moniter from "../icon/s2/moniter.svg";
import Powee from "../icon/s2/power.svg";
import Memory from "../icon/s2/memory.svg";
import Keyboard from "../icon/s2/keyboard.svg";
import Mouse from "../icon/s2/mouse.svg";
import Ram from "../icon/s2/ram.svg";


type Category = {
  id: number;
  name: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

type Category2 = {
  id: number;
  name: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const categories2: Category2[] = [
    {  id: 1,
    name: "CPU Cooler",
    Icon: Coler2,
    },
    {  id: 2,
    name: "Monitor",
    Icon: Moniter,
    },
    {  id: 3,
    name: "Power Supply",
    Icon: Powee,
    },
    {  id: 4,
    name: "Memory",
    Icon: Memory,
    },
    {  id: 5,
    name: "Keyboard",
    Icon: Keyboard,
    },
    {  id: 6,
    name: "Mouse",
    Icon: Mouse,
    },
    {  id: 7,
    name: "RAM",
    Icon: Ram,
    },
];


const categories: Category[] = [
  {
    id: 1,
    name: "CPU",
    Icon: CpuIcon,
  },
  {
    id: 2,
    name: "Hard Disk",
    Icon: HardDisk,
  },
  {
    id: 3,
    name: "VGA Card",
    Icon: Vgscard,
  },
  {
    id: 4,
    name: "M.2",
    Icon: M2,
  },
  {
    id: 5,
    name: "Case",
    Icon: Case,
  },
  {
    id: 6,
    name: "Coler",
    Icon: Coler,
  },
  {
    id: 7,
    name: "Solid State Drive",
    Icon: Solid,
  },
  {
    id: 8,
    name: "Mainboard",
    Icon: Main,
  },
];

export default function ProductCategories() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-8 mt-20">
  <h2 className="text-2xl text-center text-black font-bold mb-6">หมวดหมู่สินค้า</h2>

  {/* แถวบน */}
  <div className="grid grid-cols-1 sm:grid-cols-8 gap-6 mb-8">
    {categories.map(({ id, name, Icon }) => (
      <div
        key={id}
        className=" flex flex-col items-center justify-center cursor-pointer hover:shadow-xl transition-shadow p-6"
      >
        <Icon height={100} className="text-indigo-600" />
        <h3 className="mt-4 text-sm font-medium text-blue-800 text-center">{name}</h3>
      </div>
    ))}
  </div>

  {/* แถวล่าง */}
  <div className="flex flex-wrap justify-center gap-1 ">
    {categories2.map(({ id, name, Icon }) => (
      <div
        key={id}
        className=" flex flex-col items-center justify-center cursor-pointer hover:shadow-xl transition-shadow p-6"
      >
        <Icon height={100} className="text-indigo-600" />
        <h3 className="mt-4 text-sm font-medium text-blue-800 text-center">{name}</h3>
      </div>
    ))}
  </div>
</section>

  );
}
