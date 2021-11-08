import React, { useState } from 'react'
import Home from '../Layouts/Home';

function Display() {
    const [state, setState] = useState(false)
    return (
        <div>
            <h1 onClick={() => setState(!state)}>Click here</h1>
            {state ?
                <Home />
                : null}
        </div>
    )
}
export default Display
