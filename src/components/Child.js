import React, {useState} from 'react'

const Child = ({getColor}) => {
    const [activeColor, setActiveColor] = useState(null);

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
            ></input>
    )
};

export default Child;