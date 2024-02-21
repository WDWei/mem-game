import React from "react";
import { Card } from "./Card";


function StartGameScreen({}) {
    return (
        <div className="font-body text-white text-2xl flex flex-col items-start bg-greyForBG rounded-2xl p-4 gap-4">
            <div className="text-3xl underline self-center"> RULES</div>
            <ul className="list-decimal list-inside space-y-4">
                <li> Select the number of champions to memorise at <span className="underline">TOP LEFT</span></li>
                <li> Click each <span className="underline"> UNIQUE </span>portrait once</li>
                <li> Score as high as possible</li>
            </ul>
        </div>
      );
}

function InGameScreen({champSelection,champData, sourceImg, isCardFront, handleGameClick}) {
    return (
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
      );
}


function PlayContainer({gameState,champSelection,champData,sourceImg,isCardFront, handleGameClick}) {
    function PlayContainerState() {
        switch(gameState) {
            case 'start':
                return <StartGameScreen/>;
            case 'ingame':
                return <InGameScreen champSelection={champSelection}  
                                    champData = {champData}
                                    sourceImg = {sourceImg}
                                    handleGameClick = {handleGameClick}
                                    isCardFront={isCardFront}/>;
            case 'again':
                return <InGameScreen champSelection={champSelection}  
                                    champData = {champData}
                                    sourceImg = {sourceImg}
                                    handleGameClick = {handleGameClick}
                                    isCardFront={isCardFront}/>;
            default:
                return <StartGameScreen/>;
        }
    }
    return (
        <div>
            {PlayContainerState()}
        </div>  
      );
}


export {PlayContainer};