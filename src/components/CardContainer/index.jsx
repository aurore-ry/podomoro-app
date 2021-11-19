import React, { useCallback, useState } from "react";

//style
import "./styles.css";
//components
import { BreakTimeButton } from "../BreakTimeButton";
import { Timer } from "../Timer";

const BREAK_TIME_SECONDS_DEFAULT = 5 * 60;
const BREAK_TIMES_SECONDS = [5 * 60, 10 * 60, 15 * 60];

export const CardContainer = () => {
  const [breakTimeSeconds, setBreakTimeSeconds] = useState(
    BREAK_TIME_SECONDS_DEFAULT
  );

  const onBreakTimeButtonClick = useCallback(
    (seconds) => setBreakTimeSeconds(seconds),
    [setBreakTimeSeconds]
  );

  return (
    <>
      <div id="cards-container">
        <div className="circle">
          <div id="pomodoro-card">
            <Timer breakTimeSeconds={breakTimeSeconds} />
          </div>
        </div>
        <div id="breaks-buttons-container">
          {BREAK_TIMES_SECONDS.map((timeSeconds) => (
            <BreakTimeButton
              key={timeSeconds}
              seconds={timeSeconds}
              onClick={onBreakTimeButtonClick.bind(null, timeSeconds)}
            />
          ))}
        </div>
      </div>
    </>
  );
};
