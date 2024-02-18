import React from "react";

function StartGameButton({handleGame}) {
    return (
        <div className="pb-20">
            <button onClick={() => handleGame()} className="w-128 h-128 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
                Start</button>
        </div>  
      );
}

function InGameButton({handleGame}) {
    return (
        <div className="pb-20">
            <button onClick={() => handleGame()} className="w-128 h-128 text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
                Re-roll</button>
        </div>
      );
}

function RetryGameButton({handleGame}) {
    return (
        <div className="pb-20">
            <button onClick={() => handleGame()} className="w-128 h-128 text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">
                Try Again</button>
        </div>
      );
}


function ControlButton({gameState,handleGame}) {
    console.log('state',gameState);
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

export {ControlButton};