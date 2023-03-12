import React, { useState } from "react";
import './Header.css';

function importAll(r) {
    const images = [];
     r.keys().forEach((item, index) => { 
        let fileName = item.replace('./', '');
        let idx = fileName.indexOf('_');
        let name = fileName.slice(0,idx);
        images.push([name,r(item)]); });
    return images
   }

const images = importAll(require.context('../assets', false, /\.(webp)$/));
//Random cannot get 0
const max_val = images.length;
images.unshift(['',"How did you get here?"]);

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
}


function Header({currScore,bestScore, maxScore}) {
    return (
        <div className="head">
            <div>
                <h1>League Memory Game</h1>
                <div className="scoreContent">
                    <p> Current Score: {currScore}</p>
                    <p> Best Score: {bestScore}</p>
                    <p> Max Score: {maxScore}</p>
                </div>
                <p> Get points by clicking on an image but don't click on any more than once!</p>
            </div>
        </div>
      );
}

function Board({setCurrScore,setBestScore,setMaxScore}) {

    const [onceArr, setonceArr] = useState(Array(images.length).fill(false));
    const [uniqueValArr, setUnqiueValArr] = useState(Array(images.length - 1).fill().map((_,i) => i+1))
    setMaxScore(max_val);

    function shuffleUniqueArray()
    {
        //Only this lets React know it has to be updated using the ...
        let newshuffle = [...uniqueValArr];
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
        setUnqiueValArr(newshuffle)
    }

    function resetBoard() {
        setonceArr(Array(images.length).fill(false));
    }

    function updateOnceArr(index)
    {
                //Has to be instanteous update and useState is delayed
        let gameOver = false
        const updatedOnceArr = onceArr.map((c,i) => {
            if(i === index)
            {
                if (c === false)
                {
                    c = true;
                    return c;
                }
                else
                    gameOver = true;
            }
            return c;          
        });
        setonceArr(updatedOnceArr);
        return gameOver;
    }

    function handleClick (index) {
        if(updateOnceArr(index))
        {
            if(setBestScore[0] < setCurrScore[0])
                setBestScore[1](setCurrScore[0]);
            setCurrScore[1](0);
            resetBoard(false);
        }
        else
        {
            setCurrScore[1](setCurrScore[0] + 1)
        }
        shuffleUniqueArray();
    }
        

    return (
        //To swap to map of name and char with and another map with clicked?
        <div className="board">
             <Card characterPot = {images[uniqueValArr[0]][1]}
                   characterName = {images[uniqueValArr[0]][0]}
                   onCardClick =  {() => {handleClick(uniqueValArr[0])}}/>
             <Card characterPot = {images[uniqueValArr[1]][1]}
                   characterName = {images[uniqueValArr[1]][0]}
                   onCardClick =  {() => {handleClick(uniqueValArr[1])}}/>
             <Card characterPot = {images[uniqueValArr[2]][1]}
                   characterName = {images[uniqueValArr[2]][0]}
                   onCardClick =  {() => {handleClick(uniqueValArr[2])}}/>
             <Card characterPot = {images[uniqueValArr[3]][1]}
                   characterName = {images[uniqueValArr[3]][0]}
                   onCardClick =  {() => {handleClick(uniqueValArr[3])}}/>
             <Card characterPot = {images[uniqueValArr[4]][1]}
                   characterName = {images[uniqueValArr[4]][0]}
                   onCardClick =  {() => {handleClick(uniqueValArr[4])}}/>
             <Card characterPot = {images[uniqueValArr[5]][1]}
                   characterName = {images[uniqueValArr[5]][0]}
                   onCardClick =  {() => {handleClick(uniqueValArr[5])}}/>
             <Card characterPot = {images[uniqueValArr[6]][1]}
                   characterName = {images[uniqueValArr[6]][0]}
                   onCardClick =  {() => {handleClick(uniqueValArr[6])}}/> 
             <Card characterPot = {""}
                   characterName = {"Click this to refresh"}
                   onCardClick =  {() => {shuffleUniqueArray()}}/>         
                             
        </div>
      );
}

function Card({characterName,characterPot, onCardClick}) {
    return (
        <div className="card" onClick={onCardClick}>
            <img src={characterPot} alt="No-Name"/>
            <div className="container">
                <h4><b>{characterName}</b></h4>
            </div>
        </div>
      );
}


export {Header, Board};