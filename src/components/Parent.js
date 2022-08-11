import React, { useState } from 'react';
import Child from './Child.js';

export default function App() {
    /* Creating a state variable called `UIColor` and a function called `setUIColor` that can be used
    to update the state of `UIColor`. */
    const [UIColor, setUIColor] = useState(null);

    /* A function that takes in a parameter called `color` and returns a function that sets the state
    of `UIColor` to the value of `color`. */
    const getColor = (color) => {
        setUIColor(color)
    };

    return (
        <>
            <div
            style={{
                padding: 100,
                /* Using the state variable `UIColor` to set the background color of the div. */
                background: `${UIColor}`
            }}>
                <p>This area will change the background color based on your selected color</p>
            </div>
            
            <Child 
            /* Passing the function `getColor` to the child component. */
            getColor={getColor} />
        </>
    );
}

