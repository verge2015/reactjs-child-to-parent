# reactjs-child-to-parent
This is a simple demontration on how to pass value from your child component to parent component using callback.

## Process
The parent component contains the title and subtitle in a single ```<div>``` division tag with no color background the child component contains color picker then when you change the color it will forward the selected color value to parent component and apply as background color to ```<div>``` division tag.

## Parent Component Code
```javascript
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
```

## Child Component Code
```javascript
import React, {useState} from 'react'

const Child = ({getColor}) => {
    /* Creating a state variable called activeColor and a function called setActiveColor. */
    const [activeColor, setActiveColor] = useState();

    /* A function that takes an event as an argument. */
    const handleChange = (e) => {
        /* Destructuring the event object and getting the value of the input. */
        const {value } = e.target;
        /* Setting the state of activeColor to the value of the input. */
        setActiveColor(value);
        /* Calling the function getColor and passing it the value of the input. */
        getColor(value);
    }

    return (
        <>
            <p>Pick Color</p>
            <input
                type="color"
                id="input"
                aria-label="input"
                onChange={handleChange}
                value={activeColor}
                />
        </>
    )
};

export default Child;
```

## Installation
```bash
 npm install
 or
 npm i
```

## To Run
```bash
 npm start
```

## Demo
This site was deployed using GitHub Pages, please visit this [site](https://verge2015.github.io/reactjs-child-to-parent/) for actual demo.

![Callback](https://user-images.githubusercontent.com/16742524/184498932-253641d8-e6ed-4c3e-85b2-be02a09436e8.png)
