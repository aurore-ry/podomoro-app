import { useCallback, useEffect, useMemo, useState } from "react";
import { formatSecondsAsMinutesSeconds } from "../utils/formatSecondsAsMinutesSeconds";

const ONE_SECOND_MS = 1 * 1000;

export const usePomodoroTimer = ({ seconds, breakTimeSeconds }) => {
  const [breakTime, setBreakTime] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(seconds);
  const [timerState, setTimerState] = useState("Set time and start");
  const [intervalId, setIntervalId] = useState(null);

  const onTimerUpdate = useCallback(() => {
    setTimerSeconds((prevSeconds) => prevSeconds - 1);
  }, [setTimerSeconds]);

  const timeFormatted = useMemo(
    () => formatSecondsAsMinutesSeconds(timerSeconds),
    [timerSeconds]
  );

  const play = useCallback(() => {
    if (intervalId != null) {
      return;
    }

    setIntervalId(setInterval(onTimerUpdate, ONE_SECOND_MS));
    setTimerState(breakTime === false ? "Time To Focus" : "Break");
  }, [breakTime, intervalId, setIntervalId, onTimerUpdate]);

  const pause = useCallback(() => {
    clearInterval(intervalId);
    setIntervalId(null);
    setTimerState("Paused");
  }, [intervalId, setIntervalId]);

  const stop = useCallback(() => {
    clearInterval(intervalId);
    setIntervalId(null);
    setTimerSeconds(seconds);
    setTimerState("Set time and start");
    setBreakTime(false);
  }, [intervalId, seconds, setBreakTime, setIntervalId, setTimerSeconds]);

  useEffect(() => {
    if (intervalId == null) {
      return;
    }

    if (timerSeconds <= 0 && !breakTime) {
      pause();
      setTimerState("Break time");
      setTimerSeconds(breakTimeSeconds);
      setBreakTime(true);
    }

    if (timerSeconds <= 0 && breakTime) {
      pause();
      setTimerState("Set time and start");
      setTimerSeconds(seconds);
      setBreakTime(false);
    }
  }, [
    breakTimeSeconds,
    intervalId,
    timerSeconds,
    pause,
    setTimerSeconds,
    setTimerState,
  ]);

  return useMemo(
    () => ({
      timeFormatted,
      timeSeconds: timerSeconds,
      timerState,
      isRunning: intervalId != null,
      play,
      pause,
      stop,
    }),
    [intervalId, pause, play, stop, timeFormatted, timerSeconds, timerState]
  );
};
