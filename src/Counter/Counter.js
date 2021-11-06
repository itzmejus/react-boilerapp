import React, { useState } from 'react'

function Counter() {
    let [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(count = 0)
    }
    return (
        <div>
            <h1>Counter</h1>
            <button onClick={increment}>Increase</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrement}>Decrement</button>

            <h1>Counter: {count}</h1>
        </div>
    )
}
export default Counter
