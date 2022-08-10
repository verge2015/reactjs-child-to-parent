import React, { useState } from 'react';
import Child from './Child.js';

export default function App() {
    const [UIcolor, setUIColor] = useState(null);

    //Callback function
    const getColor = (color) => {
        setUIColor(color)
    };

    return (
        <>
            <div
                style={{
                    padding: 100,
                    background: `${UIcolor}`
                }}
            >
                <p>This area will change the background color based on color you input</p>
            </div>
            
            <Child 
            /* Passing the function `getColor` to the child component. */
            getColor={getColor} />
        </>
    );
}

