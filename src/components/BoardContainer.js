import React, {useEffect, useState } from "react";
import { HeaderV2} from "./HeaderV2";
import {getRandomIntInclusive, timedPromise} from "./Utils"
import {ControlButton} from "./ControlButton"
import {getScoreCache,setScoreCache} from "./ScoreCache"
import { PlayContainer } from "./PlayContainer";

function BoardContainer() {
    const [currScore, setCurrScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [champData, setChampData] = useState([]); 
    const [champDataKeys, setChampDataKeys] = useState([]);
    const [numberOfChampion, setNumberOfChampion] = useState('8');
    const [champSelection, setChampSelection] = useState([]); 
    const [champPicked, addChampPicked] = useState([]); 
    const [isGameEnabled, setGameEnabled] = useState(true);
    const [gameState, setGameState] = useState('start');
    const [isCardFront, setCardFront] = useState(true);
    // ['start','ingame','again']
    // Need to store as state to update asap cuase it was rendered before updating
    const sourceImg = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/"


    async function getChampions() {
        const res = await fetch('https://ddragon.leagueoflegends.com/cdn/14.3.1/data/en_US/champion.json');
        const text = await res.json();
        const champArr = (Object.keys(text.data));
        setChampData(champArr);
        let champIDArr = Array.from(Array(champArr.length).keys());
        setChampDataKeys(champIDArr);
    }

    async function getLocalBestScore() {
        const ScoreCache = getScoreCache();
        console.log(ScoreCache);
        if(ScoreCache['bestScore']) {
            setBestScore(ScoreCache['bestScore']);
        }
    }

    function shuffleUniqueArray()
    {
        //Only this lets React know it has to be updated using the ...
        let newshuffle = [...champSelection];
        for(let i = 0; i < newshuffle.length; i++)
        {
            let j = getRandomIntInclusive(1,i)
            if(i !== j)
            {
                let temp = newshuffle[i]
                newshuffle[i] = newshuffle[j]
                newshuffle[j] = temp

            }
        }
        setChampSelection(newshuffle)
    }
    

    //Main Game Logic
    function handleGameClick (value) {
        if(isGameEnabled){          
            if(!champPicked.includes(value)){
                //Set counter++
                setCurrScore(currScore + 1);
                addChampPicked(curr => [...curr, value])
                setCardFront(false);   
            }
            else {
                //Gameover change screen blah blah
                if(currScore > bestScore){
                    setBestScore(currScore);
                    setScoreCache(currScore);
                }
                setGameEnabled(false);
                setGameState('again'); 
            }
            console.log('best',bestScore);
            console.log('curr',currScore);
        }
        else{
            // Swap to gameover gg cannot do anything until reset.


        }
    }
    //GameStart Logic to shuffle the characters
    function handleGameStart () {
        function setNewGame() {
            const charSelect = new Set();
            //Initial roll of random champ parked here first before a button gets pressed
            //Must be here due to async and await
            let value = parseInt(numberOfChampion);
            for(let i = 0; i < value; i++) {
                let value = getRandomIntInclusive(0,champDataKeys.length -1);
                if(!charSelect.has(value))
                    charSelect.add(value)
                else
                    i--;
            }
            console.log(charSelect);
            //Set and reset values to start new game
            setChampSelection(Array.from(charSelect))
            setGameEnabled(true);
            addChampPicked([]);
            setCurrScore(0);
            setGameState('ingame');
            setCardFront(false);
        }
        console.log('hello?',gameState)
        if(gameState === 'start'){
            setNewGame();
            console.log(champData.length);
        }
        else if(gameState === 'ingame'){
            setCardFront(false);
        }
        else if(gameState === 'again') {
            setNewGame();
        }
    }

    useEffect(()=> {
        getChampions();
        getLocalBestScore();
    }
    ,[])
    //Shuffle in useEffect to avoid jarring view
    //Double timed promise to shuffle asap then wait to reveal
    useEffect(()=> {
        if(gameState === 'ingame') {
            timedPromise(50).then(() => {
                shuffleUniqueArray();
                timedPromise(500).then(() => {setCardFront(true);})   
            })        
        }
    }
    ,[isCardFront])



    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-between mx-20 px-12">
            <HeaderV2 currScore = {currScore}
                        bestScore = {bestScore}
                        numberOfChampion={numberOfChampion}
                        setNumberOfChampion={setNumberOfChampion} />
            <PlayContainer  gameState={gameState}
                            champSelection={champSelection}
                            champData = {champData}
                            sourceImg = {sourceImg}
                            isCardFront={isCardFront}
                            handleGameClick = {handleGameClick}
                             />
            <ControlButton gameState={gameState} isCardFront={isCardFront} handleGame={handleGameStart} />
        </div>
      );
}


export {BoardContainer};

