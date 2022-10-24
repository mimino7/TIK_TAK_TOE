import React from "react";
import cl from "./buttonstart.module.css";

export const ButtonStart = ({ newGame, children }) => {
  return (
    <div className={cl.tesuen_r} onClick={newGame}>
      {children}
    </div>
  );
};
