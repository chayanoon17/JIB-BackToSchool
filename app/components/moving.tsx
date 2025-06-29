import Marquee from "react-fast-marquee";
import dynamic from "next/dynamic";
const Amongus = dynamic(() => import("./amongus"), { ssr: false });


export default function MovingLine() {
  return (
    
    <div className="relative h-[30px] ">
      {/* เส้นเหลือง - ล่าง */}

      <div className="absolute top-[16px] left-0 w-full rotate-[-2deg] z-0">
        <Marquee speed={50} direction="right">
          {[...Array(60)].map((_, i) => (
            
            <div
              key={i}
              className="bg-[#FDAF17] px-4 py-1 h-[28px] flex items-center justify-center text-white text-xs font-medium whitespace-nowrap"
            >

              -- JIB TIKTOK BACK TO SCHOOL 💻🖥🖱📔🖍✏ --
            </div>
          ))}
        </Marquee>
      </div>

      {/* เส้นดำ - ทับด้านบน */}
           <div className=" absolute bottom-7">
             <Amongus />
           </div>

      <div className="absolute top-0 left-0 w-full rotate-[2deg] z-10">
        <Marquee speed={50} >
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="bg-black px-4 py-1 h-[28px] flex items-center justify-center text-white text-xs font-medium whitespace-nowrap"
            >
              -- JIB TIKTOK BACK TO SCHOOL 💻🖥🖱📔🖍✏ --
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
