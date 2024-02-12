import React from "react";
import './Card.css';

function Card({characterName,characterPot, onCardClick}) {
    return (
        <div className="card-container" onClick={onCardClick}>
            <img src={characterPot} alt="No-Name"/>
            <div className="card-name">
                <h4><b>{characterName}</b></h4>
            </div>
        </div>
      );
}

export {Card};