import React, { useState, useEffect } from "react";

export const LongBreak = () => {
  const [longBreak, setLongBreak] = useState(15 * 60);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(`${Date.now()} - paused: ${paused}`);
      if (!paused) {
        setLongBreak((sec) => sec - 1);
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
    setLongBreak(15 * 60);
  }

  return (
    <>
      {`${Math.floor(longBreak / 60)}:${("00" + (longBreak % 60)).slice(-2)}`}
      <button onClick={paused ? play : stop}>
        {paused ? "Start" : "Pause"}
      </button>
      <button onClick={RefreshTimer}>Reset</button>
    </>
  );
};
