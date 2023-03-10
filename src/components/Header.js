//import React, { useState } from "react";
import ahri from '../assets/Ahri_SpiritBlossomSkin.webp'
import cait from  '../assets/Caitlyn_SnowMoonSkin.webp'
import './Header.css';

function importAll(r) {
    const images = new Array();
     r.keys().forEach((item, index) => { 
        let fileName = item.replace('./', '');
        let idx = fileName.indexOf('_');
        let name = fileName.slice(0,idx);
        images.push([name,r(item)]); });
    return images
   }

const images = importAll(require.context('../assets', false, /\.(webp)$/));


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
             <Card characterPot = {images[0][1]}
                   characterName = {images[0][0]}/>
             <Card characterPot = {images[4][1]}
                   characterName = {images[4][0]}/>
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