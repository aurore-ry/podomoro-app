import React from "react";

//components
import { LongBreak } from "../LongBreak";
import { ShortBreak } from "../ShortBreak";
import { Timer } from "../Timer";

export const CardContainer = ({}) => {
  return (
    <>
      <Timer />
      <ShortBreak />
      <LongBreak />
    </>
  );
};
