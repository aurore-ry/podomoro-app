import React from "react";

import "./styles.css";

export const IconButton = ({ children, onClick }) => {
  return (
    <button className="icon-button" onClick={onClick}>
      {children}
    </button>
  );
};
