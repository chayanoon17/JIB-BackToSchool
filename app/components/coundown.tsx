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
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max md:grid-cols-4 sm:grid-cols-2">
      {/* Days */}
      <div className="flex flex-col text-neutral-content relative">
        <span className="text-white absolute top-0 left-0 right-0 text-center font-semibold text-xs sm:text-sm md:text-base">
          วัน
        </span>
        <span className="countdown p-2 bg-neutral/70 rounded-xl font-semibold text-amber-400 text-3xl sm:text-4xl md:text-5xl mt-8">
          <span
            style={{ "--value": time.days } as React.CSSProperties}
            aria-live="polite"
          >
            {time.days}
          </span>
        </span>
      </div>

      {/* Hours */}
      <div className="flex flex-col text-neutral-content relative">
        <span className="text-white absolute top-0 left-0 right-0 text-center font-semibold text-xs sm:text-sm md:text-base">
          ชั่วโมง
        </span>
        <span className="countdown p-2 bg-neutral/70 rounded-xl font-semibold text-amber-400 text-3xl sm:text-4xl md:text-5xl mt-8">
          <span
            style={{ "--value": time.hours } as React.CSSProperties}
            aria-live="polite"
            aria-label="hours"
          >
            {time.hours}
          </span>
        </span>
      </div>

      {/* Minutes */}
      <div className="flex flex-col text-neutral-content relative">
        <span className="text-white absolute top-0 left-0 right-0 text-center font-semibold text-xs sm:text-sm md:text-base">
          นาที
        </span>
        <span className="countdown p-2 bg-neutral/70 rounded-xl font-semibold text-amber-400 text-3xl sm:text-4xl md:text-5xl mt-8">
          <span
            style={{ "--value": time.minutes } as React.CSSProperties}
            aria-live="polite"
            aria-label="minutes"
          >
            {time.minutes}
          </span>
        </span>
      </div>

      {/* Seconds */}
      <div className="flex flex-col text-neutral-content relative">
        <span className="text-white absolute top-0 left-0 right-0 text-center font-semibold text-xs sm:text-sm md:text-base">
          วินาที
        </span>
        <span className="countdown p-2 bg-neutral/70 rounded-xl font-semibold text-amber-400 text-3xl sm:text-4xl md:text-5xl mt-8">
          <span
            style={{ "--value": time.seconds } as React.CSSProperties}
            aria-live="polite"
            aria-label="seconds"
          >
            {time.seconds}
          </span>
        </span>
      </div>
    </div>
  );
};

export default CountdownTimer;
