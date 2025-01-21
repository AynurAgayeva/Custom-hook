import useCounter from "../hooks/useCounter";

function CounterComponent(){

    const {count, increment, decrement, reset} = useCounter(10)

    return(
        <div>

            <h2>Saygac: {count}</h2>
            <button onClick={increment}>Artir</button>
            <button onClick={decrement}>Azalt</button>
            <button onClick={reset}>Sifirla</button>
        </div>
    )



}

export default CounterComponent;