//Custom hook


import { useState } from "react";

function useCounter(initialValue = 0) {


    const [count, setCount] = useState(10);

    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)
    const reset = () => setCount(0)

    return (
        { count, increment, decrement, reset }
    )

}

export default useCounter;