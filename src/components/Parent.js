import React, { useState } from 'react';
import Child from './Child.js';

export default function App() {
    /* Creating a state variable called `UIColor` and a function called `setUIColor` that can be used
    to update the state of `UIColor`. */
    const [UIColor, setUIColor] = useState();

    /* A function that takes in a parameter called `color` and returns a function that sets the state
    of `UIColor` to the value of `color`. */
    const getColor = (color) => {
        setUIColor(color)
    };

    return (
        <>
            <div
            className='App'
            style={{
                padding: 100,
                /* Using the state variable `UIColor` to set the background color of the div. */
                background: `${UIColor}`
            }}>
                <h1 className='App-header'>Pass Value from Child to Parent using Callback</h1>
                <h3>This area will change the background color based on your selected color</h3>
            </div>
            
            <Child 
            /* Passing the function `getColor` to the child component. */
            getColor={getColor} />
        </>
    );
}

