//import React, { useState } from "react";
import ahri from '../images/Ahri_SpiritBlossomSkin.webp'
import cait from  '../images/Caitlyn_SnowMoonSkin.webp'
import './Header.css';


function Header({currScore,bestScore}) {
    return (
        <div className="head">
            <div>
                <h1>League Memory Game</h1>
                <div className="scoreContent">
                    <p> Current Score: {currScore}</p>
                    <p> Best Score: {bestScore}</p>
                </div>
                <p> Get points by clicking on an image but don't click on any more than once!</p>
            </div>
        </div>
      );
}

function Board() {
    return (
        //To swap to map of name and char with and another map with clicked?
        <div className="board">
             <Card characterPot = {ahri}
                   characterName = "Ahri"/>
             <Card characterPot = {cait}
                   characterName = "Caitlyn"/>
        </div>
      );
}

function Card({characterName,characterPot}) {
    return (
        <div className="card">
            <img src={characterPot} alt="Avatar"/>
            <div className="container">
                <h4><b>{characterName}</b></h4>
            </div>
        </div>
      );
}


export {Header, Board};