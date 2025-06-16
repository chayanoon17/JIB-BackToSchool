import React, { useState, useEffect } from "react";
const CountdownTimer = () => {
  const [time, setTime] = useState({
    days: 3,
    hours: 8,
    minutes: 19,
    seconds: 59,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        } else if (prevTime.days > 0) {
          return { ...prevTime, days: prevTime.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(interval);
          return prevTime;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-ful  grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 text-center">
      {/* Days */}
      <div className="flex flex-col text-neutral-content relative ">
        <span className="text-white absolute top-0 left-0 right-9 text-center font-light text-sm sm:text-sm md:text-base">
          วัน
        </span>
        <div className="flex justify-center ">
            <div className="
            countdown p-2 py-3 bg-black/70 rounded-xl font-semibold text-[#fdb022] text-3xl sm:text-4xl md:text-4xl mt-8
            ">
            <span
              style={{ "--value": String(time.days).padStart(2, "0") } as React.CSSProperties}
              aria-live="polite"
            >
              {String(time.days).padStart(2, "0")}
            </span>
          </div>
          <span className="font-semibold text-gray-400 text-4xl sm:text-4xl md:text-4xl mt-8 p-3">
            :
          </span>
        </div>
      </div>

      {/* Hours */}
      <div className="flex flex-col text-neutral-content relative ">
        <span className="text-white absolute top-0 left-0 right-6 text-center font-light text-xs sm:text-sm md:text-base">
          ชั่วโมง
        </span>
        <div className="flex justify-center">
          <span className="countdown p-2 py-3 bg-black/70  rounded-xl font-semibold text-[#fdb022] text-3xl sm:text-4xl md:text-4xl mt-8">
            <span
              style={{ "--value": String(time.hours).padStart(2, "0") } as React.CSSProperties}
              aria-live="polite"
            >
              {String(time.hours).padStart(2, "0")}
            </span>
          </span>
          <span className="font-semibold text-gray-400 text-4xl sm:text-4xl md:text-4xl mt-8 p-3">
            :
          </span>
        </div>
      </div>

      {/* Minutes */}
      <div className="flex flex-col text-neutral-content relative ">
        <span className="text-white absolute top-0 left-0 right-8 text-center font-light text-xs sm:text-sm md:text-base">
          นาที
        </span>
        <div className="flex justify-center">
          <span className="countdown p-2 py-3 bg-black/70 rounded-xl font-semibold text-[#fdb022] text-3xl sm:text-4xl md:text-4xl mt-8 font-mono">
            <span
              style={{ "--value": String(time.minutes).padStart(2, "0") } as React.CSSProperties}
              aria-live="polite"
            >
              {String(time.minutes).padStart(2, "0")}
            </span>
          </span>
          <span className="font-semibold text-gray-400 text-4xl sm:text-4xl md:text-4xl mt-8 p-3">
            :
          </span>
        </div>
      </div>

      {/* Seconds */}
      <div className="flex flex-col text-neutral-content relative">
        <span className="text-white absolute top-0 left-0 right-0 text-start font-light text-xs sm:text-sm md:text-base">
          วินาที
        </span>
        <div className="flex justify-start">
          <div className="countdown p-2 py-3 bg-black/70 rounded-xl font-semibold text-[#fdb022] text-3xl sm:text-4xl md:text-4xl mt-8 font-mono">
            <span
              style={{ "--value": String(time.seconds).padStart(2, "0") } as React.CSSProperties}
              aria-live="polite"
            >
              {String(time.seconds).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
