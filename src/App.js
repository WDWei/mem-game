import './App.css';
import React, {useState} from "react";
import {Header, Board} from './components/Header';
import { BoardContainer } from './components/BoardContainer';

function App() {
  const [currScore, setCurrScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  let isNew = true;

  return (
  isNew ?
  <div className='flex justify-center items-start min-h-screen bg-beige mx-[20px]'>
    <BoardContainer/> 
  </div> :
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

UPDATED 12/2/2024
TO USE RIOT API AND ASSETS for better management
Update to 8 boxes and 1 reset flip button at the middle
Now you can show all champs so 
spot unique is get count of???




*/

export default App;
