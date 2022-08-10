import React, {useState} from 'react'

const Child = ({getColor}) => {
    /* Creating a state variable called activeColor and a function called setActiveColor. */
    const [activeColor, setActiveColor] = useState(null);

    /* A function that takes an event as an argument. */
    const handleChange = (e) => {
        const {value } = e.target;
        setActiveColor(value);
        getColor(value);
    }

    return (
        <input
            type="text"
            id="input"
            aria-label="input"
            onChange={handleChange}
            value={activeColor}
            />
    )
};

export default Child;