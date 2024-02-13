import React, {useEffect, useState } from "react";
import { Card } from "./Card";
import {getRandomIntInclusive} from "./Utils"

function BoardContainer() {
    const [currScore, setCurrScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [maxScore, setMaxScore] = useState(0);
    const [champData, setChampData] = useState([]); 
    const [champSelection, setChampSelection] = useState([]); 
    const [champPicked, setChampPicked] = useState([]); 
    // Need to store as state to update asap cuase it was rendered before updating
    let champIDArr = []; //Can be sorted by ID from fetching the json anyways depends.
    let sourceImg = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/"


    async function getChampions() {
        const res = await fetch('https://ddragon.leagueoflegends.com/cdn/14.3.1/data/en_US/champion.json');
        const text = await res.json();
        const champArr = (Object.keys(text.data));
        const charSelect = new Set();
        setChampData(champArr);
        champIDArr = Array.from(Array(champArr.length).keys());

        //Initial roll of random champ parked here first before a button gets pressed
        //Must be here due to async and await
        for(let i = 0; i < 8; i++) {
            console.log('length',champIDArr.length)
            let value = getRandomIntInclusive(0,champIDArr.length -1);
            console.log(value)
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
    
    function handleClick (index) {
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
        shuffleUniqueArray();
    }

    useEffect(()=> {
        getChampions();
    }
    ,[])



    return (
        <div>
            { champSelection.map((value) => {
                return <Card characterName = {champData[value]}
                      characterPot =  {`${sourceImg}${champData[value]}_0.jpg`}
                      onCardClick = {() => {handleClick(value)}}> </Card>
                    })}
                    <img src= {sourceImg + 'Sona' + '_' + '0' + '.jpg'}></img>
        </div>
      );
}


export {BoardContainer};

