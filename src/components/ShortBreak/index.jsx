import React from "react";
import { useState, useEffect } from "react";

export const ShortBreak = ({ title }) => {
  const [shortBreak, setShortBreak] = useState(5 * 60);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(`${Date.now()} - paused: ${paused}`);
      if (!paused) {
        setShortBreak((sec) => sec - 1);
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
    setShortBreak(5 * 60);
  }

  return (
    <>
      <h3>{(title = "5 minutes for break")}</h3>
      {`${Math.floor(shortBreak / 60)}:${("00" + (shortBreak % 60)).slice(-2)}`}
      <button onClick={paused ? play : stop}>
        {paused ? "Start" : "Pause"}
      </button>
      <button onClick={RefreshTimer}>Reset</button>
    </>
  );
};
