import React from "react";

const SelectPanel = ({ currentPlayer, selectPl, winner, getPlayer }) => {
  return (
    <div className="panel__wrap">
      <div className="panel__title">
        {currentPlayer === "" ? `SELECT PLAYER` : `NOW PLAYING:`}
      </div>
      <div
        className={
          !selectPl && currentPlayer === "" && !winner
            ? "panel__select active"
            : "panel__select"
        }
      >
        <div
          className={currentPlayer ? `player__x active` : `player__x`}
          onClick={() => getPlayer("px")}
        >
          Player X
        </div>
      </div>
      <div
        className={
          selectPl && currentPlayer === "" && !winner
            ? "panel__select active"
            : "panel__select"
        }
      >
        <div
          className={
            !currentPlayer && currentPlayer !== ""
              ? `player__x active`
              : `player__x`
          }
          onClick={() => getPlayer("po")}
        >
          Player O
        </div>
      </div>
    </div>
  );
};

export default SelectPanel;
