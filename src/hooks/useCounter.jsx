import { useState } from "react"

export const useCounter = (initialvalue = 10) => {
    const [state, setState] = useState(initialvalue);
    const handleCounterPlus = () => {
        setState(state + 1);
    }
    const handleCounterLess = () => {
        if (state == 1) return;
            
        
        setState(state - 1);
    }
    const handleCounterReset = () => {
        setState(initialvalue);
    }
    return {
        state,
        handleCounterPlus,
        handleCounterLess,
        handleCounterReset
    }
}
