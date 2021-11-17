import React from "react";

//style
import "./styles.css";
//components
import { LongBreak } from "../LongBreak";
import { ShortBreak } from "../ShortBreak";
import { Timer } from "../Timer";

export const CardContainer = ({}) => {
  return (
    <>
      <div id="cards-container">
        <div id="pomodoro-card">
          <Timer />
        </div>
        <div id="shortBreak-card">
          <ShortBreak />
        </div>
        <div id="longBreak-card">
          <LongBreak />
        </div>
      </div>
    </>
  );
};
