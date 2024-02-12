import React, {useEffect, useState } from "react";
import { Card } from "./Card";

function BoardContainer() {
    const [currScore, setCurrScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [maxScore, setMaxScore] = useState(0);
    let champArr = []; // Dont need a state
    let champIDArr = []; //Can be sorted by ID from fetching the json anyways depends.
    let sourceImg = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/"

    async function getChampions() {
        const res = await fetch('https://ddragon.leagueoflegends.com/cdn/14.3.1/data/en_US/champion.json');
        const text = await res.json();
        champArr = (Object.keys(text.data));
        champIDArr = Array.from(Array(champArr.length).keys());
        console.log(champArr);
        console.log(champIDArr);
    }

    useEffect(()=> {
        getChampions();
    }
    ,[])

    return (
        <div>
            <Card characterName = {'Sona'}
                  characterPot =  {sourceImg + 'Sona' + '_' + '0' + '.jpg'}
                  onCardClick = {() => {}}> </Card>
            <img src= {sourceImg + 'Sona' + '_' + '0' + '.jpg'}></img>
        </div>
      );
}


export {BoardContainer};

