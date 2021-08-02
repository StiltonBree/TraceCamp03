import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Square from "./components/Square"
import Next from "./components/Next"



function Game() {

  //need to convert this into a memory game where the squares blink
  //in a sequence and you copy the pattern until you lose
  //each square will blink in an increasing sequence until it's a pattern of 9
  //after which, you will win

  const [ squares, setSquares ] = useState(Array(9).fill(false));
  
  const gamePattern = [0,2,5,8,3,7,6];
  
  const [gameState,setGameState] = useState("learnState");
  //keeps track of pattern
  //const [pattern,setNextPattern] = useState(1);

  //keeps track of current blinked square
  const [currentBlink, setCurrentBlink] = useState(0);

  function showPattern(i)
  {
   const temp = Array(9).fill(false);
   temp[i] = true;
   setSquares(temp);

  }

  useEffect(()=>{
    if(gameState === "learnState"){
      showPattern(gamePattern[currentBlink]);
    }
  },[currentBlink]
  );

  function renderSquare(i) {
    return <Square
    blinky = {squares[i]}

    onClick={() => {

     if(gameState === "playState")
     {
      if(gamePattern[currentBlink]=== i)
      {
        setCurrentBlink(currentBlink+1);
        console.log(currentBlink);
        if(currentBlink === 6)
        {
         setGameState("winState");
        
        }
      }
      //checks for lose state
      else
      { 
        setGameState("loseState");
      }
      
     }
    }}
  />;
  }


  function renderNextButton() {
    return (
      <Next
        onClick={() => {
          if(gameState === "learnState")
          {
            setCurrentBlink(currentBlink+1);
            if(currentBlink === 7){
              setGameState("playState");
              setCurrentBlink(0);
          }
            
          }
        }}
      />
    );
  }


  return (
    <div className="container">
      <div className="game">
        <div className="game-board">
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
        
        <div className="restart-button">{renderNextButton()}</div>
        {gameState === "winState"? <div>You Win</div>:gameState==="loseState"?<div>You Lose</div>:null}
      </div>
    </div>
  );

}



ReactDOM.render(<Square />, document.getElementById("root"));
ReactDOM.render(<Game />, document.getElementById("root"));

