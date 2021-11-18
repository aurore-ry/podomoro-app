import React from "react";

import { formatSecondsAsMinutesSeconds } from "../../utils/formatSecondsAsMinutesSeconds";

export const BreakTimeButton = ({ seconds, onClick }) => {
  return (
    <button onClick={onClick}>{formatSecondsAsMinutesSeconds(seconds)}</button>
  );
};
