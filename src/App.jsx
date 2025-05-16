import React, { useState } from "react";
import Board from "./component/Board";

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currMove,setCurrMove]=useState(0);
  const xIsNext=currMove%2===0;
  const currentSquares=history[currMove];

  function handlePlay(nextSquares){
    const nextHistory=[...history.slice(0,currMove+1),nextSquares];
    setHistory(nextHistory);
    setCurrMove(nextHistory.length-1);
  }
  function jumpTo(nextMove){
    setCurrMove(nextMove);
  }
  const moves=history.map((squares,move)=>{
    let desc;
    if(move>0){
      desc='Go to move #'+move;
    }
    else{
      desc='Go to game start';
    }
    return <li key={move}>
      <button onClick={()=>jumpTo(move)}>{desc}</button>
    </li>
  })
  return (
    <div className="container">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className="time-travel">
        <ol>{moves}</ol>
        
      </div>
    </div>
  );
}

export default App;
