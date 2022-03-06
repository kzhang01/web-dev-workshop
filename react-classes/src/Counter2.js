import React, { useState } from 'react'
import './main.css';

function Counter2 () {
    const [val, setVal] = useState(0);

    function increment() {
        setVal(val+1);
    }

    return (
        <div>
            <h2>Current value:</h2>
            <p id="curr_val">{val}</p>
            <button id="increment" onClick={increment}>+</button>
        </div>
    );
}

export default Counter2;