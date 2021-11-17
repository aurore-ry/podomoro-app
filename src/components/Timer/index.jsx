import React, { useState, useEffect } from "react";

import "./styles.css";

export const Timer = ({ title }) => {
  const runtime = 0;

  const [seconds, setSeconds] = useState(25 * 60);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(`${Date.now()} - paused: ${paused}`);

      if (seconds === runtime) {
        return paused;
      } else if (!paused) {
        setSeconds((sec) => sec - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [paused, seconds]);

  function play() {
    setPaused(false);
  }
  function stop() {
    setPaused(true);
    // setSeconds(0);
  }

  function RefreshTimer() {
    setPaused(true);
    setSeconds(25 * 60);
  }

  return (
    <>
      <h3>{(title = "Time to focus!")}</h3>
      <p id="tiktak">
        {`${Math.floor(seconds / 60)}:${("00" + (seconds % 60)).slice(-2)}`}
      </p>
      <button onClick={paused ? play : stop} className="button">
        {paused ? "Start" : "Pause"}
      </button>
      <button onClick={RefreshTimer} className="button">
        Reset
      </button>
    </>
  );
};
