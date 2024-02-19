import React from "react";

//https://stackoverflow.com/questions/69864018/smooth-transition-on-menu-show-and-collapsed
//Another way but its still uglier
function Card({characterName,characterPot, onCardClick, isCardFront}) {

    
    return (
        <div className={`${isCardFront? 'transition-transform duration-200 hover:scale-110 bg-emerald-200' : 
        'transition duration-200 [transform:rotateY(180deg)] bg-white pointer-events-none'} text-center w-[144px] shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] pb-0.5 rounded-md`}
        onClick={onCardClick}>
            <div className={`${isCardFront? '': 'transition-all duration-200 opacity-0'}`}>
                <img className='w-[inherit] object-fill rounded-md'src={characterPot} alt="No-Name"/>
                <div className="card-name">
                    <h4><b>{characterName}</b></h4>
                </div>
            </div>
        </div>
      );
}

export {Card};