import { useState } from 'react';

export const useCounter = (initialState = 10) => {
    const [counter, setCounter] = useState(initialState);

    const increment = (factor = 0) => {
        setCounter(counter + factor);
    }

    const decrement = (factor = 0) => {
        setCounter(counter - factor);
    }

    const reset = () => {
        setCounter(initialState);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
