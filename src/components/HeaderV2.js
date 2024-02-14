import React from "react";

function HeaderV2({currScore,bestScore}) {
    return (
        <div className="flex">
            <h1> Best Score:{bestScore}</h1>
            <h1> Current Score:{currScore}</h1>
        </div>
      );
}

export {HeaderV2};