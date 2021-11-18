import React from "react";
import { usePomodoroTimer } from "../../hooks/usePomodoroTimer";

import "./styles.css";

const TIMER_SECONDS_DEFAULT = 25 * 60;

export const Timer = ({ title = "Time to focus!", breakTimeSeconds }) => {
  const { timeFormatted, isRunning, play, pause, stop } = usePomodoroTimer({
    seconds: TIMER_SECONDS_DEFAULT,
    breakTimeSeconds,
  });

  return (
    <>
      <h3>{title}</h3>
      <p id="tiktak">{timeFormatted}</p>
      <button onClick={!isRunning ? play : pause} className="button">
        {!isRunning ? "Start" : "Pause"}
      </button>
      <button onClick={stop} className="button">
        Reset
      </button>
    </>
  );
};
