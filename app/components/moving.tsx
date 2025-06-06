import Marquee from "react-fast-marquee";

export default function MovingLine() {
  return (
    <>
      {/* เส้นสีดำ หมุน +3 องศา */}
      <Marquee speed={220} className="rotate-[3deg]">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-black px-4 py-1 h-[28px] flex items-center justify-center text-white text-xs font-medium"
          >
            -- JIB TIKTOK BACK TO SCHOOL 💻🖥🖱📔🖍✏ --
          </div>
        ))}
      </Marquee>

      {/* เส้นสีเหลือง หมุน -3 องศา */}
      <Marquee speed={220} className="rotate-[-3deg]">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-amber-400 px-4 py-1 h-[28px] flex items-center justify-center text-white text-xs font-medium"
          >
            -- JIB TIKTOK BACK TO SCHOOL 💻🖥🖱📔🖍✏ --
          </div>
        ))}
      </Marquee>
    </>
  );
}
