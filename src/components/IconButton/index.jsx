import React from "react";
// import { usePomodoroTimer } from "../../hooks/usePomodoroTimer";

import "./styles.css";

export const IconButton = ({ children, onClick }) => {
  return (
    <button className="icon-button" onClick={onClick}>
      {children}
    </button>
  );
};
