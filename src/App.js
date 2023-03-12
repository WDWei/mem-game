import './App.css';
import React, { useState} from "react";
import {Header, Board} from './components/Header';

function App() {
  const [currScore, setCurrScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);



  return (
    <div>
      <Header currScore={currScore} bestScore={bestScore} maxScore={maxScore}/>
      <Board  setCurrScore = {[currScore, setCurrScore]} 
              setBestScore = {[bestScore, setBestScore]}
              setMaxScore = {setMaxScore}/>
    </div>
  );
}

//What do we need?
/*
Header -> non-state
Cards(Display 10 + name) -> display nonestate just props
Score - state
BestScore - state
Randomize on click.
Check if the image has been clicked before.

Set prop connect app and board with function of set. (use button to test)
Set up card. Board logic contained in board itself. (contains the images and mem logic)




*/

export default App;
