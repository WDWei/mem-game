import React, {useEffect, useState } from "react";
import { Card } from "./Card";
import { HeaderV2} from "./HeaderV2";
import {getRandomIntInclusive, timedPromise} from "./Utils"
import {ControlButton} from "./ControlButton"

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
    let sourceImg = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/"


    async function getChampions() {
        const res = await fetch('https://ddragon.leagueoflegends.com/cdn/14.3.1/data/en_US/champion.json');
        const text = await res.json();
        const champArr = (Object.keys(text.data));
        setChampData(champArr);
        let champIDArr = Array.from(Array(champArr.length).keys());
        setChampDataKeys(champIDArr);
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
                setBestScore(currScore);
                //setCurrScore(0); 
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
        console.log('HandleGameStart');
        console.log('hello?',gameState)
        if(gameState === 'start'){
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
            addChampPicked([]);
            setGameState('ingame');
            console.log(champData.length);
        }
        else if(gameState === 'ingame'){
            shuffleUniqueArray();
        }
    }

    useEffect(()=> {
        getChampions();
    }
    ,[])
    //Shuffle in useEffect to avoid jarring view
    //Double timed promise to shuffle asap then wait to reveal
    useEffect(()=> {
        if(gameState === 'ingame') {
            timedPromise(50).then(() => {
                shuffleUniqueArray();
                timedPromise(650).then(() => {setCardFront(true);})   
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
            <div className="flex flex-wrap gap-6 justify-around py-8">
                { champSelection.slice(0,8).map((value,i) => {
                    return <Card 
                            key={i} //To remove ReactJS error about keys
                            characterName = {champData[value]}
                            characterPot =  {`${sourceImg}${champData[value]}_0.jpg`}
                            onCardClick = {() => {handleGameClick(value)}}
                            isCardFront = {isCardFront}>
                            </Card>
                        })}
            </div>
            <ControlButton gameState={gameState} handleGame={handleGameStart}/>
        </div>
      );
}


export {BoardContainer};

