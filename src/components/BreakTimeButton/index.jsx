import React from "react";

import { formatSecondsAsMinutesSeconds } from "../../utils/formatSecondsAsMinutesSeconds";

import "./styles.css";

export const BreakTimeButton = ({ seconds, onClick }) => {
  return (
    <button onClick={onClick} className="break-time-buttons">
      {formatSecondsAsMinutesSeconds(seconds)}
    </button>
  );
};
