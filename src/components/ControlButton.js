import React from "react";

function StartGameButton({}) {
    return (
        <div className="pb-20">
            <button
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-4xl px-8 py-4 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Start</button>
        </div>  
      );
}

function InGameButton({}) {
    return (
        <div className="pb-20">
            <button className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-4xl px-8 py-4 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                Re-roll</button>
        </div>
      );
}

function RetryGameButton({}) {
    return (
        <div className="pb-20">
            <button className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-4xl px-8 py-4 text-center me-2 mb-2 dark:focus:ring-yellow-900">
                Try Again</button>
        </div>
      );
}


function ControlButton({gameState,handleGame, isCardFront}) {
    console.log('state',gameState);
    console.log('isCardFront',isCardFront);
    function gameStateHandler(gameState){
        switch(gameState) {
            case 'start':
                return <StartGameButton handleGame={handleGame}/>;
            case 'ingame':
                return <InGameButton handleGame={handleGame}/>;
            case 'again':
                return <RetryGameButton handleGame={handleGame} />
            default:
                return <StartGameButton handleGame={handleGame}/>;
        }
    }
    return (
        <div className={`${isCardFront}: '' :'pointer-events-none'`}onClick={() => handleGame()}>
            {gameStateHandler(gameState)}
        </div>
    )
}

export {ControlButton};