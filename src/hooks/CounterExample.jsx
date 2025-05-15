import { useState } from "react"
import { useCounter } from "./useCounter"

export const CounterExample = () => {

    const { state,handleCounterPlus, handleCounterLess, handleCounterReset } = useCounter(50);
    // const [{counter1, counter2, counter3}, setCounter] = useState({
    //     counter1: 10,
    //     counter2: 20,
    //     counter3: 30
    // });
    // const handleCounter = () => {
    //     setCounter( {
    //         counter1: counter1 + 1,
    //         counter2: counter2 + 1,
    //         counter3
    //     } );
    // }
    return (
        <>
            <div className="flex flex-col gap-2 justify-center items-center h-screen" >
                <h1 className="text-3xl font-bold underline">
                    Counter: {state}
                </h1>
                {/* <h1 className="text-3xl font-bold underline">
                    Counter 2: {counter2}
                </h1>
                <h1 className="text-3xl font-bold underline">
                    Counter 3: {counter3}
                </h1> */}
                <button onClick={handleCounterPlus} className="mt-3 bg-blue-800 p-3 rounded text-white hover:scale-110 transition">
                    Click me +1
                </button>
                <button onClick={handleCounterLess} className="mt-3 bg-blue-800 p-3 rounded text-white hover:scale-110 transition">
                    Click me -1
                </button>
                <button onClick={handleCounterReset} className="mt-3 bg-blue-800 p-3 rounded text-white hover:scale-110 transition">
                    Click me Reset
                </button>
            </div>
        </>
    )
}
