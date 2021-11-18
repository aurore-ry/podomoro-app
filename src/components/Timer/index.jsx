import React, { useState, useEffect, useCallback } from "react";

import "./styles.css";

const TIMER_SECONDS_DEFAULT = 25 * 60;
const PAUSE_TIME_SECONDS_DEFAULT = 5 * 60;
const ONE_SECOND_MS = 1 * 1000;

export const Timer = ({ title }) => {
  const [timerSeconds, setTimerSeconds] = useState(TIMER_SECONDS_DEFAULT);
  const [pauseTimeSeconds, setPauseTimeSeconds] = useState(
    PAUSE_TIME_SECONDS_DEFAULT
  );
  const [intervalId, setIntervalId] = useState(null);

  const onTimerUpdate = useCallback(() => {
    setTimerSeconds((prevSeconds) => prevSeconds - 1);
  }, [setTimerSeconds]);

  const play = useCallback(() => {
    if (intervalId != null) {
      return;
    }

    setIntervalId(setInterval(onTimerUpdate, ONE_SECOND_MS));
  }, [intervalId, setIntervalId, onTimerUpdate]);

  const pause = useCallback(() => {
    clearInterval(intervalId);
    setIntervalId(null);
  }, [intervalId, setIntervalId]);

  const stop = useCallback(() => {
    clearInterval(intervalId);
    setIntervalId(null);
    setTimerSeconds(TIMER_SECONDS_DEFAULT);
  }, []);
  return (
    <>
      <h3>{(title = "Time to focus!")}</h3>
      <p id="tiktak">
        {`${Math.floor(timerSeconds / 60)}:${("00" + (timerSeconds % 60)).slice(
          -2
        )}`}
      </p>
      <button onClick={!intervalId ? play : pause} className="button">
        {!intervalId ? "Start" : "Pause"}
      </button>
      <button onClick={stop} className="button">
        Reset
      </button>
    </>
  );
};
