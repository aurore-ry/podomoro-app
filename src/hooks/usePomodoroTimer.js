import { useCallback, useMemo, useState } from "react";
import { formatSecondsAsMinutesSeconds } from "../utils/formatSecondsAsMinutesSeconds";

const ONE_SECOND_MS = 1 * 1000;

export const usePomodoroTimer = ({ seconds, breakTimeSeconds }) => {
  const [timerSeconds, setTimerSeconds] = useState(seconds);
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
  }, [intervalId, setIntervalId, onTimerUpdate]);

  const pause = useCallback(() => {
    clearInterval(intervalId);
    setIntervalId(null);
  }, [intervalId, setIntervalId]);

  const stop = useCallback(() => {
    clearInterval(intervalId);
    setIntervalId(null);
    setTimerSeconds(seconds);
  }, [intervalId, seconds, setIntervalId, setTimerSeconds]);

  return useMemo(
    () => ({
      timeFormatted,
      timeSeconds: timerSeconds,
      isRunning: intervalId != null,
      play,
      pause,
      stop,
    }),
    [intervalId, pause, play, stop, timeFormatted, timerSeconds]
  );
};
