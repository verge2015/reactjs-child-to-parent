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