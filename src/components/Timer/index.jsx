import React from "react";
import { Minus, Plus } from "react-feather";

import { usePomodoroTimer } from "../../hooks/usePomodoroTimer";
import { IconButton } from "../IconButton";

import "./styles.css";

const TIMER_SECONDS_DEFAULT = 25 * 60;

export const Timer = ({ title = "Time to focus!", breakTimeSeconds }) => {
  const {
    timeFormatted,
    timerState,
    isRunning,
    play,
    pause,
    stop,
    // increment,
    // decrement,
  } = usePomodoroTimer({
    seconds: TIMER_SECONDS_DEFAULT,
    breakTimeSeconds,
    // increment,
    // decrement,
  });

  return (
    <div className="timer">
      <h3>{timerState}</h3>
      <div className="time-row">
        <div className="time-update-buttons">
          <IconButton>
            <Plus />
          </IconButton>
          <IconButton>
            <Minus />
          </IconButton>
        </div>
        <p className="time-formatted">{timeFormatted}</p>
      </div>
      <div className="time-row">
        <button onClick={!isRunning ? play : pause} className="button">
          {!isRunning ? "Start" : "Pause"}
        </button>
        <button onClick={stop} className="button">
          Reset
        </button>
      </div>
    </div>
  );
};
