import { useCallback, useState } from "react";

function ClickCounter() {
    const [count, setCount] = useState(0)

    const handleClick = useCallback(() => {
        console.log("Butona klik edildi")
    }, [])

    return (

        <div>

            <button onClick={handleClick}>Klik et</button>
            <button onClick={() => setCount(count + 1)}>Sayi artir{count}</button>
        </div>

    )
}


export default ClickCounter;