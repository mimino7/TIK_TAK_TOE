import React from "react";
import uniqid from "uniqid";


export const BasePanel = ({ fields, getnewFields, count, winner }) => {
  return (
    <div className="panel__wrap">
      <div className="title">TIK-TAK-TOE</div>
      <div className="content__wrap">
        <div className="cells__wrap">
          {fields.map((line, x) => (
            <div className="line" key={uniqid()}>
              {line.map((cell, y) => (
                <div
                  key={uniqid()}
                  className="cell__item"
                  onClick={() => getnewFields(cell, x, y)}
                >
                  {cell === 0 ? "" : cell === 1 ? "╳" : "◯"}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="count">Total moves: {count}</div>
      <div className="result">{winner}</div>
    </div>
  );
};
