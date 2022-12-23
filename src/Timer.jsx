import React, { useEffect } from "react";

export default function Timer({countdown, minutes, seconds, setMinutes, setSeconds}) {
  const updateTime = () => {
    if (seconds > 0) {
      setSeconds((s) => s - 1);
    } else {
      setSeconds(59);
      setMinutes((m) => m - 1);
    }
  };

  useEffect(() => {
    if (countdown) {
      // const interval = setTimeout(() => {updateTime()}, 1000)
      // return () => clearInterval(interval)
      setTimeout(() => {
        updateTime();
      }, 1000);
    } else {
      setSeconds(0);
      setMinutes(25);
    }
  // eslint-disable-next-line
  }, [seconds, /* minutes, */ countdown]);
  return countdown ? (
    <p className="display-4">
      {!seconds & !minutes
        ? "Time's up!"
        : (minutes > 9 ? `${minutes}:` : `0${minutes}:`) +
          (seconds > 9 ? `${seconds}` : `0${seconds}`)}
    </p>
  ) : (
    <p className="font-style-italic">Timer has yet to be set off.</p>
  );
}
