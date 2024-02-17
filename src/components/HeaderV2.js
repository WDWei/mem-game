import React from "react";

function HeaderV2({currScore,bestScore, numberOfChampion,setNumberOfChampion}) {

    function increaseValue() {
        let value = parseInt(numberOfChampion);
        value += 1;
        setNumberOfChampion(value.toString());
    }

    function decreaseValue() {
        let value = parseInt(numberOfChampion);
        value -= 1;
        setNumberOfChampion(value.toString());
    }

    return (
        <div className="flex max-w">
            <form className="max-w-xs mx-auto">
                <label for="quantity-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose number of champions to memorise:</label>
                <div className="relative flex items-center max-w-[8rem]">
                    <button type="button" id="decrement-button" onClick={() => decreaseValue()} className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                        </svg>
                    </button>
                    <input type="text" 
                            id="quantity-input" 
                            onChange={(e) => {
                                // \D checks non-digit, g match all non-digit and replace with empty string
                                const result = e.target.value.replace(/\D/g, '');
                                setNumberOfChampion(result);
                            }}
                            value={numberOfChampion}
                            onBlur={() => {}}
                            aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="8"  
                    pattern={"[0-9]{1,3}"} required/>
                    <button type="button" id="increment-button" onClick={() => increaseValue()} data-input-counter-increment="quantity-input" className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </button>
                </div>
                <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">Please select a digit number from 1 to 167.</p>
            </form>
            <h1 className="font-headers text-3xl font-bold underline"> LEAGUE OF MEMORY</h1>
            <div className="">
                <h1> Best Score: {bestScore}</h1>
                <h1> Current Score: {currScore}</h1>
            </div>
        </div>
      );
}

export {HeaderV2};