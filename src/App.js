import "./App.css";
import { useEffect, useMemo, useState } from "react";
import { checkFields } from "./checkFuncs/checkFields";
import StartPanel from "./Components/StartPanel";
import { DRAW, startFields, W_PO, W_PX } from "./constatns";
import { BasePanel } from "./Components/BasePanel";
import SelectPanel from "./Components/SelectPanel";

function App() {
  const [fields, setFields] = useState(startFields());
  const [winner, setWinner] = useState("");
  const [count, setCount] = useState(0);
  const [currentPlayer, setCurrentPlayer] = useState("");
  const [selectPl, setSelectPl] = useState(false);

  const getnewFields = (cell, x, y) => {
    if (cell === 0 && currentPlayer !== "") {
      const newFields = [...fields];
      newFields[x][y] = currentPlayer ? 1 : -1;
      setFields(newFields);
      setCount(count + 1);
      setCurrentPlayer(!currentPlayer);
    }
  };

  const getPlayer = (px) => {
    if (!winner && count === 0) {
      px === "px" ? setCurrentPlayer(true) : setCurrentPlayer(false);
    }
  };

  const newGame = () => {
    setFields(startFields());
    setCurrentPlayer("");
    setCount(0);
    setWinner("");
  };

  const stopGame = () => {
    currentPlayer ? setWinner(W_PO) : setWinner(W_PX);
    setCurrentPlayer("");
  };

  const gameOver = () => {
    setWinner(DRAW);
    setCurrentPlayer("");
  };
  useMemo(() => {
    if (count > 4) {
      const res = checkFields(fields);
      if (res) {
        stopGame();
      }
      if (count === 9 && !res) gameOver();
    }
  }, [count]);

  useEffect(() => {
    if (!winner && currentPlayer === "") {
      const timer = setInterval(() => {
        setSelectPl(!selectPl);
      }, 1200);
      return () => clearInterval(timer);
    }
  });

  return (
    <div className="App">
      <div className="container">
        <StartPanel newGame={newGame} />
        <BasePanel 
          fields={fields}
          getnewFields={getnewFields}
          count={count}
          winner={winner}
        />
        <SelectPanel
          currentPlayer={currentPlayer}
          selectPl={selectPl}
          winner={winner}        
          getPlayer={getPlayer}        
        />
      </div>
    </div>
  );
}

export default App;
