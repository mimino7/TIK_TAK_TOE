import React from "react";
import { ButtonStart } from "../myUI/ButtonStart/ButtonStart";

const StartPanel = ({ newGame }) => {
  return (
    <div className="panel__wrap">
      <div className="panel__title">START/STOP </div>
      <ButtonStart newGame={newGame}>New Game</ButtonStart>
    </div>
  );
};

export default StartPanel;
