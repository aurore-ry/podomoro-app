import React, { useState, useEffect } from "react";

export const Timer = () => {
  const [seconds, setSeconds] = useState(25 * 60);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(`${Date.now()} - paused: ${paused}`);
      if (!paused) {
        setSeconds((sec) => sec - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [paused]);

  function play() {
    setPaused(false);
  }
  function stop() {
    setPaused(true);
  }
  function RefreshTimer() {
    setPaused(true);
    setSeconds(25 * 60);
  }

  return (
    <>
      {`${Math.floor(seconds / 60)}:${("00" + (seconds % 60)).slice(-2)}`}
      <button onClick={paused ? play : stop}>
        {paused ? "Start" : "Pause"}
      </button>
      <button onClick={RefreshTimer}>Reset</button>
    </>
  );
};
