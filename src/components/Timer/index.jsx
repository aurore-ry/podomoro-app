import React, { useState, useCallback } from "react";

import { formatSecondsAsMinutesSeconds } from "../../utils/formatSecondsAsMinutesSeconds";

import "./styles.css";

const TIMER_SECONDS_DEFAULT = 25 * 60;
const ONE_SECOND_MS = 1 * 1000;

export const Timer = ({ title = "Time to focus!", breakTimeSeconds }) => {
  const [timerSeconds, setTimerSeconds] = useState(TIMER_SECONDS_DEFAULT);
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
  }, [intervalId, setIntervalId, setTimerSeconds]);

  console.log(breakTimeSeconds);

  return (
    <>
      <h3>{title}</h3>
      <p id="tiktak">{formatSecondsAsMinutesSeconds(timerSeconds)}</p>
      <button onClick={!intervalId ? play : pause} className="button">
        {!intervalId ? "Start" : "Pause"}
      </button>
      <button onClick={stop} className="button">
        Reset
      </button>
    </>
  );
};
