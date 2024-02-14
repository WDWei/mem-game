import React, {useEffect, useState } from "react";
import { Card } from "./Card";
import { HeaderV2} from "./HeaderV2";
import {getRandomIntInclusive} from "./Utils"

function BoardContainer() {
    const [currScore, setCurrScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [maxScore, setMaxScore] = useState(0);
    const [champData, setChampData] = useState([]); 
    const [champSelection, setChampSelection] = useState([]); 
    const [champPicked, addChampPicked] = useState([]); 
    const [isChampionEnabled, setChampionEnabled] = useState(true);
    // Need to store as state to update asap cuase it was rendered before updating
    let sourceImg = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/"


    async function getChampions() {
        const res = await fetch('https://ddragon.leagueoflegends.com/cdn/14.3.1/data/en_US/champion.json');
        const text = await res.json();
        const champArr = (Object.keys(text.data));
        const charSelect = new Set();
        setChampData(champArr);
        let champIDArr = Array.from(Array(champArr.length).keys());

        //Initial roll of random champ parked here first before a button gets pressed
        //Must be here due to async and await
        for(let i = 0; i < 10; i++) {
            let value = getRandomIntInclusive(0,champIDArr.length -1);
            if(!charSelect.has(value))
                charSelect.add(value)
            else
                i--;
        }
        console.log('the random',charSelect )
        setChampSelection(Array.from(charSelect))
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
    
    function handleGameClick (value) {
        if(isChampionEnabled){          
            if(!champPicked.includes(value)){
                //Set counter++
                setCurrScore(currScore + 1);
                addChampPicked(curr => [...curr, value])
                shuffleUniqueArray();
            }
            else {
                //Gameover change screen blah blah
                setBestScore(currScore);
                //setCurrScore(0); 
                setChampionEnabled(false);         
            }
            console.log('best',bestScore);
            console.log('curr',currScore);
        }
        else{
            // Swap to gameover gg cannot do anything until reset.


        }

        // if(updateOnceArr(index))
        // {
        //     if(setBestScore[0] < setCurrScore[0])
        //         setBestScore[1](setCurrScore[0]);
        //     setCurrScore[1](0);
        //     resetBoard(false);
        // }
        // else
        // {
        //     setCurrScore[1](setCurrScore[0] + 1)
        // }
    }

    useEffect(()=> {
        getChampions();
    }
    ,[])



    return (
        <div>
            <h1 className="font-headers text-3xl font-bold underline"> Hello World!</h1>
            <HeaderV2 currScore = {currScore} bestScore = {bestScore}/>
            <div>
                { champSelection.slice(0,8).map((value) => {
                    return <Card 
                            key={value} //To remove ReactJS error about keys
                            characterName = {champData[value]}
                            characterPot =  {`${sourceImg}${champData[value]}_0.jpg`}
                            onCardClick = {() => {handleGameClick(value)}}>
                            </Card>
                        })}
                        <img src= {sourceImg + 'Sona' + '_' + '0' + '.jpg'}></img>
            </div>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Cyan to blue
            </span>
            </button>
        </div>
      );
}


export {BoardContainer};

